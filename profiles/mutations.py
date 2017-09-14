from django.contrib.auth.tokens import default_token_generator

from djoser import settings as djoser_settings
from djoser.utils import decode_uid

import graphene
from graphene import relay

from rest_framework_jwt.serializers import (
    JSONWebTokenSerializer,
    RefreshJSONWebTokenSerializer
    )

from .models import User as UserModel
from .schema import User




class Register(relay.ClientIDMutation):
    """
    Mutation to register a user
    """
    class Input:
        email = graphene.String(required=True)
        password = graphene.String(required=True)
        password_repeat = graphene.String(required=True)

    success = graphene.Boolean()
    errors = graphene.List(graphene.String)

    @classmethod
    def mutate_and_get_payload(cls, input, context, info):
        email = input.get('email')
        password = input.get('password')
        password_repeat = input.get('password_repeat')

        if password == password_repeat:
            try:
                user = UserModel.objects.create(
                    email=email,
                    is_active=False
                    )
                user.set_password(password)
                user.save()
                
                return Register(success=bool(user.id))
            except:
                errors = ["email", "Email already registered."]
                return Register(success=False, errors=errors)
        errors = ["password", "Passwords don't match."]
        return Register(success=False, errors=errors)





class Login(relay.ClientIDMutation):
    """
    Mutation to login a user
    """
    class Input:
        email = graphene.String(required=True)
        password = graphene.String(required=True)

    success = graphene.Boolean()
    errors = graphene.List(graphene.String)
    token = graphene.String()
    user = graphene.Field(User)

    @classmethod
    def mutate_and_get_payload(cls, input, context, info):
        user = {'email': input['email'], 'password': input['password']}
        serializer = JSONWebTokenSerializer(data=user)
        if serializer.is_valid():
            token = serializer.object['token']
            user = serializer.object['user']
            return Login(success=True, user=user, token=token, errors=None)
        else:
            return Login(
                success=False,
                token=None,
                errors=['email', 'Unable to login with provided credentials.']
                )


class RefreshToken(relay.ClientIDMutation):
    """
    Mutation to reauthenticate a user
    """
    class Input:
        token = graphene.String(required=True)

    success = graphene.Boolean()
    errors = graphene.List(graphene.String)
    token = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, input, context, info):
        serializer = RefreshJSONWebTokenSerializer(data=input)
        if serializer.is_valid():
            return RefreshToken(
                success=True,
                token=serializer.object['token'],
                errors=None
                )
        else:
            return RefreshToken(
                success=False,
                token=None,
                errors=['email', 'Unable to login with provided credentials.']
                )


class ResetPassword(relay.ClientIDMutation):
    """
    Mutation for requesting a password reset email
    """

    class Input:
        email = graphene.String(required=True)

    success = graphene.Boolean()

    @classmethod
    def mutate_and_get_payload(cls, input, context, info):
        try:
            user = User.objects.get(email=input.get('user'))
            send_password_reset_email(context, user)
            return ResetPassword(success=True)
        except:
            return ResetPassword(success=True)


class ResetPasswordConfirm(relay.ClientIDMutation):
    """
    Mutation for requesting a password reset email
    """

    class Input:
        uid = graphene.String(required=True)
        token = graphene.String(required=True)
        email = graphene.String(required=True)
        new_password = graphene.String(required=True)
        re_new_password = graphene.String(required=True)

    success = graphene.Boolean()
    errors = graphene.List(graphene.String)

    @classmethod
    def mutate_and_get_payload(cls, input, context, info):
        serializer = PasswordResetConfirmRetypeSerializer(data=input)
        if serializer.is_valid():
            serializer.user.set_password(serializer.data['new_password'])
            serializer.user.save()
            return ResetPasswordConfirm(success=True, errors=None)
        else:
            return ResetPasswordConfirm(
                success=False, errors=[serializer.errors])


class DeleteAccount(relay.ClientIDMutation):
    """
    Mutation to delete an account
    """
    class Input:
        email = graphene.String(required=True)
        password = graphene.String(required=True)

    success = graphene.Boolean()
    errors = graphene.List(graphene.String)

    @classmethod
    def mutate_and_get_payload(cls, input, context, info):
        is_authenticated = context.user.is_authenticated()
        if not is_authenticated:
            errors = ['unauthenticated']
        elif is_authenticated and not input['email'] == context.user.email:
            errors = ['forbidden']
        elif not context.user.check_password(input['password']):
            errors = ['wrong password']
        else:
            context.user.delete()
            return DeleteAccount(success=True)
        return DeleteAccount(success=False, errors=errors)
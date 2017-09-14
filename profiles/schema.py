import graphene

from graphene_django.types import DjangoObjectType
from graphene import relay, ObjectType, AbstractType
from .models import User
from graphene_django.filter import DjangoFilterConnectionField


class UserNode(DjangoObjectType):
    class Meta:
        model = User
        exclude_fields = ('password', 'is_superuser', )
        filter_fields = {
            'email': ['exact', 'icontains', 'istartswith'],
            'id':['exact'],
        }
        interfaces = (relay.Node, )

    @classmethod
    def get_node(cls, id, context, info):
        user = super(UserNode, cls).get_node(id, context, info)
        if context.user.id and (user.id == context.user.id or context.user.is_staff):
            return user
        else:
            return None


class RegisterUser(relay.ClientIDMutation):
    class Input:
        email = graphene.String(required=True)
        password = graphene.String()
        password_repeat = graphene.String(required=True)
        

    success = graphene.Boolean()
    errors = graphene.List(graphene.String)
    user = graphene.Field(UserNode)
    @classmethod
    def mutate_and_get_payload(cls, input, context, info):
        pass


class LoginUser(relay.ClientIDMutation):
    class Input:
        email = graphene.String(required=True)
        password = graphene.String(required=True)

    ok = graphene.Boolean()
    user = graphene.Field(UserNode)

    @classmethod
    def mutate_and_get_payload(cls, input, context, info):
        pass



class Query(graphene.AbstractType):
    user = relay.Node.Field(UserNode)
    all_users = DjangoFilterConnectionField(UserNode)



class Mutation(AbstractType):
    register_user = RegisterUser.Field()
    login_user = LoginUser.Field()
    
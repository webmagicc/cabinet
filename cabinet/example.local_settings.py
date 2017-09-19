import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEBUG = True
DATABASES = {

    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'cabinet',
        'USER': 'root',
        'PASSWORD': '',
        'HOST': '127.0.0.1',
    },
    

}


WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/',  # end with slash
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats-local.json'),
    }
}

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
DEFAULT_FROM_EMAIL = 'jcdeesign@gmail.com'
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'jcdeesign@gmail.com'
EMAIL_HOST_PASSWORD = ''
EMAIL_PORT = 587

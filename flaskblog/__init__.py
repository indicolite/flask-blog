from flask import Flask, redirect, url_for
from config import DevConfig
import wtforms
from admin_pages import admin

from models import db
from controllers import blog
from extensions import bcrypt


def create_app(object_name):
    """Create the app instance via `Factory Method`"""

    app = Flask(__name__)
    app.config.from_object(object_name)
    db.init_app(app)
    bcrypt.init_app(app)

    @app.route('/')
    def index():
        # Redirect the request_url '/' to '/blog/'
        return redirect(url_for('blog.home'))

    app.register_blueprint(blog.blog_blueprint)

    return app

#app.register_blueprint(admin)
#app = Flask(__name__)
# Import the views module
#views = __import__('views')

# Library/Python/2.7/site-packages/flask_sqlalchemy/__init__.py:839: FSADeprecationWarning:
# SQLALCHEMY_TRACK_MODIFICATIONS adds significant overhead and will be disabled by default in the future.
# Set it to True or False to suppress this warning.
# 'SQLALCHEMY_TRACK_MODIFICATIONS adds significant overhead and '
#app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

#app.config.from_object(DevConfig)

# When visiting http://server_ip/ GET(Default), call home()
#@app.route('/')
#def home():
#    return '<h1>Hello World!</h1>'

#if __name__ == '__main__':
#    #Entry the application
#    app.register_blueprint(blog_blueprint)
#    app.run()

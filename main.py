from flask import Flask
from config import DevConfig
import wtforms

app = Flask(__name__)
# Import the views module
views = __import__('views')

# Library/Python/2.7/site-packages/flask_sqlalchemy/__init__.py:839: FSADeprecationWarning:
# SQLALCHEMY_TRACK_MODIFICATIONS adds significant overhead and will be disabled by default in the future.
# Set it to True or False to suppress this warning.
# 'SQLALCHEMY_TRACK_MODIFICATIONS adds significant overhead and '
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

app.config.from_object(DevConfig)

# When visiting http://server_ip/ GET(Default), call home()
#@app.route('/')
#def home():
#    return '<h1>Hello World!</h1>'

if __name__ == '__main__':
    #Entry the application
    app.run()

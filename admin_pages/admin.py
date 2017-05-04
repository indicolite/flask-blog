#!/usr/bin/env python
# coding=utf-8

from flask import Blueprint

admin = Blueprint(
        'admin',
        '__name__',
        template_folder='templates/admin',
        static_folder='static/admin',
        url_prefix='/admin')

@admin.route('/')
def home():
    return render_template('home.html')

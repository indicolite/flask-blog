from flask import Flask
from config import DevConfig

app = Flask(__name__)

app.config.from_object(DevConfig)

# When visiting http://server_ip/ GET(Default), call home()
@app.route('/')
def home():
    return '<h1>Hello World!</h1>'

if __name__ == '__main__':
    #Entry the application
    app.run()

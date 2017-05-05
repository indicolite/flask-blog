## import Flask Script object
#from flask import Flask, redirect, url_for
#from flaskblog.config import DevConfig
#from flask_script import Manager, Server
#from flask_migrate import Migrate, MigrateCommand
#from flaskblog.models import db
#from flaskblog.controllers import blog
#from flask_assets import ManageAssets
#
#app = Flask(__name__)
#app.config.from_object(DevConfig)
#db.init_app(app)
#
#@app.route('/')
#def index():
#    # Redirect the request_url '/' to '/blog/'
#    return redirect(url_for('blog.home'))
#
#app.register_blueprint(blog.blog_blueprint)
#
## Init manager object via app object
#manager = Manager(main.app)
#
## Init migrate object via app and db object
#migrate = Migrate(main.app, models.db)
#
## Create a new commands: server
## This command will be run the Flask development_env server
#manager.add_command("server", Server())
#manager.add_command("db", MigrateCommand)
#
#@manager.shell
#def make_shell_context():
#    """Create a python CLI.
#
#    return: Default import object
#    type: `Dict`
#    """
#    return dict(app=main.app,
#                db=models.db,
#                User=models.User,
#                Post=models.Post,
#                Comment=models.Comment,
#                Tag=models.Tag)
#
#if __name__ == '__main__':
#    manager.run()

#from flask import Flask, redirect, url_for
#
#from flaskblog.config import DevConfig
#from flaskblog.models import db
#from flaskblog.controllers import blog
#
#app = Flask(__name__)
## Get the config from object of DecConfig
#app.config.from_object(DevConfig)
#
## Will be load the SQLALCHEMY_DATABASE_URL from config.py to db object
#db.init_app(app)
#
#@app.route('/')
#def index():
#    # Redirect the Request_url '/' to '/blog/'
#    return redirect(url_for('blog.home'))
#
## Register the Blueprint into app object
#app.register_blueprint(blog.blog_blueprint)
#
#if __name__ == '__main__':
#    app.run()

import os

from flask_script import Manager, Server
from flask_migrate import Migrate, MigrateCommand
from flaskblog import create_app
from flaskblog import models

env = os.environ.get('BLOG_ENV', 'dev')
app = create_app('flaskblog.config.%sConfig' % env.capitalize())
manager = Manager(app)

migrate = Migrate(app, models.db)

manager.add_command("server", Server(host='127.0.0.1', port=5000))
manager.add_command("db", MigrateCommand)

@manager.shell
def make_shell_context():
    """Create python cli.

    return: default import object
    type: `Dict`
    """
    return dict(app=app,
            db=models.db,
            User=models.User,
            Post=models.Post,
            Comment=models.Comment,
            Tag=models.Tag,
            Server=Server)

if __name__ == '__main__':
    manager.run()

# import Flask Script object
from flask_script import Manager, Server
from flask_migrate import Migrate, MigrateCommand
import main
import models
from flask_assets import ManageAssets

# Init manager object via app object
manager = Manager(main.app)

# Init migrate object via app and db object
migrate = Migrate(main.app, models.db)

# Create a new commands: server
# This command will be run the Flask development_env server
manager.add_command("server", Server())
manager.add_command("db", MigrateCommand)

@manager.shell
def make_shell_context():
    """Create a python CLI.

    return: Default import object
    type: `Dict`
    """
    return dict(app=main.app,
                db=models.db,
                User=models.User,
                Post=models.Post,
                Comment=models.Comment,
                Tag=models.Tag)

if __name__ == '__main__':
    manager.run()

from flask import Flask
from config import Config
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


db = SQLAlchemy()
migrate = Migrate()


def create_app(config_class=Config):
    app = Flask(__name__)
    CORS(app,origins=["http://localhost:5173"], supports_credentials=True)
    app.config.from_object(config_class)

    db.init_app(app)
    migrate.init_app(app,db)

    from app.api import api
    app.register_blueprint(api,url_prefix='/api')
    
    return app


from app import models

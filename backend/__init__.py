from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///vulnerable.db'
app.config['SECRET_KEY'] = 'super_secret_key_do_not_share'  # Vulnerable: Hardcoded secret
db = SQLAlchemy(app)

from app import routes, models
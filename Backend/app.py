from flask import Flask ,jsonify #,request
from flask import Flask
from flask import render_template
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow



app=Flask(__name__)
CORS(app)



app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://BurgerQueenCaC:24177cac@BurgerQueenCaC.mysql.pythonanywhere-services.com/BurgerQueenCaC$burgerqueen'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db= SQLAlchemy(app)
ma=Marshmallow(app)


from controladores.usuario_controlador import*

from controladores.producto_controlador import *


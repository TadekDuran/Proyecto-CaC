from app import db, ma, app


class Usuario(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    nombre=db.Column(db.String(50))
    apellido=db.Column(db.String(50))
    dni=db.Column(db.String, unique=True, nullable=False)
    sucursal=db.Column(db.String(50))
    puesto=db.Column(db.String(50))
    clave=db.Column(db.String(8))
    rol=db.Column(db.String(3))

    def __init__(self,nombre,apellido,dni,sucursal, puesto, clave, rol):
        self.nombre=nombre
        self.apellido=apellido
        self.dni=dni
        self.sucursal=sucursal
        self.puesto=puesto
        self.clave=clave
        self.rol=rol

with app.app_context():
    db.create_all()
#  ************************************************************

class UsuarioSchema(ma.Schema):
    class Meta:
        fields=('id','nombre','apellido','dni','sucursal','puesto','clave', 'rol')


usuario_schema=UsuarioSchema()
usuarios_schema=UsuarioSchema(many=True)


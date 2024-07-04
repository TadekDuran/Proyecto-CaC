from app import db, ma, app


class Producto(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    nombre=db.Column(db.String(100))
    precio=db.Column(db.Integer)
    stock=db.Column(db.String(5))
    imagen=db.Column(db.String(200))
    descripcion=db.Column(db.String(500))

    def __init__(self,nombre, precio, stock, imagen, descripcion):
        self.nombre=nombre
        self.precio=precio
        self.stock=stock
        self.imagen=imagen
        self.descripcion=descripcion





with app.app_context():
    db.create_all()
#  ************************************************************






class ProductoSchema(ma.Schema):
    class Meta:
        fields=('id','nombre','precio','stock','imagen','descripcion')


producto_schema=ProductoSchema()
productos_schema=ProductoSchema(many=True)


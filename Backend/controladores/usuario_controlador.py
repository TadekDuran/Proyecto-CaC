from sqlite3 import IntegrityError
from app import *
from flask import jsonify, request

from modelos.usuario_modelo import *




@app.route('/usuarios',methods=['GET'])
def get_Usuarios():
    all_usuarios=Usuario.query.all()
    result=usuarios_schema.dump(all_usuarios)

    return jsonify(result)




@app.route('/usuarios/<id>',methods=['GET'])
def get_usuario(id):
    usuario=Usuario.query.get(id)
    return usuario_schema.jsonify(usuario)


@app.route('/usuarios/<id>',methods=['DELETE'])
def delete_usuario(id):
    usuario=Usuario.query.get(id)
    db.session.delete(usuario)
    db.session.commit()
    return usuario_schema.jsonify(usuario)


@app.route('/usuarios', methods=['POST'])
def create_usuario():
    try:
        nombre=request.json['nombre']
        apellido=request.json['apellido']
        dni=request.json['dni']
        sucursal=request.json['sucursal']
        puesto=request.json['puesto']
        clave=request.json['clave']
        rol=request.json['rol']
        new_usuario=Usuario(nombre,apellido, dni, sucursal, puesto, clave, rol)
        db.session.add(new_usuario)
        db.session.commit()
        return usuario_schema.jsonify(new_usuario), 201

    except IntegrityError:
        db.session.rollback()
        return jsonify({"error": "El DNI ya existe en la base de datos"}), 409

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Error al crear el usuario"}), 500


@app.route('/usuarios/<id>' ,methods=['PUT'])
def update_usuario(id):
    usuario=Usuario.query.get(id)
    try:
        usuario.nombre=request.json['nombre']
        usuario.apellido=request.json['apellido']
        usuario.dni=request.json['dni']
        usuario.sucursal=request.json['sucursal']
        usuario.puesto=request.json['puesto']
        usuario.clave=request.json['clave']
        usuario.rol=request.json['rol']

        db.session.commit()
        return usuario_schema.jsonify(usuario), 201
#
    except IntegrityError:
        db.session.rollback()
        return jsonify({"error": "El DNI ya existe en la base de datos"}), 409

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Error al modificar el usuario"}), 500



@app.route('/usuarios/<id>/cambiar_clave', methods=['PUT'])
def change_password(id):
    usuario = Usuario.query.get(id)
    if not usuario:
        return jsonify({"error": "Usuario no encontrado"}), 404

    try:
        usuario.clave = request.json['clave']

        db.session.commit()
        return usuario_schema.jsonify(usuario), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

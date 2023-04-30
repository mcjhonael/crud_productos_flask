from flask import Flask,request

app=Flask(__name__)

#? SUPONGAMOS QUE TENEMOS UNA BASE DE DATOS QUE NOS ENVIA ESTA INFORMACION
productos=[
    {"nombre":"zapallo","precio":1.20},
    {"nombre":"zanahoria","precio":1.30},
    {"nombre":"lechuga","precio":1.40},
    {"nombre":"porotos","precio":1.50},
    {"nombre":"cebolla","precio":1.60},
    {"nombre":"tomate","precio":1.70},
]

@app.route("/")
def inicio():
    return {
        "message":"Hola desde la pagina de inicio",
        "content":None
    }
#^haciendo un crud de manera tradicional
#^el objeto request su desventaja es que se obtiene toda la imformacion de la solicitud sirva o no todo lo acepta

@app.route("/productos",methods=["GET","POST"])
def gestion_productos():
    if request.method=="GET":
        return {
            "message":"Lista de productos",
            "content":productos
        }
    elif request.method=="POST":
        data=request.get_json()
        productos.append(data)
        return {
            "message":"Producto creado exitosamente",
            "content":data
        },201

@app.route("/producto/<int:id>",methods=["GET","PUT","DELETE"])
def gestion_producto(id):
    total_producto=len(productos)
    if id < total_producto:
        if request.method=="GET":
            return {
                "message":"Producto Encontrado",
                "content":productos[id]
            },200
        elif request.method=="PUT":
            data=request.get_json()
            productos[id]=data
            return {
                "message":"Producto Actualizado",
                "content":data
            },201
        elif request.method=="DELETE":
            del productos[id]
            return {
                "message":"Eliminado",
                "content":None
            },204
        
    else:
        return {
            "message":"Producto no encontrado",
            "content":None
        },404

if __name__=='__main__':
    app.run(debug=True,port=5000,host='127.0.0.1',load_dotenv=True)
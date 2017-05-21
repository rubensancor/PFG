client = MongoClient('mongodb://localhost:27017/colmena')
db = client.colmena
collection = db.donaciones
for x in range(0, 100000):
    anyo = randint(2000, 2017)
    mes = randint(1,12)
    dia = randint(1,31)
    collection.insert({
        "importe" : "1",
        "usada": "false",
        "fecha": {
            "anyo": anyo,
            "mes": mes,
            "dia": dia
        },
        "idDonacion": x
    })

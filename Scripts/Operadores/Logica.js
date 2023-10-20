const doc = window.document

var date = Date()
var array = Array()
var geoLoc = Geolocation()
var storage = Storage()
var Browser = window.navigator


var Write = function (Valor) { doc.write(Valor) }


function OBJS(...args) {
    let Values = [...args];

    const Tabela = Values[0]
    const Valor = Values[1]

    const _ = {
        "Data": Values[0],
        "Navegador": Values[1],
        "Localização": Values[2],
        "Armazen": Values[3],
    }
    return _
}

Write(OBJS(date, Browser, geoLoc, storage))

array.push(array, doc.body)

array[0].style.color = 'green'
array[0].style.background = "black"


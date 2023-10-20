function Calcular() {
    const Valor1 = parseFloat(document.getElementById("num1").value);
    const Valor2 = parseFloat(document.getElementById("num2").value);

    let Resultado;

    var Verificação = function () {
        if (Valor1 > Valor2) {
            return "1 Maior que o 2"
        }
        else if (Valor1 < Valor2) {
            return "2 Maior que o 1"
        }
        else if (Valor1 == Valor2) {
            return "2 Valores Iguais"
        }
    }
    Resultado = document.getElementById("Resultado").textContent = Verificação()
}


function CheckBox() {
    const Check1 = parseFloat(document.getElementById("Check1").checked);
    const Check2 = parseFloat(document.getElementById("Check2").checked);

    let Resultado;

    var VerificaçãoCheck = function () {
        if (Check1 && Check2) {
            return "True"
        }
        else
            return "False"
    }
    Resultado = document.getElementById("ResultadoCheck").textContent = VerificaçãoCheck()
}


const RaridadeRoll = { "Normal": 150, "Raro": 50, "Epico": 10, "Lendario": 1 };


const Frutas = {
    "Spin": RaridadeRoll.Normal,
    "Spike": RaridadeRoll.Normal,
    "Chop": RaridadeRoll.Normal,
    "Yuki": RaridadeRoll.Raro,
    "Buda": RaridadeRoll.Raro,
    "Mera": RaridadeRoll.Epico,
    "Goro": RaridadeRoll.Epico,
    "Pika": RaridadeRoll.Epico,
    "Dragon": RaridadeRoll.Lendario,
    "Gomu": RaridadeRoll.Lendario,
    "Magnet": RaridadeRoll.Lendario,
}
function RandomFruit() {
    const Tabela = [];

    for (const Nome in Frutas) {
        const Valor = Frutas[Nome];
        for (let i = 1; i <= Valor; i++) {
            Tabela.push(Nome);
        }
    }

    const Fruta = Tabela[Math.floor(Math.random() * Tabela.length)];

    return Fruta;
}

var A = 0;
var B = 0;

while (A < 15) {
    A++; B += A;
    console.log(RandomFruit());
}

var F = Math.random()
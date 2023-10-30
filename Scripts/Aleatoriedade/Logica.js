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


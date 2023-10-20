const Nomes = ["Juliano", "Erick", "Leticia", "Bianca"];
const Cursos = ["Pw", "Pdm", "Tec", "Mrc"];
const Colors = ["orange", "blue", "black", "white"]

const nome = Nomes[Math.floor(Math.random() * Nomes.length)];
const curso = Cursos[Math.floor(Math.random() * Cursos.length)];
const idade = Math.floor(Math.random() * (30 - 15 + 1) + 15);

if (idade >= 18) {
    alert(`${nome} ${idade} ${curso} Autorizado +18`);
} else {
    alert(`${nome} ${idade} ${curso} Não Autorizado -18`);
}

function RandomColor() {
    return Colors[Math.floor(Math.random() * Colors.length)];
}

function changeColor() {
    var Cor = RandomColor();

    if (RandomColor() != Cor) {
        document.documentElement.style.setProperty("--CorDoTexto", Cor)
    }
}



function mostrarFrase() {
    indiceAleatorio = Math.floor(Math.random() * frases.length);
    document.getElementById("frase").innerHTML = frases[indiceAleatorio];
}


let indiceAleatorio;
const frases = [
    "Os planos de Deus são justos e certeiros! Tenha fé e confiança! 🙏",
    "Qualquer objetivo que você planta, a vida floresce com graça. 💮 🌼 🌺",
    "Trabalhar duro te levará para cima, aproveitar o caminho te levará mais longe.",
    "Não espere pelo momento perfeito. Faça de cada momento a oportunidade perfeita.",
    "Nossas vidas são definidas por oportunidades, inclusive aquelas que perdemos.",
    "Colecione memórias e acumule sorrisos. Todo o resto é passageiro. 😊",
    "Vencedores não são pessoas que nunca falham, são pessoas que nunca desistem.🦸‍♂️",
    "Esteja presente em cada momento da sua vida, antes que estes momentos se tornem apenas lembranças.",
    "Viva a história que um dia você gostaria de contar para os seus netos.",
    "Pessoas que inspiram sabedoria são aquelas que caem, se levantam, se sacodem, curam seus machucados, sorriem ao longo da vida e dizem: 'Aqui vou eu novamente'",
    "Não é o mais forte que sobrevive, nem o mais inteligente, mas o que melhor se adapta às mudanças."
];


mostrarFrase();
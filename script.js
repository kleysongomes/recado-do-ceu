// Espera o conteúdo da página carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // Lista de frases
    const messages = [
        "Eu te escolhi antes do mundo existir. 💖",
        "Não tenha medo, Eu estou com você!",
        "Você é mais forte do que pensa, porque Eu te fortaleço.",
        "Seus sonhos Me importam.",
        "A sua alegria também é a Minha alegria.",
        "Continue firme, Eu estou cuidando de tudo.",
        "Eu te vejo mesmo quando ninguém mais vê.",
        "Você não está sozinho. Nunca esteve.",
        "Eu fiz você com propósito!",
        "Seu coração é precioso para Mim.",
        "Eu te chamo pelo nome. Você é Meu.",
        "Descanse… Eu já estou agindo por você.",
        "Eu te abraço todos os dias, mesmo em silêncio.",
        "Você tem valor eterno.",
        "Eu acredito em você.",
        "Não pare agora, Eu estou preparando algo lindo.",
        "Eu te perdoo. Sempre que pedir.",
        "Eu te amei primeiro.",
        "Fica em paz, Eu já venci o mundo.",
        "Brilhe, porque Eu te fiz luz!",
        "Seus detalhes Me encantam.",
        "Eu estou te ensinando a voar.",
        "Cada passo seu é acompanhado por Mim.",
        "Eu te fortaleço quando você acha que não consegue mais.",
        "Você é uma flecha em Minhas mãos.",
        "Eu tenho planos maiores que os seus!",
        "Eu escrevi sua história com amor.",
        "Eu te dou nova chance todos os dias.",
        "Eu sou o seu lugar seguro.",
        "Eu Me alegro com você!",
        "Eu cuido dos detalhes da sua vida.",
        "Você é Meu filho amado!",
        "Nunca se esqueça: você é precioso(a) para Mim.",
        "Hoje preparei surpresas do céu pra você.",
        "Eu enxugo suas lágrimas.",
        "Você é a resposta de oração de alguém.",
        "Fui Eu quem plantou esse sonho em você.",
        "Confia. Eu estou no controle.",
        "Você é a Minha obra-prima.",
        "Meu amor por você nunca muda.",
        "Você não precisa se provar, você já é amado.",
        "Mesmo em silêncio, Eu trabalho por você.",
        "Você faz parte de algo maior.",
        "Tenho prazer em estar com você.",
        "Te dou forças novas hoje!",
        "Seu valor não está no que faz, mas em quem é.",
        "Eu te sustento com Minha mão forte.",
        "O que preparei pra você é melhor do que imagina.",
        "Fique tranquilo(a), Eu sou teu refúgio.",
        "Você é resposta, não problema.",
        "Deixa o medo, segura na Minha mão.",
        "Você nasceu para brilhar a Minha luz.",
        "Estou abrindo caminhos onde não havia.",
        "Minha graça te basta, sempre.",
        "Você está exatamente onde precisa estar para crescer.",
        "Nada pode te separar do Meu amor.",
        "Você é corajoso(a), porque Eu estou em você.",
        "Hoje é um bom dia para recomeçar.",
        "Você carrega promessas eternas.",
        "O céu está torcendo por você!"
    ];

    // Pega o elemento H1 do HTML onde a mensagem será exibida
    const messageElement = document.getElementById('divine-message');

    // Sorteia um número aleatório baseado no tamanho da lista de frases
    const randomIndex = Math.floor(Math.random() * messages.length);

    // Seleciona a frase sorteada
    const randomMessage = messages[randomIndex];

    // Coloca a frase sorteada dentro do elemento H1 na página
    messageElement.innerText = randomMessage;

});
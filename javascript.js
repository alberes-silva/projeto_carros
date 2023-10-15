let listaCarros = [
    {
        "nome": "Chevrolet Tracker",
        "img": "img/Chevrolet-Tracker.webp",
        "descricao": "Segurança, tecnologia, desempenho e design. Na hora de escolher um SUV, muitas coisas podem fazer a diferença. Por isso, Chevrolet Tracker está sempre em evolução. Só ele vem com 6 airbags, alerta de colisão frontal, MyLink de 8”, Wi-Fi nativo, o motor turbo de série e nota máxima em segurança no Latin NCAP."
    }, 
    {
        "nome": "Honda HR-V",
        "img": "img/Honda HR-V.webp",
        "descricao": "A distância entre eixos permanece a mesma, de 2.610 mm. No visual, o novo Honda HR-V 2023 tem como destaque a dianteira com capô mais elevado e plano, além dos faróis full LED mais afilados. A grade pode ter acabamento com múltiplos frisos nas versões de entrada ou arranjo do tipo colmeia nas opções topo de linha."
    },
    {
        "nome": "Hyundai Creta",
        "img": "img/Hyundai Creta.webp",
        "descricao": "O Novo Creta Ultimate 2.0 conta com sistema de frenagem autônoma, rodas de liga leve diamantadas de 18'', pneus 215/55 R18, bancos revestidos em couro sintético de microfibra, teto solar panorâmico, detector de fadiga, central multimídia com Apple CarPlay, Google Android Auto e GPS, e muito mais!"
    },
    {
        "nome": "Jeep Compass",
        "img": "img/Jeep Compass.webp",
        "descricao": "Vida, só existe uma. Jeep Compass, só existe um: Capacidade Off Road e Design Sofisticado. Vida, só existe uma. Jeep Compass, só existe um: Consulte as Ofertas e Condições. Confira os Modelos Jeep. Central Multimídia. Performance com Economia."
    }, 
    {
        "nome": "Volkswagen Nivus",
        "img": "img/Volkswagen Nivus.webp",
        "descricao": "Com novos conceitos de conectividade e streaming, o Nivus estreia um novo segmento no mercado, com um design inovador, que mistura elementos de SUV e linhas de cupê esportivo. Com duas telas de 10 polegadas (o Active Info Display e o novo infotainment VW Play), o Nivus é o 1º “smart car” da América Latina."
    },
    {
        "nome": "Volkswagen T-Cross",
        "img": "img/Volkswagen T-Cross.webp",
        "descricao": "O T‑Cross mede 4.199 mm de comprimento e 1.568 mm de altura, com 2.651 mm de distância entre-eixos. A capacidade do porta-malas do T‑Cross é excelente (o volume é variável entre 373 e 420 litros). O encosto rebatível do banco do passageiro dianteiro oferece ainda mais flexibilidade."
    }
]

listaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `
    <div class="col-md-4">
                <div class="card m-2">
                    <img src="${carro.img}" class="card-img-top" alt="Chevrolet Tracker">
                    <div class="card-body">
                      <h5 class="card-title">${carro.nome}</h5>
                      <a href="#" class="btn btn-secondary" onclick="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                    </div>
                  </div>
            </div>
    `
    
});


function zoomImg(posicao) {
    let carroSelecionado = listaCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;


    new bootstrap.Modal('#zoomImg').show();
}

function alterarTemaSite() {
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`
    } else {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`
    }
}


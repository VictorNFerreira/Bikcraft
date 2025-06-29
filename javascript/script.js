const links = document.querySelectorAll(".menu a")

for(let i = 0; i < links.length; i++)
{
    const link = links[i]
    linkAtivo(link)

}

function linkAtivo(link)
{
    const href = link.href
    const url = document.URL

    if(url.includes(href))
    {
        link.classList.add("ativo")

    }

}



const parametros = new URLSearchParams(location.search)

parametros.forEach(ativarParametro)

function ativarParametro(parametro)
{
    const elemento = document.getElementById(parametro)
    if(elemento)
    {
        elemento.checked = true

    }
    
}



const perguntas = document.querySelectorAll(".pergunta button")

for(let i = 0; i < perguntas.length; i++)
{
    const pergunta = perguntas[i]
    pergunta.addEventListener("click", ativarResposta)

}

function ativarResposta(event)
{
    const perguntaAtual = event.currentTarget
    const aria = perguntaAtual.getAttribute("aria-controls")
    const resposta = document.getElementById(aria)

    resposta.classList.toggle("ativo")
    
}



const imagens1 = document.querySelectorAll(".nimbus-imagens img")
const galeria1 = document.querySelector(".nimbus-imagens")

for(let i = 0; i < imagens1.length; i++)
{
    const imagem1 = imagens1[i]
    imagem1.addEventListener("click", mostrarImagem1)

}

function mostrarImagem1(event)
{
    const img1 = event.currentTarget
    galeria1.prepend(img1)

}

const imagens2 = document.querySelectorAll(".magic-imagens img")
const galeria2 = document.querySelector(".magic-imagens")

for(let i = 0; i < imagens2.length; i++)
{
    const imagem2 = imagens2[i]
    imagem2.addEventListener("click", mostrarImagem2)

}

function mostrarImagem2(event)
{
    const img2 = event.currentTarget
    galeria2.prepend(img2)

}

const imagens3 = document.querySelectorAll(".nebula-imagens img")
const galeria3 = document.querySelector(".nebula-imagens")

for(let i = 0; i < imagens3.length; i++)
{
    const imagem3 = imagens3[i]
    imagem3.addEventListener("click", mostrarImagem3)

}

function mostrarImagem3(event)
{
    const img3 = event.currentTarget
    galeria3.prepend(img3)

}

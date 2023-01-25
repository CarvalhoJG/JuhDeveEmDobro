/*
Objetivo 1:
Quando o usuário clicar no botão de ver otrailer, devemos abrir a modal com o video do trailer.
Passo 1 :
Pegar o elemneto que representa o botão usando o JS.
Passo 2:
Identificar quando o usuário clicar no botão
Passo 3: 
Pegar o elemento modal no JS
Passo 4:
Abrir a modal na tela.

Objetivo 2:
Quando usuário clical no X devemos fechar a modal
Passo 1:
Pegar o elemento de fechar modal usando js
Passo 2:
Identificar quando o usuário clicar no X
Passo 3:
Fechar a modal*/

/*console.log('mostrar o document',document);Console é um objeto e log é uma metodos*/


/*Objetivo 01 passo 1*/
const botaoTrailer = document.querySelector(".botao-trailer");
/*Objetivo 02 passo 1*/
const botaoFecharModal = document.querySelector(".fechar-modal");
/*Objetivo 2 passo 4*/
const video = document.getElementById("video");
/*Objetivo P1 passo 3*/
const modal = document.querySelector(".modal");

const linkVideo = video.src;

function alternarModal(){ /* Função executa uma ação, imprimir no console clicou no botão*/
    modal.classList.toggle("aberto")
}

/*Passo 2*/
botaoTrailer.addEventListener("click",/*Adicionar uma "escuta" no elemento, quando clicar no botão trailer executa a função*/
/*Passo 4*/
    () => {alternarModal();
    video.setAttribute("src",linkVideo);
}); 
    
/*Passo 2*/
botaoFecharModal.addEventListener("click", () =>{
/*Passo 3*/
    alternarModal();
    video.setAttribute("src","");
})





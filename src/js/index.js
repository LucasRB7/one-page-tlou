const botoes = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
       
        desativarBotaoSelecionado();
        ativarBotaoSelecionado(botao);
        desativarImagemDeFundo();
        ativarImagemDeFundo(index);
        
    })
    
});

function desativarBotaoSelecionado(){
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
function ativarBotaoSelecionado(botao){
    
    botao.classList.add("selecionado"); 
}
function desativarImagemDeFundo(){
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
        
}
function ativarImagemDeFundo(index){
    imagens[index].classList.add("ativa");
}

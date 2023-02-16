
let html = document.querySelector(".html");

html.addEventListener("mouseover", function(){
    let p = document.querySelector(".container-texto");
    p.innerHTML = `
    
    <p class="nome-tecnologia">HTML</p>
    <p class="sobre-tecnologia">É uma linguagem de marcação utilizada na construção de páginas na Web.</p>
    <p class="experiencia-tecnologia">Eu tenho 10 meses de experiência com essa tecnologia.</p>
    
    `
    
});

html.addEventListener("mouseout", function(){
    let p = document.querySelector(".container-texto");
    p.innerHTML = `<p class="sobre-a-linguagem">Passe o mouse por cima de cada tecnologia ao lado.</p>`
    
});



let css = document.querySelector(".css");

css.addEventListener("mouseover", function(){
    let p = document.querySelector(".container-texto");
    p.innerHTML = `
    
    <p class="nome-tecnologia">CSS</p>
    <p class="sobre-tecnologia">É um mecanismo para adicionar estilo a um documento web.</p>
    <p class="experiencia-tecnologia">Eu tenho 10 meses de experiência com essa tecnologia.</p>
    
    `
    
});

css.addEventListener("mouseout", function(){
    let p = document.querySelector(".container-texto");
    p.innerHTML = `<p class="sobre-a-linguagem">Passe o mouse por cima de cada tecnologia ao lado.</p>`
    
});


let javaScript = document.querySelector(".js");

javaScript.addEventListener("mouseover", function(){
    let p = document.querySelector(".container-texto");
    p.innerHTML = `
    
    <p class="nome-tecnologia">JavaScript</p>
    <p class="sobre-tecnologia">JavaScript é uma linguagem de programação interpretada estruturada, Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.</p>
    <p class="experiencia-tecnologia">Eu tenho 3 meses de experiência com essa tecnologia.</p>
    
    `
    
});

javaScript.addEventListener("mouseout", function(){
    let p = document.querySelector(".container-texto");
    p.innerHTML = `<p class="sobre-a-linguagem">Passe o mouse por cima de cada tecnologia ao lado.</p>`
    
});


let jq = document.querySelector(".vue");

jq.addEventListener("mouseover", function(){
    let p = document.querySelector(".container-texto");
    p.innerHTML = `
    
    <p class="nome-tecnologia">Vue.Js</p>
    <p class="sobre-tecnologia">Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.</p>
    <p class="experiencia-tecnologia">Eu tenho 4 meses de experiência com essa tecnologia.</p>
    
    `
    
});

jq.addEventListener("mouseout", function(){
    let p = document.querySelector(".container-texto");
    p.innerHTML = `<p class="sobre-a-linguagem">Passe o mouse por cima de cada tecnologia ao lado.</p>`
    
});

let git = document.querySelector(".gitHub");

git.addEventListener("mouseover", function(){
    let p = document.querySelector(".container-texto");
    p.innerHTML = `
    
    <p class="nome-tecnologia">GitHub</p>
    <p class="sobre-tecnologia">GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. #RedeSocialDosProgramadores.</p>
    <p class="experiencia-tecnologia">Eu tenho 2 meses de experiência com essa tecnologia na parte do GitHub Desktop.</p>
    
    `
    
});

git.addEventListener("mouseout", function(){
    let p = document.querySelector(".container-texto");
    p.innerHTML = `<p class="sobre-a-linguagem">Passe o mouse por cima de cada tecnologia ao lado.</p>`
    
});

let java = document.querySelector(".java");

java.addEventListener("mouseover", function(){
    let p = document.querySelector(".container-texto");
    p.innerHTML = `
    
    <p class="nome-tecnologia">Java</p>
    <p class="sobre-tecnologia">Java é uma linguagem de programação baseado na orientação por objeto desenvolvida na década de 90, baseada na linguagem C.</p>
    <p class="experiencia-tecnologia">Eu tenho 2 anos de experiência com essa tecnologia.</p>
    
    `
    
});

java.addEventListener("mouseout", function(){
    let p = document.querySelector(".container-texto");
    p.innerHTML = `<p class="sobre-a-linguagem">Passe o mouse por cima de cada tecnologia ao lado.</p>`
    
});


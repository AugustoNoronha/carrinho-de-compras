function salvar(nome){
 let carrinho = JSON.parse(localStorage.getItem('Carrinho')) || [ ]
 carrinho.push(document.getElementById(nome).textContent)
 localStorage.setItem('Carrinho',JSON.stringify(carrinho))
  console.log("salvar")
}

function showCarrinho(){
  console.log("fuichamado")
  let carrinho = JSON.parse(localStorage.getItem('Carrinho')) || [ ]
  carrinho.forEach(myFunction);
}

function myFunction(item, index) {
  document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}
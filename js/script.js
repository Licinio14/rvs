	//categorias
		// women:
		// 1 - sweaters
		// 2 - t-shirts
		// 3 - pants
		// 4 - shoes
		
		// men:
		// 5 - sweaters
		// 6 - t-shirts
		// 7 - pants
		// 8 - shoes
		
		// 9 - promos mulher
		// 10 - promos homem
		
		// 11 - top mulher
		// 12 - top homem
		
		// 13 - new mulher
		// 14 - new homem
		
		// 15 - tudo mulher
		// 16 - tudo homem
	
//variaveis
const divMulheres = document.getElementById('divmulheres')



function Filtrar(){
	

}

function PreencherMulheres(){
	let temp
	for(let i = 0; i < 20; i++){
		// card
		var card = document.createElement('div')  
        card.className = `card cardstorecss`
		card.id = `card${i}`
        divMulheres.appendChild(card)
		// imagem
		var card = document.createElement('img')  
        card.className = `card-img-top`
		card.src = produtos[i].src
		temp = document.getElementById(`card${i}`);
        temp.appendChild(card)
		// div body
		var card = document.createElement('div')  
        card.className = `card-body`
		card.id = `card-body${i}`
		temp = document.getElementById(`card${i}`);
        temp.appendChild(card)
		// h5
		var card = document.createElement('h5')  
        card.className = `card-title`
		card.textContent = produtos[i].nome
		temp = document.getElementById(`card-body${i}`);
        temp.appendChild(card)
		// descrição
		var card = document.createElement('p')  
        card.className = `card-text`
		card.textContent = produtos[i].descricao
		temp = document.getElementById(`card-body${i}`);
        temp.appendChild(card)
		// div footer
		var card = document.createElement('div')  
        card.className = `card-footer`
		card.id = `card-footer${i}`
		temp = document.getElementById(`card${i}`);
        temp.appendChild(card)
		// div footer
		var card = document.createElement('small')  
        card.className = `text-body-secondary`
		card.textContent = "teste"
		temp = document.getElementById(`card${i}`);
        temp.appendChild(card)
		

    }
}

function PreencherHomens(){

}


//chamar on load
window.onload = function() {
	produtos = BDprodutos()
	categoriaw = BDcategorias(15)
	categoriah = BDcategorias(16)
    PreencherMulheres()
	PreencherHomens()
}
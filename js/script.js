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
		card.textContent = produtos[i].preco
		temp = document.getElementById(`card-body${i}`);
        temp.appendChild(card)

		

    }
}

function PreencherHomens(){

}

function MostrarMulherFiltrado(id){
	//limpar o conteudo para adicionar o novo
	divMulheres.innerHTML = ""

	//vai buscar o id dos produtos
	array = BDcategorias(id)
	//saber quantos produtos vao aparecer
	max = array.length


	let rowtemp;  // Variável para armazenar a linha atual

for (let i = 0; i < max; i++) {
    console.log("este é o i: " + i);
    console.log(produtos[(array[i] - 1)].id);

    // A cada 5 cards, cria uma nova linha
    if (i % 5 === 0) {
        rowtemp = document.createElement('div');  // Cria uma nova linha
        rowtemp.className = 'row';  // Adiciona a classe 'row' para organizar os cards
        divMulheres.appendChild(rowtemp);  // Adiciona a linha ao corpo ou onde desejar
    }

    // Card
    var card = document.createElement('div');
    card.className = `card col-2 cardstorecss`;  // Adiciona a classe 'col-md-2' para fazer o card ocupar uma parte da linha
    card.id = `card${i}`;
    rowtemp.appendChild(card);

    // Imagem
    var cardImage = document.createElement('img');
    cardImage.className = `card-img-top`;
    cardImage.src = produtos[(array[i] - 1)].src;
    temp = document.getElementById(`card${i}`);
    temp.appendChild(cardImage);

    // Div body
    var cardBody = document.createElement('div');
    cardBody.className = `card-body`;
    cardBody.id = `card-body${i}`;
    temp = document.getElementById(`card${i}`);
    temp.appendChild(cardBody);

    // h5
    var cardTitle = document.createElement('h5');
    cardTitle.className = `card-title justify-content-between`;
    cardTitle.textContent = produtos[(array[i] - 1)].nome;
    temp = document.getElementById(`card-body${i}`);
    temp.appendChild(cardTitle);

    // Descrição
    var cardText = document.createElement('p');
    cardText.className = `card-text`;
    cardText.textContent = produtos[(array[i] - 1)].preco;
    temp = document.getElementById(`card-body${i}`);
    temp.appendChild(cardText);
}

	
}

function MostrarHomemFiltrado(id){
	
}

const selectmulher = document.getElementById('selectmulher')

//atribuir as cidades em função com o pais
selectmulher.addEventListener('change', function(e) {
	id = selectmulher.value
    MostrarMulherFiltrado(id)
})

//chamar on load
window.onload = function() {
	produtos = BDprodutos()
	categoriaw = BDcategorias(15)
	categoriah = BDcategorias(16)
    PreencherMulheres()
	PreencherHomens()
}

function LogOut(){
    alert("You have been sucessfully logout")
}


function UserVerify(){
    const divUser = document.getElementById('UserName')

    //vai buscar o carrinho casa exista, ou deixa em branco caso nao exista
	name = sessionStorage.getItem('name') || "null";

    console.log(name)

    if (name != "null"){
        divUser.innerHTML = `
            <div class="container-fluid">
                <a href="user.html" class="user-name-icon-login text-end">${name}</a>
            </div>`
    }else {
        divUser.innerHTML = `<a href="user.html"><img src="img/add-user.png"  class="iconsmenu icon-util-posi"></a>`
    }

}

//quando carrega chama a verificação para ver se existe um user
document.addEventListener('DOMContentLoaded', function() {
	UserVerify()
  });

function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "demonio" && senha == "666"){
        alert(`Bem vindo F.O.R.M.I.G.A a ORDEM`);
        location.href = "./password/index.html";
    }
    else if(login == "hunter" && senha == "242"){
        alert(`Bem vindo K a ORDEM`)
        location.href = "./src/caracters/cesar/index.html"
    }
    else if(login == "covarde" && senha == "vida"){
        alert(`Bem vindo Samuel Nakamura a ORDEM`)
        location.href = "./src/caracters/Xuxu/index.html"
    }
    else if(login == "lixo" && senha == "morte"){
        alert(`Bem vindo Yuri Nakamura a ORDEM`)
        location.href = "./src/caracters/rafa/index.html"
    }
    else if(login == "arrozdamamae" && senha == "9y4s2da7"){
        alert(`Bem vindo ${login} a ORDEM`)
        location.href = "./src/caracters/arroz/index.html";
    }
    else{
        alert('Usuario ou senha incorretos');
    }

}


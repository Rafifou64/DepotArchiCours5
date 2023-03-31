const btn = document.querySelector('button');
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    btn.addEventListener('click', function(){
        if(username.value == "Rafifou" && password.value == "password")
        {
            alert("Connecté !");
        }
        else
        {
            alert("C'est non !");
        }
    });
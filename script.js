
let submit =document.getElementById("lolo")
const h1= document.getElementById('title');


submit.style.color = 'blue'
submit.style.background = 'yellow'

submit.addEventListener('click',function() {
    submit.style.background = 'green'
})

submit.addEventListener('mouseenter',function() {
    submit.style.background = 'aqua'
})

submit.addEventListener('mouseleave',function() {
    submit.style.background = 'yellow'
})




    
h1.addEventListener('mouseenter', function() {
        h1.classList.add('shake');
    });

h1.addEventListener('mouseleave', function() {
        h1.classList.remove('shake');
    });



        let nom = document.getElementById("name");
        let prenom = document.getElementById("pr");
        let email = document.getElementById("email");

    let formulaire = document.getElementById('formulaire')


            formulaire.addEventListener ('submit ', function (e) {
                let errorMessage = [];
                if (nom.value === "") {

                    errorMessage = "Le nom est obligatoire. ";
                }
        /*
                if (prenom.value === "") {
                    errorMessage += "Le prénom est obligatoire. ";
                }
             
                if (email.value === "") {
                    errorMessage += "L'email est obligatoire. ";
                }
        */
                if (errorMessage.length > 0 ) {
                    e.preventDefault()
                    document.querySelector("#error-nom").innerText = errorMessage;
                    
                }
        
            



            }) 



    
    

        
    

    
        


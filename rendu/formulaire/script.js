"use strict"

function validerFormulaire(e){
    e.preventDefault();

    let body = document.body;

    let prenom = document.getElementById("prenom")
    console.log(prenom)
    let nom = document.getElementById("nom")
    console.log(nom)
    let pseudo = document.getElementById("pseudo")
    console.log(pseudo)
    let email = document.getElementById("email")
    console.log(email)
    let motdepasse = document.getElementById("motdepasse")
    console.log(motdepasse)


    let genreHomme = document.getElementById("homme")
    console.log(genreHomme)
    let genreFemme = document.getElementById("femme")
    console.log(genreFemme)
    let genreHelicoptere = document.getElementById("helicoptere")
    console.log(genreHelicoptere)
    let genreError = document.getElementById("genreError")
    console.log(genreError)
    
    if (!genreHomme.checked && !genreFemme.checked && !genreHelicoptere.checked) {
        genreError.textContent = "Indiquer un genre.";
        genreError.classList.add("error")
        body.classList.add("error")
    } else {
        genreError.textContent = "";
        genreError.classList.remove("error")
        body.classList.remove("error")
    }

    let motdepasseError = document.getElementById("motdepasseError")

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;

    if (!regex.test(motdepasse.value)) {
        motdepasseError.textContent = "Vueillez respecter les critères requis pour valider le mot de passe"
        motdepasseError.classList.add("error")
        motdepasse.classList.add("error-input")
        body.classList.add("error")
    } else {
        motdepasseError.textContent = "";
        motdepasseError.classList.remove("error")
        motdepasse.classList.remove("error-input")
        body.classList.remove("error") 
    }
}
let bt=document.querySelector('#bt');
bt.addEventListener('click',validerFormulaire)


function myFunction(){
    let element = document.body
    element.classList.toggle("dark-mode")
}
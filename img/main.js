const pokemonImage =  document.getElementById("js--pokemon-image")
let randomNummer = Math.floor(Math.random() * 250 + 1);


let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNummer)
.then(function(response){
        return response.json();
})
.then(function(realData){
    pokemonImage.src = realData.sprites.front_default;
});


const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let pokemonGamePlayed = false;

catchButton.onclick = function(){
    if(pokemonGamePlayed === false){
            let catchNummer = Math.floor(Math.random() * 2); // 0 - 1   
    if (catchNummer === 0){
        pokemonText.innerText = "Pokémon Fled!"
        pokemonText.style.color = "red";
    }
    else{
        pokemonText.innerText = "Pokémon Caught!"
        pokemonText.style.color = "Green";
    }
    
    setTimeout(() => {
        pokemonText.innerText = "Game Over!"
        pokemonText.style.color = "gray";
    }, 1000);    

        pokemonGamePlayed = true;
    }

};

const nameText = document.getElementById("js--name");
let inputField = document.getElementById("js--input");
inputField.onkeyup = function(event){
    if(event.keyCode === 13){
        let name = inputField.value;
        /* api call naar age predicter*/
        let age = fetch("https://api.agify.io?name=" + name)
        .then(function (response) {
            return response.json();
        })
        .then(function (echteData) {
            inputField.style.display = "none";
            nameText.innerText = echteData.age;
        });
    }
}


// dit is laatste onderdeel 
const showName = document.getElementById("js--showName");
const search = document.getElementById("js--show");
const img = document.getElementById("js--img");
const info = document.getElementById("js--info");
search.onkeyup = function(event){
    if(event.keyCode === 13){
        let name = search.value;
        let show = fetch("https://api.tvmaze.com/search/shows?q=" + name)
        .then(function(response){
            return response.json();
        })
        .then(function (echteData){
            search.style.display = "none";
            showName.innerText = echteData[0].show.name;
            img.src = echteData[0].show.image.original;
            info.innerText = echteData[0].show.summary.replace(/(<([^>]+)>)/ig,"");
        })
    }
}
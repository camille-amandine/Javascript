
let tueur= {
    name: "Jason",
    pointvie: 100,
}

const nom =["marie","louise","jacques","paul","maxime"]

const caracteristique = ["nerd","blond","timide","curieux","sportif"]

class Personnage{ 

    constructor(nom,caracteristique,luck) {
        this.nom = nom
        this.caracteristique= caracteristique
        this.luck = luck
    }
} 

let personnage1 = new Personnage(
   nom[Math.floor(Math.random()*nom.length)],
   caracteristique[Math.floor(Math.random()*caracteristique.length)],
   Math.random()
)

let personnage2 = new Personnage(
    nom[Math.floor(Math.random()*nom.length)],
    caracteristique[Math.floor(Math.random()*caracteristique.length)],
    Math.random()
)

let personnage3 = new Personnage(
    nom[Math.floor(Math.random()*nom.length)],
    caracteristique[Math.floor(Math.random()*caracteristique.length)],
    Math.random()
)

let personnage4 = new Personnage(
    nom[Math.floor(Math.random()*nom.length)],
    caracteristique[Math.floor(Math.random()*caracteristique.length)],
    Math.random()
)

let personnage5 = new Personnage(
    nom[Math.floor(Math.random()*nom.length)],
    caracteristique[Math.floor(Math.random()*caracteristique.length)],
    Math.random()
)



while (tueur.pointvie>0 ) {
    let randomPerson = Math.floor(Math.random() * 4 + 1)
    
    if(('personnage' + randomPerson).luck> Math.floor(Math.random() * (6 - 1 + 1) + 1)){
        
        tueur.pointvie= tueur.pointvie-10
        console.log(('personnage' + randomPerson).nom + " a évité et inflige 10 de degats au tueur.")
    } 
    
    if(('personnage' + randomPerson)< Math.random()) {
        tueur.pointvie= tueur.pointvie-15
        console.log(('personnage' + randomPerson).nom + " inflige 15 de degats au tueur mais meurt.")
        }
    
    else { 
        console.log(('personnage' + randomPerson).nom + " est mort." )
        }
}
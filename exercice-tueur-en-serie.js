
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
    
    if(personnage.luck> Math.random()){
        
        tueur.pointvie= tueur.pointvie-this.dégats 
        console.log(Personnage.nom + " a évité et inflige " + this.degats+ " de degats au tueur.")
    } 
    
    if(personnage.luck< Math.random()) {
        tueur.pointvie= tueur.pointvie-this.dégats 
        console.log(Personnage.nom + " inflige " + this.degats+ " de degats au tueur mais meurt.")
        }
    
    else { 
        console.log(Personnage.nom + " est mort." )
        }

    console.log(Personnage)
}
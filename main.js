// let age = 22
// let name = "camille"
// // boolean
// let face ID = true
// const nains = ["simplet","grincheur"]
// // objet
// let article = { name: "rasoir", price: 2}

// let number1 = 2
// let number2 = 3

// if(number1== number2){ console.log(" c'est bon! le nombre 1 est " + number1 + "et le nombre 2 est " + number2)}
    
//     else{

//         console.log("c'est pas égal")}


// exercice:

// let a= 4
// let b= 4
// let c= 3

// if (a==b)
//     {console.log("c'est égal")}

// if (c<b && a+c != 3)
//     {console.log("ok")
//         }
//         else{
//             console.log("raté")
//         }

// let d = 5

// switch(a){
//     case 1:
//         console.log("égal à 1")
//         break
//     case 5:
//         console.log("égal à 5")
//         break
//     default:
//         console.log("default")
// }

// Exercice:
// let a=4
// let b=4
// let c=3

// switch(a){
//     case b: console.log ("égal à b")
//     break
//     case c: console.log("égal à c")
//     break
//     default: console.log ("égal à rien")


// }


// for(let i=0; i<10; i+2)
// {
//     console.log(i)

// }

// let a=20

// for(let i=0; i< a; i+1 )
// {console.log(oklm)}


// let a=0

// while(a<9){
//     a+1
//     if(

//     )
// }


// function nom(nom1, nom2){ console.log(nom1 == nom2)}
// return 

// let a="jean"
// let b="paul"

// let animaux= ["cat","dog","bird"]

// animaux.forEach(function(animal){

//     console.log(animal)
// }
// let names = []

// names.push("vincent","paul","arthur") 
// names.forEach (function(nom) 
//     {nom=nom+"va a la pêche" 
// console.log (nom)

// }

// class Eleve{
//     constructor(name,attack,defense) {
//         this.name = name
//         this.attack = attack
//         this.defense = defense
    
//     }
//   getAttack(){
//     return this.attack}

//     getDefense(){
//         return this.defense
//     } 
// }


// let nicolas = new Eleve("nicolas",9,5)

// let alexis = new Eleve("alexis",6,8)

// console.log(nicolas.getAttack() - alexis.getDefense ())

class Pokemon{
    constructor(name,attack,defense,pv,luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.pv = pv
        this.luck = luck
    
        }

    isLucky(){
        return this.luck > Math.random()
    }
   
    attackPokemon(pokemon)
    { if(pokemon.isLucky())
        {console.log(pokemon.name + " a évité ." + " Il lui reste " + pokemon.pv+ " de vie.")} 
        
         else { 
              let degats= this.attack-pokemon.defense
              pokemon.pv = pokemon.pv - degats
              console.log(this.name + " a reçu " + degats + " de dégats, quel con!  il a perdu "+ pokemon.pv + " de vie.")}
    }
}


let ronflex = new Pokemon("ronflex",110,65,165,0.4)
let phyllali = new Pokemon("phyllali",110,130,65,0.3)


while (ronflex.pv>0  && phyllali.pv> 0 ) {
    
    ronflex.attackPokemon(phyllali)
    if(phyllali.pv>0) {
        phyllali.attackPokemon(ronflex)
    }  
    else{
        console.log(this.name + "est mort") 
        break
    } 
    
}




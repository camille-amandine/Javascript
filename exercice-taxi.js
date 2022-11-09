let personnage ={
    nom: "john",
    vie: 10,
}

const musiques = [
    "wejdene - Anissa",
    "Bigflo & Oli - Coup de vieux",
    "Lewis Capaldi - Forget Met",
    "Rihanna - lift Me up",
    "Gazo - Die"
]

let trajet = {
    changement: 0,
    radio: musiques[0],
    feux:30,
}


function prendretaxi(personnage,trajet){

    while(trajet.feux>0) {

        let aupif = Math.floor(Math.random()*musiques.length)
        let playlist = musiques[aupif]

        if (playlist== trajet.radio) { 

            personnage.vie = personnage.vie -1
            trajet.changement= trajet.changement +1

            if (personnage.vie<0) {

                console.log( personnage.nom + "explose." + " C'est " + playlist + ".Il reste " + trajet.feux + " de feu.") 
                break 
            }
                
            console.log("c'est " + playlist + "." + personnage.nom + " change de taxi. Il a perdu une vie. Il lui reste " + personnage.vie + " vie. Il reste " + trajet.feux + " de feu.")
        }

        else{

                console.log("c'est " + playlist + "." + personnage.nom + " change pas de taxi. Il reste " + trajet.feux + " de feu.")

        }

        trajet.feux= trajet.feux-1
    }
    console.log("Il est chez lui. Il a changé " + trajet.changement + " fois de taxi.")
}

prendretaxi(personnage,trajet)
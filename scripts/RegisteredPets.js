import { getPets, getWalkers} from "./database.js"


document.addEventListener(
    "click", 
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            const [, petId] = itemClicked.id.split("--")
        
            for (const pet of pets) {
                if (pet.id === parseInt(petId)) {
                    let walker = walkers.find(item => item.id === pet.walkerId)
                    window.alert(`${pet.name} is being walked by ${walker.name}`)
                }
            }
        }
    }    
)        

const walkers = getWalkers()
const pets = getPets()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}


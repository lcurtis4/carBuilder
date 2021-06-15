import { getInterior, setInterior } from "./database.js" 

const interior = getInterior() 

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)


export const Interior = () => {
    let html = "<ul>"

    const itemChoices = interior.map(
        (interior) => {
        return `<li> 
        <input type="radio" name="interior" value="${interior.id}" /> ${interior.fabric} ($${interior.price})
        </li>`
    }
)
    html += itemChoices.join("")
    html += "</ul>"
    return html
}

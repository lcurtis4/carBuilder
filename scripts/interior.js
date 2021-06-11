import { getInterior, setInterior } from "./database.js" 

document.addEventListener(
    "change",
    (event) => {
        if (event.target.fabric === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

const interior = getInterior() 

export const Interior = () => {
    let html = "<ul>"

    for (const material of interior) {
        html += `<li> 
        <input type="radio" name"material" value"${material.id}" /> ${material.fabric}
        </li>`
    }

    html += "</ul>"
    return html
}
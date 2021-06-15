import { getTech, setTech } from "./database.js" 

const tech = getTech()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "tech") {
            setTech(parseInt(event.target.value))
        }
    }
)

export const Tech = () => {
    let html = "<ul>"

    const itemChoices = tech.map(
        (option) => {
        html += `<li> 
        <input type="radio" name="tech" value="${option.id}" /> ${option.option} ($${option.price})
        </li>`
    }
)

    html += itemChoices.join("")
    html += "</ul>"
    return html
}
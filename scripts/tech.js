import { getTech, setTech } from "./database.js" 

document.addEventListener(
    "change",
    (event) => {
        if (event.target.option === "tech") {
            setTech(parseInt(event.target.value))
        }
    }
)

const tech = getTech()

export const Tech = () => {
    let html = "<ul>"

    for (const option of tech) {
        html += `<li> 
        <input type="radio" name="tech" value="${option.id}" /> ${option.option} 
        </li>`
    }

    html += "</ul>"
    return html
}
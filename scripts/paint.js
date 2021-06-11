import { getPaint, setPaint } from "./database.js" 

document.addEventListener(
    "change",
    (event) => {
        if (event.target.color === "paint") {
            setPaint(parseInt(event.target.value))
        }
    }
)

const paint = getPaint()

export const Paint = () => {
    let html = "<ul>"

    for (const color of paint) {
        html += `<li> 
        <input type="radio" name="color" value="${color.id}" /> ${color.color} 
        </li>`
    }

    html += "</ul>"
    return html
}
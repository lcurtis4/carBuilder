import { getPaint, setPaint } from "./database.js" 

const paints = getPaint()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            setPaint(parseInt(event.target.value))
        }
    }
)


export const Paint = () => {
    let html = "<ul>"

    const listItemArray = paints.map(
        (paint) => {
        return `<li> 
            <input type="radio" name="color" value="${paint.id}" /> ${paint.color} ($${paint.price})</li>`
    })

    html += listItemArray.join("")
    html += "</ul>"
    return html
}
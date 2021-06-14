import { getPaint, setPaint } from "./database.js" 

document.addEventListener(
    "change",
    (event) => {
        if (event.target.color === "paint") {
            setPaint(parseInt(event.target.value))
        }
    }
)

const paints = getPaint()

export const Paint = () => {
    let html = "<ul>"

    const listItemArray = paints.map(paint => {
        return `<li> 
            <input type="radio" name="paint" value="${paint.id}" /> ${paint.color}`
    })

    html += listItemArray.join("")
    html += "</ul>"
    return html
}
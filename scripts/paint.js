import { getPaint, setPaint } from "./database.js" 

const paints = getPaint()

/*
this event listens for when the user 
makes a choice in the paint option group
*/
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            setPaint(parseInt(event.target.value))
        }
    }
)

/*
calling map on paints(Array) to find the paint(Key)
 and return html representation of paint
*/
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
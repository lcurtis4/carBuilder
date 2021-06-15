import { getWheels, setWheels } from "./database.js" 

const wheels = getWheels() 

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheels(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = "<ul>"

    const itemChoices = wheels.map(
        (style) => {
        html += `<li> 
        <input type="radio" name="wheel" value="${style.id}" /> ${style.style} ($${style.price})`
    }
    )

    html += itemChoices.join("")
    html +="</ul>"
    return html
}
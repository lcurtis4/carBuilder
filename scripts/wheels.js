import { getWheels, setWheels } from "./database.js" 

document.addEventListener(
    "change",
    (event) => {
        if (event.target.styles === "wheel") {
            setWheels(parseInt(event.target.value))
        }
    }
)

const wheels = getWheels() 

export const Wheels = () => {
    let html = "<ul>"

    for (const style of wheels) {
        html += `<li> 
        <input type="radio" name="style" value"${style.id}" /> ${style.style}`
    }

    html +="</ul>"
    return html
}
import { Paint } from "./paint.js"
import { Interior } from "./interior.js"
import { Tech } from "./tech.js"
import { Wheels } from "./wheels.js"

// document.addEventListener(
//     "click"
//     (event) => {
//         if (event.target.id === "orderButton") {
//             addCustomOrder()
//         }
//     }
// )

export const carBuilder = () => {
    return `
    <h1> Car Builder</h1>
    
    <article class="choices">
        <section class="choices__paint options".
            <h2>Paints</h2>
            ${Paint()}
        </section>
        <section class="choices__interior options".
            <h2>Interior</h2>
            ${Interior()}
        </section>
        <section class="choices__tech options".
            <h2>Tech</h2>
            ${Tech()}
        </section>
        <section class="choices__wheels options".
            <h2>Wheels</h2>
            ${Wheels()}
        </section>
    </article> 
    `
}
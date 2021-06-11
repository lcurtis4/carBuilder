import { carBuilder } from "./carBuilder.js"

const mainContainer = document.querySelector("#container")

const renderAllHtml = () => {
    mainContainer.innerHTML = carBuilder()
}

renderAllHtml()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHtml()
})
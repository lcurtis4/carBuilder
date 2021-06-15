import { carBuilder } from "./carBuilder.js"

const mainContainer = document.querySelector("#container")

const renderAllHtml = () => {
    mainContainer.innerHTML = carBuilder()
}

renderAllHtml()

// listens that the order state has changed and calls renderAllHTML 
document.addEventListener("stateChanged", event => {
    renderAllHtml()
})
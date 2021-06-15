import { getInterior, getPaint, getTech, getWheels, getOrders} from "./database.js"

const paint = getPaint()
console.log(paint)
const interiors = getInterior()
const tech = getTech()
const wheels = getWheels()

const buildOrderListItem = (order) => {
    let totalCost = 0 

    const foundPaint = paint.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    totalCost += foundPaint.price

    const foundTechnology = tech.find(
        (tech) => {
            return tech.id === order.techId
        }
    )
    totalCost += foundTechnology.price

    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    totalCost += foundWheel.price

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    totalCost += foundInterior.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })


    return `<li>
        Order #${order.id} cost ${costString} placed on ${new Date(order.timestamp).toLocaleDateString()}
    </li>`
}

export const carOrders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const itemChoices = orders.map(buildOrderListItem)

    html += itemChoices.join("")
    html += "</ul>"

    return html
}
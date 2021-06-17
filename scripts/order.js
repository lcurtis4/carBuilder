import { getInterior, getPaint, getTech, getWheels, getOrders} from "./database.js"

const paint = getPaint()
const interiors = getInterior()
const tech = getTech()
const wheels = getWheels()

const buildOrderListItem = (order) => {
    let totalCost = 0 
    /*
    the find method is called on paint, which is the full array 
    of paints in database (defined above). "(paint)" is the parameter
    of the find method, the function finds the paint.id from database 
    then compares it to the order.paintID.
    */
        const foundPaint = paint.find(
            (paint) => {
                return paint.id === order.paintId
            }
        )
        // adding the "foundPaint.id" to the totalCost 
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

        // converting total cost into $ amount
        const costString = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })

        // generates the html of the order 
    return `<li>
        Order #${order.id} cost ${costString} placed on ${new Date(order.timestamp).toLocaleDateString()}
    </li>`
}

export const carOrders = () => {

    const orders = getOrders()

    let html = "<ul>"

    /*
    calling map on the orders array and giving it "buildOrderListItem" as the argument. 
    */
    const itemChoices = orders.map(buildOrderListItem)

    html += itemChoices.join("")
    html += "</ul>"

    return html
}
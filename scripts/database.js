const database = {
    paint: [
        {
            id: 1, 
            color: "Silver",
            price: 650
        }, 
        {
            id: 2, 
            color: "Midnight Blue",
            price: 1000
        }, 
        {
            id: 3, 
            color: "Firebrick Red",
            price: 1600
        }, 
        {
            id: 4, 
            color: "Spring Green",
            price: 900
        }
    ],
    interior: [
    {
        id: 1,
        fabric: "Beige Fabric",
        price: 500
    },
    {
        id: 2,
        fabric: "Charcoal Fabric", 
        price: 700
    },
    {
        id: 3,
        fabric: "White Leather",
        price: 1000
    },
    {
        id: 4,
        fabric: "Black Leather", 
        price: 1200
    }
    ],
    tech: [
        {
            id: 1,
            option: "Basic Package- basic sound system",
            price: 300
        },
        {
            id: 2,
            option: "Navigation Package- integrated navigation controls",
            price: 800
        },
        {
            id: 3,
            option: "Visibilit Package- side and rear cameras",
            price: 1300
        },
        {
            id: 4,
            option: "Ultra Package- navigation and visibility packages",
            price: 2000
        },
    ],
    wheels: [
        {
            id: 1,
            style: "17-inch Pair Radial",
            price: 600

        },
        {
            id: 2,
            style: "17-inch Pair Radial Black", 
            price: 1000
        },
        {
            id: 3,
            style: "18-inch Pair Spoke Silver", 
            price: 1400
        },
        {
            id: 4,
            style: "18-inch Pair Spoke Black",
            price: 2000

        },
    ],
    customOrders: [
        {
            id: 1,
            paintId: 3,
            interiorId: 4,
            techId: 4,
            wheelId: 4,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {
        paintId: "",
        interiorId: "",
        techId: "",
        wheelId: ""
    }
}

export const getPaint = () => {
    return database.paint.map(paint => ({...paint}))
}
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const getInterior = () => {
    return database.interior.map(fabric => ({...fabric}))
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const getTech = () => {
    return database.tech.map(option => ({...option}))
}
export const setTech = (id) => {
    database.orderBuilder.techId = id
}

export const getWheels = () => {
    return database.wheels.map(style => ({...style}))
}
export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}
export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}



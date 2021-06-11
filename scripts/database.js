const database = {
    cars: {},
    paint: [
        {
            id: 1, 
            color: "silver"}, 
        {
            id: 2, color: "midnight Blue"}, 
        {
            id: 3, 
            color: "Firebrick Red"}, 
        {
            id: 4, 
            color: "Spring Green"}, 
    ],
    interior: [
    {
        id: 1,
        fabric: "Beige Fabric" 
    },
    {
        id: 2,
        fabric: "Charcoal Fabric" 
    },
    {
        id: 3,
        fabric: "White Leather" 
    },
    {
        id: 4,
        fabric: "Black Leather" 
    }
    ],
    tech: [
        {
            id: 1,
            option: "Basic Package (basic sound system"
        },
        {
            id: 2,
            option: "Navigation Package (includes integrated navigation controls)"
        },
        {
            id: 3,
            option: "Visibilit Package (includes side and rear cameras"
        },
        {
            id: 4,
            option: "includes navigation and visibility packages"
        },
    ],
    wheels: [
        {
            id: 1,
            style: "17-inch Pair Radial",
        },
        {
            id: 2,
            style: "17-inch Pair Radial Black", 
        },
        {
            id: 3,
            style: "18-inch Pair Spoke Silver", 
        },
        {
            id: 4,
            style: "18-inch Pair Spoke Black", 
        },
    ]
}

export const getPaint = () => {
    return database.paint.map(color => ({...color}))
}
export const setPaint = (id) => {
    database.cars.paintId = id
}

export const getInterior = () => {
    return database.interior.map(fabric => ({...fabric}))
}
export const setInterior = (id) => {
    database.cars.interiorId = id
}

export const getTech = () => {
    return database.tech.map(option => ({...option}))
}
export const setTech = (id) => {
    database.cars.techId = id
}

export const getWheels = () => {
    return database.wheels.map(style => ({...style}))
}
export const setWheels = (id) => {
    database.cars.wheelId = id
}


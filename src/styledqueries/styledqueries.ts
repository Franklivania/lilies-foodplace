const breakpoints = {
    mobile: "600px",
    tablet: "768px",
    desktop: "1240px"
}

export const devices = {
    mobile: `(max-width: ${breakpoints.mobile})`,
    tablet: `(min-width: ${breakpoints.tablet})`,
    desktop: `(min-width: ${breakpoints.desktop})`
}

const colours = {
    green: "#00302E",
    cream: "#E2B887",
    white: "#FEFEFE"
}

const variables = {
    text: "1em",
    largeText: "3em",
    radius: "50%",
    smallRadius: ".5em",
    height: "100vh",
    width: "100%",
    wkHeight: "100em",
    wkWidth: "100em"
}

export const constants = {
    green: `${colours.green}`,
    cream: `${colours.cream}`,
    white: `${colours.white}`,
    text: `${variables.text}`,
    largeText: `${variables.largeText}`,
    radius: `${variables.radius}`,
    smallRadius: `${variables.smallRadius}`,
    height: `${variables.height}`,
    width: `${variables.width}`,
    wkHeight: `${variables.wkHeight}`,
    wkWidth: `${variables.wkWidth}`
}
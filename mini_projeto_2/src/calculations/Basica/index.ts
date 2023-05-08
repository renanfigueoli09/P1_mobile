export const Basica = (numero: string,) => {
    const splitNumbers = numero.split(" ")
    const operator = splitNumbers[1]
    if (operator === "*") {
        return(parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])).toString()
    }
    if (operator === "/") {
        return (parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString()
    }
    if (operator === "+") {
        return (parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])).toString()
    }
    if (operator === "-") {
        return (parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])).toString()
    }
    return ""
}

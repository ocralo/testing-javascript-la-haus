export default class Calculator {
    sum(...values) { // [10, 30]
        return values.reduce((accumulator, currentValue) => {
            const value = parseInt(currentValue);
            if (isNaN(value)) {
                throw new Error('The parameters received are not numbers')
            }
            return accumulator + currentValue
        }, 0)
    }
}

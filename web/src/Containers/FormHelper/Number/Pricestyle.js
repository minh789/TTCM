const normalizeNumber = (value, previousValue) => {
    if (!value) {
      return value
    }
    const onlyNums = value.replace(/[^\d]/g, '')
    if (onlyNums.length <= 3) {
      return onlyNums 
    }
    if (onlyNums.length <= 6) {
      return onlyNums.slice(0, 2) + '.' + onlyNums.slice(2)
    }
    if (onlyNums.length <= 9) {
        return onlyNums.slice(0, 2) + '.' + onlyNums.slice(2,5)+ '.'+ onlyNums.slice(5,8)
    }
    return onlyNums.slice(0, 2) + '.' + onlyNums.slice(2, 5) + '.' + onlyNums.slice(5, 8)
  }

  export default normalizeNumber;
module.exports = function zeros(expression) {
  // your solution
    let factorials = expression.split('*');
    let result = [];
    let zero = 0;
    for (let i = 0; i < factorials.length; i++) {
        if (factorials[i].includes('!!')) {
            let numbers = factorials[i].split('!!').join('');
            for (let i = parseFloat(numbers); i >= 1; i -= 2) {
                result.push(i);
            }
        } else if (factorials[i].includes('!')) {
            let everyNumber = factorials[i].split('!').join('');
            for (let i = parseFloat(everyNumber); i >= 1; i--) {
                result.push(i);
            }
        }
    }
    for (let i = 0; i < result.length; i++) {
      if (result[i] % 5 === 0 && result[i] != 25 && result[i] != 75 && result[i] != 50 && result[i] != 100) {
          zero++;
      } else if (result[i] === 25 || result[i] === 75 || result[i] === 50 || result[i] === 100) {
          zero+=2;
      } 
  }
   return zero;


}

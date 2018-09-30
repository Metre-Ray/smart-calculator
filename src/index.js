class SmartCalculator {
  constructor(initialValue) {
    this.values = [initialValue];
    this.methods = [];
    this.answer = initialValue;
  }


  resolve_chain() {
    let value = this.values[0].toString();
    for (let i = 0; i < this.methods.length; i++) {
      value += this.methods[i] + this.values[i + 1].toString();
    }
    this.answer = eval(value);
  }

  add(number) {
    this.methods.push('+');
    this.values.push(number);
    return this;
  }

  subtract(number) {
    this.methods.push('-');
    this.values.push(number)
    return this;
  }

  multiply(number) {
    this.methods.push('*');
    this.values.push(number);
    return this;
  }

  devide(number) {
    this.methods.push('/');
    this.values.push(number);
    return this;
  }

  pow(number) {
    this.methods.push('**');
    this.values.push(number);
    return this;
  }

  valueOf() {
    this.resolve_chain()
    return this.answer;
  }

}


/*resolve_chain2() {   // not used now
  let values = [...this.values];
  let methods = [...this.methods];
  let value = this.values[0].toString();
  for (let i = 0; i < this.methods.length; i++) { //pow
    if (methods[i] === 'pow') {
      if (values[2 * i + 1] === undefined) {
        for (let j = 2 * i + 1; j < values.length; j++) {
          //TODO find values !== undefined
        }
      }
      value = values[2 * i] ** values[2 * i + 1];
      methods.splice(i, 1);
      //TODO values
    }
  }
}*/


module.exports = SmartCalculator;

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
      if (typeof this.values[i + 1] !== 'number') return undefined;
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



module.exports = SmartCalculator;

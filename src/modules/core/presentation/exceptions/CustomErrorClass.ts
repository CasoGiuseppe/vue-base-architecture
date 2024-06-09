export class CustomErrorClass extends Error {
  constructor(){
    super();
    this.name = 'Custom error'
  }
}
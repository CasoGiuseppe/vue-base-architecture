export class DataTypeIsDenied extends Error {
  constructor(readonly type: string) {
    super();
    this.name = 'Data type denied'
    this.message = `The provided type: ${ this.type } is not allowed`
  }
}
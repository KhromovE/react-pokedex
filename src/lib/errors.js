export class CancelRequestError extends Error {
  constructor(message) {
    super(message)
    this.name = 'CancelRequestError'
  }
}

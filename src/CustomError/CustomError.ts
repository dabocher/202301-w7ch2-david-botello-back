export class CustomError extends Error {
  code: string;

  constructor(
    message: string,
    public statusCode: number,
    public publicMessage: string
  ) {
    super(message);

    this.statusCode = statusCode;
    this.publicMessage = publicMessage;
  }
}

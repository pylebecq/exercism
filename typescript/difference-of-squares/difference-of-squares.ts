export default class Squares {
  constructor(private readonly n: number) {}

  get squareOfSum(): number {
    return ((this.n * (this.n + 1)) / 2) ** 2;
  }

  get sumOfSquares(): number {
    return this.n * (this.n + 1) * (2 * this.n + 1) / 6;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}

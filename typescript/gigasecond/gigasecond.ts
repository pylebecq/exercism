export default class Gigasecond {
    constructor(private readonly origin: Date) {}

    date(): Date {
        return new Date(this.origin.getTime() + 1e12);
    }
}

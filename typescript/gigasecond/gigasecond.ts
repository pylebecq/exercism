const GIGASECOND_IN_MILLISECONDS = 1e12;

export default class Gigasecond {
    constructor(private readonly origin: Date) {}

    date(): Date {
        return new Date(this.origin.getTime() + GIGASECOND_IN_MILLISECONDS);
    }
}

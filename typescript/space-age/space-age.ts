const EARTH_YEAR_IN_SECONDS = 31557600;
const MERCURY_ORBITAL_PERIOD = 0.2408467;
const VENUS_ORBITAL_PERIOD = 0.61519726;
const MARS_ORBITAL_PERIOD = 1.8808158;
const JUPITER_ORBITAL_PERIOD = 11.862615;
const SATURN_ORBITAL_PERIOD = 29.447498;
const URANUS_ORBITAL_PERIOD = 84.016846;
const NEPTUNE_ORBITAL_PERIOD = 164.79132;

type Fn<T, R> = (x: T) => R;

const pipe = <A, B, C, D>(
  fn1: Fn<A, B>,
  fn2: Fn<B, C>,
  fn3: Fn<C, D>
): Fn<A, D> => (x: A): D => fn3(fn2(fn1(x)));

const round = (x: number): number =>
  Math.round((x + Number.EPSILON) * 100) / 100;

const secondsToEarthYears = (x: number): number => x / EARTH_YEAR_IN_SECONDS;

const earthYearsToPlanetYears = (orbitalPeriod: number): Fn<number, number> => {
  return (x: number): number => x / orbitalPeriod;
};

const planetYears = (orbitalPeriod: number): Fn<number, number> =>
  pipe(secondsToEarthYears, earthYearsToPlanetYears(orbitalPeriod), round);

const earthYears = planetYears(1);
const mercuryYears = planetYears(MERCURY_ORBITAL_PERIOD);
const venusYears = planetYears(VENUS_ORBITAL_PERIOD);
const marsYears = planetYears(MARS_ORBITAL_PERIOD);
const jupiterYears = planetYears(JUPITER_ORBITAL_PERIOD);
const saturnYears = planetYears(SATURN_ORBITAL_PERIOD);
const uranusYears = planetYears(URANUS_ORBITAL_PERIOD);
const neptuneYears = planetYears(NEPTUNE_ORBITAL_PERIOD);

export default class SpaceAge {
  constructor(public readonly seconds: number) {}

  onEarth(): number {
    return earthYears(this.seconds);
  }

  onMercury(): number {
    return mercuryYears(this.seconds);
  }

  onVenus(): number {
    return venusYears(this.seconds);
  }

  onMars(): number {
    return marsYears(this.seconds);
  }

  onJupiter(): number {
    return jupiterYears(this.seconds);
  }

  onSaturn(): number {
    return saturnYears(this.seconds);
  }

  onUranus(): number {
    return uranusYears(this.seconds);
  }

  onNeptune(): number {
    return neptuneYears(this.seconds);
  }
}

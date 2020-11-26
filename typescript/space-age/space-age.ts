const obitalPeriods = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

type OrbitalPeriods = typeof obitalPeriods;

const earthYearInSeconds = 31557600;

const round = (x: number): number =>
  Math.round((x + Number.EPSILON) * 100) / 100;

export default class SpaceAge {
  constructor(public readonly seconds: number) {}

  onEarth(): number {
    return this.planetYears("earth")(this.seconds);
  }

  onMercury(): number {
    return this.planetYears("mercury")(this.seconds);
  }

  onVenus(): number {
    return this.planetYears("venus")(this.seconds);
  }

  onMars(): number {
    return this.planetYears("mars")(this.seconds);
  }

  onJupiter(): number {
    return this.planetYears("jupiter")(this.seconds);
  }

  onSaturn(): number {
    return this.planetYears("saturn")(this.seconds);
  }

  onUranus(): number {
    return this.planetYears("uranus")(this.seconds);
  }

  onNeptune(): number {
    return this.planetYears("neptune")(this.seconds);
  }

  private planetYears(planet: keyof OrbitalPeriods) {
    return (x: number): number =>
      round(x / earthYearInSeconds / obitalPeriods[planet]);
  }
}

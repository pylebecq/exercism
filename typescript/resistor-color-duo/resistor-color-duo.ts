export class ResistorColor {
  static ColorValues = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  private colors: Color[];

  constructor(colors: Color[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }

    this.colors = colors.slice(0, 2);
  }

  value(): number {
    const [first, second] = this.colors;

    return (
      10 * ResistorColor.ColorValues[first] + ResistorColor.ColorValues[second]
    );
  }
}

type Color = keyof typeof ResistorColor.ColorValues;

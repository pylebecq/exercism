const colorValues = {
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

type Color = keyof typeof colorValues;

function isValidColor(color: string): color is Color {
  return color in colorValues;
}

function isValidColorList(colors: string[]): colors is Array<Color> {
  return colors.length >= 2 && colors.every(isValidColor);
}

export class ResistorColor {
  private colors: Color[];

  constructor(colors: string[]) {
    if (!isValidColorList(colors)) {
      throw new Error("At least two colors need to be present");
    }

    this.colors = colors;
  }

  value = (): number =>
    10 * colorValues[this.colors[0]] + colorValues[this.colors[1]];
}

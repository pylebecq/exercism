type Nucleotide = "G" | "C" | "T" | "A";

const DnaToRnaMappings: { [x: string]: string } = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

function assertIsNucleotideList(
  input: string[]
): asserts input is Nucleotide[] {
  if (input.find((x) => DnaToRnaMappings[x] === undefined)) {
    throw new Error("Invalid input DNA.");
  }
}

class Transcriptor {
  toRna(input: string): string {
    const nucleotides = input.split("");
    assertIsNucleotideList(nucleotides);

    return nucleotides.map((x) => DnaToRnaMappings[x]).join("");
  }
}

export default Transcriptor;

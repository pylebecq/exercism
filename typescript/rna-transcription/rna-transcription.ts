type Nucleotide = "G" | "C" | "T" | "A";

const DnaToRnaMappings: Record<Nucleotide, string> = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

function assertIsNucleotideList(
  input: string[]
): asserts input is Nucleotide[] {
  const nucleotides = Object.keys(DnaToRnaMappings);

  if (input.some((x) => !nucleotides.includes(x))) {
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

type Nucleotide = "G" | "C" | "T" | "A";

function assertIsNucleotideList(
  input: string[]
): asserts input is Nucleotide[] {
  if (input.find((x) => x.match("^[GCTA]$") === null)) {
    throw new Error("Invalid input DNA.");
  }
}

class Transcriptor {
  private static mappings: { [P in Nucleotide]: string } = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };

  toRna(input: string): string {
    const nucleotides = input.split("");
    assertIsNucleotideList(nucleotides);

    return nucleotides.map((x) => Transcriptor.mappings[x]).join("");
  }
}

export default Transcriptor;

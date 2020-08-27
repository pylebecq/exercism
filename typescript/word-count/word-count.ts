export default class Words {
  count(sentence: string): Map<string, number> {
    return sentence
      .trim()
      .toLowerCase()
      .split(/(?: |\n|\t)+/)
      .reduce(
        (acc, word, _index, _arr) => acc.set(word, (acc.get(word) || 0) + 1),
        new Map()
      );
  }
}

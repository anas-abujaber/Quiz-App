export class Storage {
  #key;
  constructor(key) {
    this.#key = key;
  }

  save(item) {
    const stored = localStorage.getItem(this.#key);
    const parsed = JSON.parse(stored) ?? [];
    const idx = parsed.findIndex((x) => x.qId === item.qId);
    if (idx >= 0) {
      parsed[idx] = item;
    } else {
      parsed.push(item);
    }
    localStorage.setItem(this.#key, JSON.stringify(parsed));
  }
}

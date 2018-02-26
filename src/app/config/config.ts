const config = {
  api: {
    base(path: string) {
      return `assets/data/${path}.json`;
    },
    list: 'assets/data/list.json'
  }
};
export { config };

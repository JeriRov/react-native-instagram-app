export class TextHelper {
  static getUserHistoryName = (name: string) => {
    const limit = 9;
    if (name.length > limit) {
      return `${name.substring(0, limit)}...`;
    }
    return name;
  };
}

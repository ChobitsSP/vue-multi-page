export default class MyUtils {
  public static async Func1() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1e3);
    });
  }
}

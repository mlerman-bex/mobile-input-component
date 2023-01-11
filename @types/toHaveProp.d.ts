declare module 'expect' {
  interface Matchers<R> {
    toHaveProp(prop: string, value: any): R;
  }
}

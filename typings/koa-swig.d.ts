declare module 'koa-swig' {
  // function renderer(opts: renderer.defaultSettings): any;
  // function renderer(id: string, data?: object): any;
  function render<T>(value: T | render.DefaultSettings): any;
  namespace render {
    interface DefaultSettings {
      autoescape: boolean;
      root: string;
      cache: string | boolean;
      ext: string;
      writeBody: boolean;
      memory?: string | boolean;
    }
  }
  export default render;
}

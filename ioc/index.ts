import { fluentProvide } from 'inversify-binding-decorators';

const provideThrowable = (identifier: symbol, name: string) =>
  fluentProvide(identifier).whenTargetNamed(name).done();

export { provideThrowable };

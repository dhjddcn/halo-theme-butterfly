import Application from './Application';

/**
 * @desc: 运行App
 * @param target
 * @param name
 * @param descriptor
 * @returns {*}
 */
export function run(target) {
  const instance = Reflect.construct(target, []);

  instance.prototype = new Application();

  console.log(instance);

  document.addEventListener('DOMContentLoaded',
    () => window.byApp.page = instance);

  return instance;
}
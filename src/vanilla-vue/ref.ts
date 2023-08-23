const ref = function <T>(refObj: { [key: string]: T }): { value?: T } {
  const key = Object.keys(refObj)[0];

  const target: { value: T } = {value: refObj[key]};

  const elements: Element[] = [];

  const handler = {
    get() {
      return target.value;
    },
    set(target: { value?: T }, _: any, value: T) {
      target.value = value;
      if (elements.length > 0) {
        elements.forEach((element) => element.textContent = String(value));
      }
      return true;
    }
  };

  document.querySelectorAll(`[data-vv-bind="${key}"]`)
    .forEach(element => {
      elements.push(element);
    });

  if (elements.length > 0) {
    elements.forEach((element) => element.textContent = String(target.value));
  }

  return new Proxy(target, handler);
}

export default ref;

# Vanilla Vue
> A try to redo Vue 3 in a Vanilla TS environment by a Vue fan.

⚠️ This project is still in early development

## Functionalities

### Done

- None

### Planned

- Bind
- Ref

### Need Further Investigation

- Computed
- OnMounted
- Props
- Click Event

## Documentation

### Basic usage
To simplify everything, we use the JS dataset to make VueVanilla work with HTML.

> Some examples:
> ```html
> <div data-vv-bind="value"></div> // NOT IMPLEMENTED
> <div data-vv-click="value or Function()"></div> // NOT IMPLEMENTED
> <div data-vv-props="{Object}"></div> // NOT IMPLEMENTED
> ```

### Bind // NOT IMPLEMENTED
> main.ts | main.js
> ```ts
> import { ref } from 'vanilla-vue';
> 
> const element = new ref('test');
> 
> console.log(element.value); // 'test'
> 
> element.value = 'Oh My God';
> 
> console.log(element.value); // 'Oh My God'
> ```

> index.html
> ```html
> <div data-vv-bind="element" />
> ```

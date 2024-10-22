# Archived
I will try to create a new Vanilla Vue but with some other concept, closer to Vue composition API.
I archive this attempt as it is a first try but will not work on this repository, a new repository could appear some day at https://github.com/GeoffreyParrier/Vuenilla but no promises here.

# Vanilla Vue

> A try to redo Vue 3 in a Vanilla TS environment by a Vue fan.

⚠️ This project is still in early development, let me know if there is anything wrong or better

## Functionalities

### Done

- Bind / Ref

### Planned

- Click Event

### Need Further Investigation

- Computed
- OnMounted
- Props

## Documentation

### Basic usage

To simplify everything, we use the JS dataset to make VueVanilla work with HTML.

> Some examples:
> ```html
> <p data-vv-bind="value"></p>
> <div data-vv-click="value or Function()"></div> // NOT IMPLEMENTED
> <div data-vv-props="{Object}"></div> // NOT IMPLEMENTED
> ```

### Bind / Ref

> main.ts | main.js
> ```ts
> import { ref } from 'vanilla-vue';
> 
> const element = new ref({element: 'test'});
> 
> console.log(element.value); // 'test'
> 
> element.value = 'Oh My God';
> 
> console.log(element.value); // 'Oh My God'
> ```

> index.html
> ```html
> <p data-vv-bind="element" />
> ```

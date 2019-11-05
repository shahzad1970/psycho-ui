# ui-input-option



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type      | Default     |
| ---------- | ---------- | ----------- | --------- | ----------- |
| `selected` | `selected` |             | `boolean` | `false`     |
| `value`    | `value`    |             | `string`  | `undefined` |


## Events

| Event                | Description | Type               |
| -------------------- | ----------- | ------------------ |
| `uiInputOptionEvent` |             | `CustomEvent<any>` |


## Methods

### `getValue() => Promise<string>`



#### Returns

Type: `Promise<string>`




## Dependencies

### Used by

 - [ui-playground-attrs](../../ui-playground/ui-playground-attrs)

### Depends on

- [ui-ripple](../../ui-ripple)

### Graph
```mermaid
graph TD;
  ui-input-option --> ui-ripple
  ui-playground-attrs --> ui-input-option
  style ui-input-option fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

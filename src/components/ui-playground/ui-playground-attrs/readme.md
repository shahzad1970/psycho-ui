# ui-playground-attrs



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute | Description | Type                  | Default |
| ---------- | --------- | ----------- | --------------------- | ------- |
| `docs`     | --        |             | `JsonDocsComponent[]` | `[]`    |
| `elements` | --        |             | `HTMLElement[]`       | `[]`    |


## Events

| Event                  | Description | Type               |
| ---------------------- | ----------- | ------------------ |
| `updatePlaygroundCode` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [ui-playground](..)

### Depends on

- [ui-input](../../ui-input)
- [ui-button](../../ui-button)
- [ui-input-option](../../ui-input/ui-input-option)
- [ui-heading](../../ui-heading)

### Graph
```mermaid
graph TD;
  ui-playground-attrs --> ui-input
  ui-playground-attrs --> ui-button
  ui-playground-attrs --> ui-input-option
  ui-playground-attrs --> ui-heading
  ui-input --> ui-icon
  ui-input --> ui-text
  ui-input --> ui-input-color
  ui-input --> ui-input-radio
  ui-input-color --> ui-button
  ui-button --> ui-ripple
  ui-input-option --> ui-ripple
  ui-playground --> ui-playground-attrs
  style ui-playground-attrs fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

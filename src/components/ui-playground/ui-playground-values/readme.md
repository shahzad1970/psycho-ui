# ui-playground-values



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type           | Default     |
| -------- | --------- | ----------- | -------------- | ----------- |
| `prop`   | --        |             | `JsonDocsProp` | `undefined` |


## Dependencies

### Used by

 - [ui-playground](..)

### Depends on

- [ui-layout](../../ui-layout)
- [ui-input](../../ui-input)
- [ui-icon](../../ui-icon)
- [ui-button](../../ui-button)
- [ui-text](../../ui-text)

### Graph
```mermaid
graph TD;
  ui-playground-values --> ui-layout
  ui-playground-values --> ui-input
  ui-playground-values --> ui-icon
  ui-playground-values --> ui-button
  ui-playground-values --> ui-text
  ui-input --> ui-icon
  ui-input --> ui-text
  ui-input --> ui-input-color
  ui-input --> ui-input-radio
  ui-input-color --> ui-button
  ui-button --> ui-ripple
  ui-playground --> ui-playground-values
  style ui-playground-values fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

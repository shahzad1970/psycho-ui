# ui-playground



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `tag`    | `tag`     |             | `string` | `undefined` |


## Dependencies

### Depends on

- [ui-layout](../ui-layout)
- [ui-heading](../ui-heading)
- [ui-paragraph](../ui-paragraph)
- [ui-code](../ui-code)
- [ui-playground-values](ui-playground-values)
- [ui-playground-attrs](ui-playground-attrs)

### Graph
```mermaid
graph TD;
  ui-playground --> ui-layout
  ui-playground --> ui-heading
  ui-playground --> ui-paragraph
  ui-playground --> ui-code
  ui-playground --> ui-playground-values
  ui-playground --> ui-playground-attrs
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
  ui-playground-attrs --> ui-input
  ui-playground-attrs --> ui-button
  ui-playground-attrs --> ui-input-option
  ui-playground-attrs --> ui-layout
  ui-playground-attrs --> ui-heading
  ui-input-option --> ui-ripple
  style ui-playground fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

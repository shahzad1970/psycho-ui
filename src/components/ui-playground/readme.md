# ui-playground



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `tag`    | `tag`     |             | `string` | `undefined` |


## Dependencies

### Depends on

- [ui-heading](../ui-heading)
- [ui-paragraph](../ui-paragraph)
- [ui-playground-attrs](ui-playground-attrs)
- [ui-code](../ui-code)
- [ui-icon](../ui-icon)
- [ui-text](../ui-text)

### Graph
```mermaid
graph TD;
  ui-playground --> ui-heading
  ui-playground --> ui-paragraph
  ui-playground --> ui-playground-attrs
  ui-playground --> ui-code
  ui-playground --> ui-icon
  ui-playground --> ui-text
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
  style ui-playground fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

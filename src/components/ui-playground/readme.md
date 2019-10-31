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

### Graph
```mermaid
graph TD;
  ui-playground --> ui-heading
  ui-playground --> ui-paragraph
  ui-playground --> ui-playground-attrs
  ui-playground-attrs --> ui-heading
  ui-playground-attrs --> ui-button
  ui-playground-attrs --> ui-icon
  ui-button --> ui-ripple
  style ui-playground fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

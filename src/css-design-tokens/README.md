# Watson CSS design tokens

Watson uses a three-level tier to add the specific capability to each token:

- **Core**: This tier is mainly responsible for the look of the final product by defining the all values that can be used. Tokens in this tier are **only used internally**.
- **Semantic**: Tokens in this tier reference core tokens. Their name describes the intended use of the token. In contrast to core tokens, these tokens are supposed to be used by everyone and will be exposed as public tokens.
- **Component**: Tokens in this tier reference semantic tokens and tie them to a specific component value. This tokens reference the component affected after the Namespace. E,g. --watson-button-background-primary

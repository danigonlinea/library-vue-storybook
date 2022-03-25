# Watson CSS design tokens

Design tokens ease building products by improving the communication around design. They help scale your product by separating design decisions from specific platforms & technologies.

They improve communication with build-in documentation & promoting design decisions out of design files.

## Naming

Users should be able to understand the purpose of any given token at a glance. To make sure naming stays consistent and straightforward, we follow these guidelines:

- **Structure**: `--{namespace}-{category}-{property}-{variant}`.

- **Namespace**: Token names always start with a prefix and a hyphen. For example `--watson-color-success` or `--watson-space-xl`. “Watson” stands for the Watson Design System. Prefixing is critical to ensure that our naming doesn’t conflict with other systems.

- **Category**: Token names always include at least one category, like color, space, or similar. If it makes sense in your use case, you can also include a property in the name. For example `--watson-color-status-success` or `--watson-color-status-warning`.

## Tiers

Watson uses a three-level tier to add the specific capability to each token:

- **Core**: This tier is mainly responsible for the look of the final product by defining the all values that can be used. Tokens in this tier are **only used internally**.
- **Semantic**: Tokens in this tier reference core tokens. Their name describes the intended use of the token. In contrast to core tokens, these tokens are supposed to be used by everyone and will be exposed as public tokens.
- **Component**: Tokens in this tier reference semantic tokens and tie them to a specific component value. This tokens reference the component affected after the Namespace. E,g. --watson-button-background-primary

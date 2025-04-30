# Themes

As an administrator, you can add your own custom themes which the users can then use.

## Creating a Theme

To create a new theme, place a `.json` file in the following folder:
```
config/themes
```

### Theme JSON Structure
```json
{
  "identifier": "unique-identifier",
  "name": "Custom Theme",
  "description": "A colorful and vibrant theme with bold accents.",
  "theme": {
    "key": "value"
  }
}
```

- `identifier`: must be unique.
- `name`: user-friendly display name.
- `description`: describes the theme’s purpose or style.
- `theme`: key-value map defining styling options.

👉 For a list of supported keys in the `theme` object, refer to the [GitHub reference here](https://github.com/timonmdy/xami/tree/master/src/main/resources/themes/.reference)

## Reloading Custom Themes

To load or update user-defined themes, use:
```bash
reload themes
```

This command reads all files from `config/themes` and integrates them into the running application without requiring a restart.

## Overriding Predefined Themes

If a user-defined theme in `config/themes` has the **same identifier** as a predefined one, it will **overwrite** the predefined version. This allows admins to customize built-in themes while maintaining the original source.

## Listing Available Themes

Use the following command to display all recognized themes:
```bash
themes
```

Each theme will be listed along with its source:
- **predefined** – Only the built-in version is present.
- **user** – Only a user-defined version is found.
- **edited** – Both predefined and user-defined versions exist, and the user one is currently active.

This provides clear visibility into what themes are in use and whether any customizations have been applied.


# Languages

`xami` includes a robust and flexible internationalization (i18n) system designed to support multiple languages and easy customization by administrators.

## Predefined Language Sets

The application comes with an internal set of **predefined language files**. These files include all translation keys required for the frontend user interface and cover commonly used languages such as English, German, and more.

Predefined sets are maintained and updated with each application release. This ensures that users always have access to the latest translations without needing manual updates.

## Custom Language Overrides

To allow customization without modifying the predefined files, a `config/language` directory is automatically created when the application starts.

In this directory, administrators can:
- **Override specific translation strings** by creating partial language files.
- **Introduce entirely new languages** that are not included in the predefined set.

User-defined language files must follow the naming convention `messages_custom_[languageCode].properties` (e.g., `messages_custom_en.properties`).

To see further details, visit the sub-pages of this documentation page.

## Language Command

To view available languages, you can use the console. The corresponding command is called

```bash
languages
```

and is located under `API Commands`. You can see all found languages and their origin (see below).

## Loading Priority

When loading translations, the application uses the following priority:
1. **User-defined override** (from `config/language`)
2. **Predefined default** (managed internally)

If a translation key exists in both locations, the user-defined version will take precedence. This ensures full flexibility while maintaining fallback support for missing keys.

## Language Origin Marking

Each available language is automatically categorized based on its source:
- **predefined**: Only a predefined version exists.
- **user**: Only a user-defined version exists.
- **edited**: Both a predefined and a user-defined version exist.

This marking helps to better organize and understand the state of each language during administration and debugging.

## Benefits of This Approach

- **Customizable**: Admins can adjust only the strings they need.
- **Updatable**: Predefined languages continue to receive updates automatically.
- **Maintainable**: No need to merge changes manually when new versions are released.
- **Expandable**: Full support for custom languages beyond the defaults.
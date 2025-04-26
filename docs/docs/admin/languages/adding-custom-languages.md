# Adding Custom Languages

This guide explains how to add completely new languages to the application.

## Overview

In addition to modifying existing languages, you can introduce entirely new languages that are not included by default.

All available translation keys can be found here:
[Translation Keys on GitHub](https://github.com/timonmdy/xami/tree/master/src/main/resources/i18n/keys.properties)

## Steps to Add a New Language

1. **Locate the `config/language` Directory**
- This folder is automatically created when the application starts.
- Path: `config/language`

2. **Create a New Language File**
- Create a new file following the naming convention:
```
messages_custom_[languageCode].properties
```
- Make sure to use only available language codes or otherwise you will overwrite actual languages.

Example for Pirate Language:
```
messages_custom_pirate.properties
```

3. **Define Translations**
- Copy all translation keys from the [GitHub reference](https://github.com/timonmdy/xami/tree/master/src/main/resources/i18n/keys.properties).
- Provide your own translations for each key.

Example:
```properties
error.page_not_found=Thy peighe wos not faund!
```

4. **Save and Restart**
- Save your new file.
- It is recommended to restart the application to load the new language.

5. **Set the Application Language**
- The system will recognize both predefined and custom languages automatically.
- Enjoy your newly created language!

## Important Notes

- Make sure to define all important keys to avoid missing text. If you miss a translation, it's key will be used as language.
- Properties files must be UTF-8 encoded without BOM.
- Avoid using [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) language codes (e.g., `es` for Spanish, `fr` for French) unless you want to create a translation file for an **actual** language. In this case, we do encourage to contribute to the officail repository.

With this system, you can easily expand the application's language support for new regions, communities, or custom requirements.
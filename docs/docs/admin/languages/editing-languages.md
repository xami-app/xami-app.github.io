# Editing Languages

This guide explains how to customize existing translations in the application.

## Overview

All user-facing text is controlled through translation keys. These keys are defined once and can be customized without modifying the core application files.

You can view all available translation keys  values here:
[Translation Keys on GitHub](https://github.com/timonmdy/xami/tree/master/src/main/resources/i18n/keys.properties)

## Steps to Edit Language Strings

1. **Locate the `config/language` Directory**
- This folder is automatically created when the application starts.
- Path: `config/language`

2. **Create or Edit a Custom Language File**
- If you want to modify an existing language (e.g., English), create a file named:
```
messages_custom_en.properties
```
- If the file already exists, simply edit it.

3. **Add or Override Translation Keys**
- Copy any key you want to change from the [GitHub reference](https://github.com/timonmdy/xami/tree/master/src/main/resources/i18n/keys.properties).
- Add the key and your new translation in the `messages_custom_[lang].properties` file.
     
Example:
```properties
error.page_not_found=The required page was not found.
```

4. **Save and Restart**
- Save the file and even though not necessary, it is recommended to restart the application if it is already running.
- Changes will be picked up dynamically, but are ensured to take effect on startup.

## Important Notes

- Only keys you define are overridden. Everything else continues using the default predefined translations.
- Make sure you use the correct language code (e.g., `en`, `de`, `fr`).
- Properties files must be encoded in UTF-8 without BOM.

By using this system, you can easily adjust the wording to better fit your needs without interfering with the application's update process.


# Hot-Reloading Themes

Theme JSON files are loaded differently depending on the active Spring profile. This setup optimizes for performance and flexibility.

## Production Mode

In production, themes are loaded from the **classpath** (typically from inside a JAR). This ensures:

- No changes to predefined themes at runtime.
- Faster and more predictable behavior.

This means any changes to theme files require recompiling and redeploying the application.

## Development Mode (`dev` profile)

When running the app with the `dev` profile, the behavior changes to support rapid iteration:

- The application looks for predefined theme files in the local filesystem at:
  ```
  src/main/resources/themes
  ```
- All `.json` files in this folder are loaded and used **instead of** the classpath.
- This allows you to:
  - Edit themes without restarting the app.
  - Quickly iterate on styling and color schemes.

### Enable Dev Mode
You can enable development mode in two ways:

**Via `application.yml`:**
```yaml
spring:
  profiles:
    active: dev
```

**Or via command line:**
```bash
spring-boot:run -Dspring.profiles.active=dev
```

### Reloading Themes
While in development mode, use the following command to reload **all** themes (including predefined ones) without restarting the app:

```bash
reload themes
```

This reloads the themes directly from the filesystem. If you're not in `dev` mode, this command will **not** affect predefined themes, since they are read from the classpath (and therefore immutable at runtime).

---

## Behind the Scenes: How It Works

The method responsible for this logic is `ThemeFileIndex#loadFromResources`:

1. **If `dev` profile is active:**
   - Look in `src/main/resources/themes`
   - Load all `.json` files found there
   - Log which files were loaded
   - Any errors during loading are logged but don't stop the process

2. **If not in `dev` or if the folder doesn’t exist:**
   - Load all `.json` theme files from the classpath (e.g., from inside a JAR)
   - Save them to temporary files so the system can work with file paths

This dual-loading mechanism allows developers to iterate quickly while maintaining reliability and consistency in production.


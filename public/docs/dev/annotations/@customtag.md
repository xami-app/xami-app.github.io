# @CustomTag

Welcome to the official documentation for the `@CustomTag` annotation. This annotation allows developers to attach custom metadata to methods, classes, and properties. Below you'll find instructions on how to use it, along with relevant code examples and links to other documentation.

## Overview

The `@CustomTag` annotation is a simple but powerful tool that allows you to mark elements in your code for custom processing. It can be used with methods, classes, and properties to associate additional metadata. This metadata can then be processed at runtime using reflection or a custom processing tool.

## Usage

### Method Annotation

The `@CustomTag` annotation can be used to annotate methods. This can be particularly useful for marking methods that need special handling, such as logging or validation.

```java
@CustomTag(value = "logging")
public void someMethod() {
    // Method implementation
}
```

### Class Annotation

You can annotate entire classes with `@CustomTag` to apply metadata at a broader scope.

```java
@CustomTag(value = "controller")
public class UserController {
    // Class contents
}
```

### Property Annotation

It can also be applied to fields (properties) for use cases like configuration or serialization customization.

```java
@CustomTag(value = "config")
private String apiEndpoint;
```

## Runtime Processing

At runtime, you can retrieve and act upon `@CustomTag` annotations using Java reflection. Here's a simple example:

```java
for (Method method : SomeClass.class.getDeclaredMethods()) {
    if (method.isAnnotationPresent(CustomTag.class)) {
        CustomTag tag = method.getAnnotation(CustomTag.class);
        System.out.println("Found tag: " + tag.value());
    }
}
```

## Use Cases

- **Logging**: Mark methods to be wrapped in automatic logging behavior.
- **Validation**: Indicate which methods or properties need additional validation.
- **Serialization**: Use tags to customize JSON/XML serialization behavior.
- **Plugin Systems**: Dynamically load and handle elements based on tags.

## Annotation Definition

Here is how the annotation itself is defined:

```java
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD, ElementType.FIELD, ElementType.TYPE})
public @interface CustomTag {
    String value();
}
```

## Related Documentation

- [Java Annotations Overview](https://docs.oracle.com/javase/tutorial/java/annotations/)
- [Reflection in Java](https://docs.oracle.com/javase/tutorial/reflect/)
- [Using Custom Annotations](https://www.baeldung.com/java-custom-annotation)

## Conclusion

The `@CustomTag` annotation is a flexible way to embed metadata into your Java code for use with various runtime tools and systems. Whether you're building a lightweight framework or extending an existing system, `@CustomTag` provides a clean and standardized method to tag and organize your logic.
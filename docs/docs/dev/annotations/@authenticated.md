# @Authenticated

The `@Authenticated` annotation can be used on API endpoints to ensure that the caller is authenticated (logged in). 

## Overview

If an unauthenticated user tries to access a method annotated with `@Authenticated`, the corresponding aspect will throw an exception which will be handled automatically to respond with HTTP status code 403 (Forbidden). 

### User object injection

If the user that is calling the endpoint is authenticated, the aspect will inject the corresponding `User` entity into the **first** paramter of type `User`.

## Usage

### Method Annotation

The `@Authenticated` annotation can be used on method level like this:

```java
@Authenticated
@GetMapping
public ResponseEntity<String> getUsername(User user) {
    return ResponseEntity.ok(user.getName());
}
```

## See also
Some people do not like to use "magic" in their code, which is absolutely understandable. The aspect which wraps around the method can be found [here](https://example.com)

If you are curious about annotations in general:
- [Java Annotations Overview](https://docs.oracle.com/javase/tutorial/java/annotations/)
- [Reflection in Java](https://docs.oracle.com/javase/tutorial/reflect/)
- [Using Custom Annotations](https://www.baeldung.com/java-custom-annotation)

## Conclusion

The `@Authenticated` annotation is a simple way to require authentication from a user when calling a method, saving you some LOC since you do not have to retrieve Optionals or throw any errors.
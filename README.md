# Lambaa Demo - Serverless

This project was bootstrapped using `serverless create --template aws-nodejs-typescript`.

## 1. [Controllers](src/controllers/PingController.ts)

-   Classes that contain our Lambda event handlers as methods
-   Defined using the `@Controller()` decorator

## 2. [Middleware](src/middleware/requestLogger.ts)

-   A flexible way to share common functionality
-   Defined either by implementing the `Middleware` interface, or `MiddlewareFunction` type
-   Can be added to using the `Router`, the `@Controller()` decorator, or the `@Use()` decorator

## 3. [Router](src/index.ts)

-   The router contains all of the routing logic and is responsible for executing the middleware pipeline
-   Defined by created a new `Router()`
-   Controllers can be registered using `.registerController()`
-   Middleware can be registered globally using `.registerMiddleware()`

import { MiddlewareFunction } from "lambaa"

const requestLogger: MiddlewareFunction = async (event, context, next) => {
    // Pre-response
    console.log("Received request", event)

    const response = await next(event, context)

    // Post-response
    console.log("Response", response)

    return response
}

export default requestLogger

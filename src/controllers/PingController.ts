import { APIGatewayProxyResult } from "aws-lambda"
import { Controller, GET } from "lambaa"

@Controller()
export default class PingController {
    @GET("/ping")
    public ping(): APIGatewayProxyResult {
        return {
            statusCode: 200,
            body: "pong",
        }
    }
}

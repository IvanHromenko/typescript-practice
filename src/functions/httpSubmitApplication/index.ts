import { app, HttpRequest, HttpResponseInit } from "@azure/functions";
import { ApplicationService } from "../../application/applicationService";

export async function httpSubmitApplication(
  req: HttpRequest
): Promise<HttpResponseInit> {
  const body = await req.json();

  const service = new ApplicationService();
  const result = await service.submit(body);

  return { status: 201, jsonBody: result };
}

app.http("httpSubmitApplication", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: httpSubmitApplication,
});
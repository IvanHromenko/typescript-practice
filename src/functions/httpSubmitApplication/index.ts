import { app, HttpRequest, HttpResponseInit } from "@azure/functions";
import { ApplicationService } from "../../application/applicationService";
import { LeaseApplication } from "../../domain/leasing";

export async function httpSubmitApplication(
  req: HttpRequest
): Promise<HttpResponseInit> {
  const body = await req.json();

  const service = new ApplicationService();
  const result = await service.submit(body as Omit<LeaseApplication, "id" | "status">);

  return { status: 201, jsonBody: result };
}

app.http("httpSubmitApplication", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: httpSubmitApplication,
});
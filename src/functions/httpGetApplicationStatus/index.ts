import { app, HttpRequest } from "@azure/functions";
import { getApplication } from "../../infrastructure/database";

export async function httpGetApplicationStatus(req: HttpRequest) {
  const id = req.query.get("id");
  const appData = await getApplication(id!);

  return {
    status: 200,
    jsonBody: appData ?? { error: "Not found" },
  };
}

app.http("httpGetApplicationStatus", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: httpGetApplicationStatus,
});
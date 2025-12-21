import { LeaseApplication } from "../domain/leasing";
import { saveApplication } from "../infrastructure/database";
import { enqueue } from "../infrastructure/queue";
import { v4 as uuid } from "uuid";

export class ApplicationService {
  async submit(data: Omit<LeaseApplication, "id" | "status">) {
    const app: LeaseApplication = {
      id: uuid(),
      status: "PENDING",
      ...data,
    };

    await saveApplication(app);
    await enqueue("application-queue", app);

    return app;
  }
}
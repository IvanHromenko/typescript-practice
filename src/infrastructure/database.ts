import { LeaseApplication } from "../domain/leasing";

const db = new Map<string, any>();

export async function saveApplication(app: LeaseApplication) {
  db.set(app.id, app);
}

export async function getApplication(id: string) {
  return db.get(id);
}

export async function updateApplication(id: string, data: any) {
  const existing = db.get(id);
  db.set(id, { ...existing, ...data });
}

export async function getApprovedLeases() {
  return Array.from(db.values()).filter(
    (a) => a.status === "APPROVED"
  );
}
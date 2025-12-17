export async function enqueue(
  queueName: string,
  payload: unknown
) {
  console.log(`[QUEUE:${queueName}]`, payload);
}
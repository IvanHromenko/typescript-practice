export async function saveBlob(
  name: string,
  content: string
) {
  console.log(`[BLOB:${name}]`, content);
  return `https://fake-blob/${name}`;
}
export const config = { runtime: "edge" };


export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  const body = await req.json();
  if (!body.email) {
    return new Response("Email required", { status: 400 });
  }
  return new Response(JSON.stringify({ success: true }));
}
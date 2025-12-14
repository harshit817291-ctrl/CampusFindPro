export const config = { runtime: "edge" };


export default async function handler() {
  return new Response(JSON.stringify({
    items: [
      { id: 1, title: "Lost Wallet", location: "Library" },
      { id: 2, title: "Found Keys", location: "Cafeteria" }
    ]
  }));
}
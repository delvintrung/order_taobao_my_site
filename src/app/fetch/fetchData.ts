export async function getOrderByEmail(id: string) {
  const res = await fetch("/api/userOrder/" + id, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

import { Order } from "@/types/type";
export async function getOrderById(id: string): Promise<Order[]> {
  const res = await fetch(`/api/userOrder/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

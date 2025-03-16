export async function GET() {
  try {
    const response = await fetch(
      "https://wise.com/rates/history+live?source=CNY&target=VND&length=1",
      { cache: "no-store" }
    );

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Không thể lấy dữ liệu từ Wise API" }),
        { status: response.status }
      );
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Lỗi server" }), {
      status: 500,
    });
  }
}

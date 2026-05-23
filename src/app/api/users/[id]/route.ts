import { users } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const user = users.find((u) => u.id === id);

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  if (user) {
    return NextResponse.json(user);
  }
}

import { users } from "@/lib/data";
import { NextResponse } from "next/server";

export function GET({ params }: { params: { id: string } }) {
  const user = users.find((u) => u.id === params.id);

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  if (user) {
    return NextResponse.json(user);
  }
}

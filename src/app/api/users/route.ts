import { users } from "@/lib/data";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(users);
}

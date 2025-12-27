import { NextResponse } from "next/server";
import Drill from "@/model/drill";
import connectDB from "@/lib/db";


export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();

    const saved = await Drill.create(data);

    return NextResponse.json({ success: true, drill: saved }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

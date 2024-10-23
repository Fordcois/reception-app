import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { userid: string } }) {
  const { userid } = params;

  // Log the number when the route is reached
  console.log(`The number is: ${userid}`);

  // Return a JSON response
  return NextResponse.json({ message: `Received number: ${userid}` });
}

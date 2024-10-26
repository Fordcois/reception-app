import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function PUT(request: Request) {
  try {
    const { user_id, in_building } = await request.json();
    const result = await pool.query(
      "UPDATE users SET in_building = $1 WHERE user_id = $2 RETURNING *",
      [in_building, user_id]
    );
    if (result.rowCount === 0) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { user: result.rows[0]},
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to update record' },
      { status: 500 }
    );
  }
}
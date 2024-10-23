import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { headers } from 'next/headers';

export async function GET() {
  try {
    console.log('Backend Reached')
    const records = await pool.query("SELECT * FROM users");
    return NextResponse.json(records.rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch records' },
      { status: 500 }
    );
  }
}
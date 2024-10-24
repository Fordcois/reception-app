import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request: Request, { params }: { params: { userid: string } }) {
    try {
        const { userid } = params;
        console.log(`Fetching records for user: ${userid}`);
        const records = await pool.query("SELECT * FROM users WHERE user_id = $1", [userid]);
        return NextResponse.json(records.rows);
        } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch records' },
            { status: 500 }
        );
    }
}

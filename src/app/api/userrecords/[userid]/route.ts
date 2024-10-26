import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request: Request, props: { params: Promise<{ userid: string }> }) {
    const params = await props.params;
    try {
        const { userid } = params;
        const records = await pool.query("SELECT * FROM users WHERE user_id = $1", [userid]);
        return NextResponse.json(records.rows[0]);
        } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch records' },
            { status: 500 }
        );
    }
}

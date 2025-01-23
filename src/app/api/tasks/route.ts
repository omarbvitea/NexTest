import dbpool from '@/app/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const [rows] = await dbpool.query('SELECT * FROM tasks')
    return NextResponse.json(rows)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Error al obtener las tareas' },
      { status: 500 }
    )
  }
}

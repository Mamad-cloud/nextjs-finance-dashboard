import { db } from '@vercel/postgres'

export const dynamic = 'force-dynamic' // defaults to auto 
export async function GET(req: Request) {
    const { searchParams } = new URL( req.url )
    const id = searchParams.get('id')

    const client = await db.connect() // not sure if this is the right way of doing it
    const res = await client.sql`SELECT ${id} FROM users`;
    
    return Response.json( { res: res.rows })

}
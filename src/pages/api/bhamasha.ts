// src/pages/api/bhamasha.ts
import type { APIRoute } from 'astro';
import { jsonResponse } from '../../lib/db';

export const GET: APIRoute = async ({ locals }) => {
  try {
    // Access D1 via Cloudflare locals
    const db = (locals as any).runtime.env.DB;
    
    // Fetch all records
    const { results } = await db.prepare('SELECT * FROM bhamasha ORDER BY amount DESC').all();
    
    return jsonResponse({ success: true, data: results });
  } catch (error) {
    return jsonResponse({ success: false, error: "Database error" }, 500);
  }
};
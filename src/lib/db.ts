// src/lib/db.ts
export interface Env {
  DB: D1Database;
  CLOUDINARY_URL: string;
  TURNSTILE_SECRET: string;
}

// Helper to standardise API responses
export function jsonResponse(data: any, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}
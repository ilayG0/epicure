import { about } from "@/app/api/mocDB"; 

export async function GET() {
  return Response.json(about);
}
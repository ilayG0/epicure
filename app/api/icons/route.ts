import { icons } from "@/app/api/mocDB"; 

export async function GET() {
  return Response.json(icons);
}
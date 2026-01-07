import { signatureDishes } from "@/app/api/mocDB"; 

export async function GET() {
  return Response.json(signatureDishes);
}
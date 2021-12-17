import bcrypt from "bcryptjs";

export default async function generateHash(password: string) {
   const hash = await bcrypt.hash(password, 5);
   return hash;
}

import { cookies } from "next/headers";
import decode from "jwt-decode";

interface User {
  sub: string;
  name: string;
  avatarUrl: string;
}

export function getUser() {
  const token = cookies().get("token")?.value;

  if (!token) {
    throw new Error("No token found");
  }

  const user: User = decode(token);

  return user;
}

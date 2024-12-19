"use server";

import { redirect } from "next/navigation";

export async function redirectTo(url: string) {
  redirect(url);
}

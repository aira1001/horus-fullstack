import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export default async function AuthButton() {

  const signOut = async () => {
    "use server";
    cookies().delete("nextjs")

    return redirect("/login");
  };

  return (

    <div className="flex items-center gap-4">
      {/* Hey, {user.email}! */}
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
    
  )

}

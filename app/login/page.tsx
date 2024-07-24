import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import bcrypt from 'bcrypt';
import { serialize } from 'cookie'
import { NextApiResponse } from "next";
import { cookies } from "next/headers";


export default function Login({
  searchParams,
  res
}: {
  searchParams: { message: string };
  res: NextApiResponse
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const user = await supabase.from('users').select("*").filter("email", "eq", email)
    if (user.data?.length != 0) {
      const passwordMatch = await bcrypt.compare(password, user.data?.[0].password)

      if (passwordMatch) {
        const encryptedSessionData = {
          email: bcrypt.hash(user?.data?.[0].email, 10),
          username: bcrypt.hash(user?.data?.[0].username, 10)
        }
        const cookie = serialize('session', JSON.stringify(encryptedSessionData), {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 60 * 60 * 24 * 7, // One week
          path: '/',
        })
        cookies().set({
          name: 'nextjs',
          value: JSON.stringify(encryptedSessionData),
          httpOnly: true,
          path: '/',
          maxAge: 60 * 60 * 24 * 7, // One week,
        })
        return redirect("/protected")
      } else {
        return redirect("/login?message=Password Wrong");

      }
    } else {
      return redirect("/login?message=Email not found");
    }
  };



  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <form className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <SubmitButton
          formAction={signIn}
          className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing In..."
        >
          Sign In
        </SubmitButton>
        <p>Don't have an account? <a href="/sign-up" className="text-blue-500 hover:underline">Sign Up</a></p>

        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}

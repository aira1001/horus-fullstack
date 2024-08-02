import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function ProtectedPage() {
  const user = cookies().get("username");

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <div className=" bg-purple-950 flex gap-7 ">
          <div className="basis-1/4 items-center justify-center flex">
            <div className="cursor-pointer border rounded-full bg-[url('/avatar-man.png')] bg-cover w-14 h-14 mx-4" />
            <h1 className="font-semibold text-xl">{user?.value}</h1>
          </div>
          <h1 className="py-6 font-bold  flex justify-center text-2xl basis-1/2">
            List Voucher
          </h1>
          <div className="basis-1/4 place-content-center">
            <div className="justify-center items-center px-5 py-3 flex rounded-md no-underline hover:bg-btn-background-hover border lg:mx-36 cursor-pointer mx-8">
              History
            </div>
          </div>
        </div>

        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <DeployButton />
            <AuthButton />
          </div>
        </nav>
      </div>

      <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
        <Header />
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          <FetchDataSteps />
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  );
}

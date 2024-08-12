import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function ProtectedPage() {
  const user = cookies().get("username");
  
  const supabase = createClient();
  
  const {data, error} = await supabase.from("voucher").select("*, categories (name)")
  if (error){
    console.log(error)
  }
  
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="bg-purple-950 w-full">
        <div className="container mx-auto flex gap-7 w-full justify-between">
          <div className="items-center justify-center flex">
            <div className="cursor-pointer border rounded-full bg-[url('/avatar-man.png')] bg-cover w-11 h-11 mx-4" />
            <h1 className="font-semibold">{user?.value}</h1>
          </div>
          <h1 className="py-6 font-bold  flex justify-center text-xl text-center items-center">
            List Voucher
          </h1>
          <div className="justify-center items-center py-2 px-4 flex m-7 rounded-md  hover:bg-purple-400 border cursor-pointer ">
            History
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        {data?.map((voucher) => (
          <div className="border border-gray-300 rounded-md p-4 m-4 lg:col-span-1 flex gap-4 flex-col">
            <h1 className="font-bold">{voucher.nama}</h1>
            <h1>{voucher.categories.name}</h1>
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Claim</button>

          </div>
        ))}
        
      </div>

      {/* <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <DeployButton />
          <AuthButton />
        </div>
      </nav> */}

      {/* <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
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
      </footer> */}
    </div>
  );
}

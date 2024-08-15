import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { CardComponent } from "@/components/Card";

export default async function ProtectedPage() {
  const user = cookies().get("username");

  const supabase = createClient();

  const { data, error } = await supabase.from("voucher").select("*, categories (name)")
  if (error) {
    console.log(error)
  }

  return (
    <div className="flex mt-40 pr-16 pb-10">
      <div className="grid grid-cols-3 gap-10">
        {data?.map((voucher) => (
          <div className="col-span-1">
            <CardComponent category={voucher.categories.name} nama={voucher.nama} className="rounded-lg overflow-hidden"/>

            {/* <h1 className="font-bold">{voucher.nama}</h1>
            <h1>{voucher.categories.name}</h1>
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Claim</button> */}

          </div>

        ))}

      </div>
    </div>
  );
}

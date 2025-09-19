"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Shell } from "@/components/Sidebar";
import { AssetManagementHeader } from "@/components/AssetManagementHeader";
import { AssetFilters } from "@/components/AssetsFilter";
import { AssetsTable } from "@/components/AssetsTable";

export default async function AssetsPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <Shell>
      <div className="flex flex-col gap-6 p-6">
        <AssetManagementHeader />
        <AssetFilters />
        <AssetsTable />
      </div>
    </Shell>
  );
}

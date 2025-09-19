"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Shell } from "@/components/Sidebar"; // keep your existing Shell
import AssetManagementClient from "./AssetManagementClient";

export default async function AssetsPage() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <Shell>
      <AssetManagementClient />
    </Shell>
  );
}

"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Shell } from "@/app/components/Sidebar";
import { MetricsCards } from "./components/MetricsCards";
import { AssetStatusBoard } from "./components/AssetStatusBoard";
import { Notifications } from "./components/Notifications";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }
  return (
    <Shell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
        </div>

        <MetricsCards />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AssetStatusBoard />
          <Notifications />
        </div>
      </div>
    </Shell>
  );
}

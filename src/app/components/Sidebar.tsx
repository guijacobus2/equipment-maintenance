"use client";

import type * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Boxes,
  CalendarClock,
  ClipboardList,
  Gauge,
  Receipt,
  Users,
  Smartphone,
  Search,
  Settings,
  Bot,
  Bell,
  User,
} from "lucide-react";

/** Unified TopNav + Sidebar
 * - Single brand in TopNav
 * - Sidebar is a clean rail (no logo header)
 */

const sideItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Asset Management", href: "/assets", icon: Boxes },
  { name: "Maintenance Scheduling", href: "/maintenance", icon: CalendarClock },
  { name: "Work Orders", href: "/work-orders", icon: ClipboardList },
  { name: "Predictive Reports", href: "/reports", icon: Gauge },
  { name: "Cost Control", href: "/costs", icon: Receipt },
  { name: "Team & Roles", href: "/team", icon: Users },
  { name: "Mobile Companion", href: "/mobile", icon: Smartphone },
] as const;

export function Sidebar() {
  const pathname = usePathname() || "/";

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-gray-200 bg-gray-50 overflow-y-auto">
      <div className="flex h-full flex-col p-4">
        <nav className="space-y-1">
          {sideItems.map(({ name, href, icon: Icon }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                ].join(" ")}
              >
                <Icon
                  className={[
                    "h-5 w-5",
                    active
                      ? "text-blue-600"
                      : "text-gray-400 group-hover:text-gray-600",
                  ].join(" ")}
                />
                <span className="truncate">{name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer actions */}
        <div className="mt-auto space-y-2">
          <Link
            href="/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <Settings className="h-5 w-5 text-gray-400" />
            <span>Settings</span>
          </Link>

          <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm">
            <Bot className="h-5 w-5 text-blue-600" />
            <div className="flex flex-col">
              <span className="font-medium text-gray-900">OptiMaintain AI</span>
              <span className="text-xs text-gray-500">Predictive insights</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

const topTabs = [
  { name: "Dashboard", href: "/" },
  { name: "Assets", href: "/assets" },
  { name: "Maintenance", href: "/maintenance" },
  { name: "Work Orders", href: "/work-orders" },
  { name: "Reports", href: "/reports" },
  { name: "Costs", href: "/costs" },
  { name: "Team", href: "/team" },
] as const;

export function TopNav() {
  const pathname = usePathname() || "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-gray-200 bg-white">
      <div className="flex h-full items-center px-6">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-blue-600" />
          <span className="text-lg font-semibold text-blue-700">logo</span>
        </Link>

        <nav className="flex items-center justify-center flex-1">
          <div className="flex items-center gap-8">
            {topTabs.map((t) => {
              const active =
                t.href === "/" ? pathname === "/" : pathname.startsWith(t.href);
              return (
                <Link
                  key={t.href}
                  href={t.href}
                  className={[
                    "px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-blue-700 border-b-2 border-blue-700"
                      : "text-gray-600 hover:text-gray-900",
                  ].join(" ")}
                >
                  {t.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right side - Search and user */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search assets, work orders..."
              className="w-80 rounded-lg border border-gray-200 bg-white pl-10 pr-4 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Bell className="h-5 w-5" />
          </button>

          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 mt-16 p-6">{children}</main>
      </div>
    </div>
  );
}

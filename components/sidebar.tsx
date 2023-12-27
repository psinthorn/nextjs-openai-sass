"use client"

import Link from "next/link";
import Image from "next/image"
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const monsterrat = Montserrat({ 
  weight: "600",
  subsets: ["latin"]
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500"
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-sky-500"
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-sky-500"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-sky-500"
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-sky-500"
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-sky-500"
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-sky-500"
  },
]

function Sidebar() {
  const pathName = usePathname();
  return (
    <div className="flex flex-col h-full space-y-4 py-4 bg-slate-800 text-white">
      <div className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-16 h-16 mr-4">
            <Image
              fill
              alt="Logo"
              src="/logo.png"
             />
          </div>

          {/* Logo name in text format */}
          {/* <h1 className={cn("text-4xl font-bold", monsterrat)}>
            F2X
          </h1> */}
        </Link>
        <div className="space-y-1">
            {routes.map((route) => (
              <Link 
                key={route.href}
                href={route.href}
                className={cn("flex group w-full p-3 justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathName === route.href ? "text-white bg-white/10" :  "text-zinc-400"
              )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("w-5 h-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Sidebar;
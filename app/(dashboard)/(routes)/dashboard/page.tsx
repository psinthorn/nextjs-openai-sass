"use client"

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, Image, MessageSquare, Music, Video } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-sky-500",
    bgColor: "bg-slate-800/10"
  },
  {
    label: "Image Generation",
    icon: Image,
    href: "/image",
    color: "text-sky-500",
    bgColor: "bg-slate-800/10"
  },
  {
    label: "Video Generation",
    icon: Video,
    href: "/video",
    color: "text-sky-500",
    bgColor: "bg-slate-800/10"
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-sky-500",
    bgColor: "bg-slate-800/10"
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-sky-500",
    bgColor: "bg-slate-800/10"
  },
]

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div className="">
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl text-center font-bold">
          How to integrate AI Power To Your Applications  
        </h2>
        <p className="text-sm text-center text-muted-foreground md:text-lg" >
          Explore and get your AI experience
          </p>
      </div>
      <div className="px-4 space-y-4 md:px-20 lg:px-32">
          {tools.map((tool) =>(
              <Card
                onClick={() => router.push(tool.href)}
                key={tool.href}
                className="flex items-center justify-between p-4 border-black/5 cursor-pointer transition hover:shadow-md"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("w-fit p-2 rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-8 h-8", tool.color)} />
                  </div>
                  <div className="font-semibold">
                    {tool.label}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5"/>
              </Card>
          ))}
      </div>
    </div>
  )
}

export default DashboardPage;

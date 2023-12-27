"use client"



import { cn } from "@/lib/utils"
import { useAuth } from "@clerk/nextjs"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"


const font = Montserrat({
  weight: "600",
  subsets: ["latin"]
})

const NavbarLandingPage :any = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="flex w-full items-center justify-between bg-transparent p-4"> 
        <Link href="/" className="flex items-center">
          <div className="flex w-12 h-12 relative mr-4">
            <Image
              alt="Logo"
              fill
              src="/logo-pan.png"
            />
          </div>
          {/* <h1 className={cn("text-3xl font-bold text-white", font.className)}>F2x</h1> */}
        </Link>
        <div className="flex items-center gap-x-2">
          <Link href={ isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button variant="outline" className="rounded-full">
              Get Started
            </Button>
          </Link>
        </div>
    </nav>
  )
}

export default NavbarLandingPage
import Image from "next/image"


export const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full p-8 rounded-lg bg-muted">
      <div className="flex flex-col h-full items-center justify-center gap-y-4">
        <div className="w-24 h-24 relative animate-spin">
          <Image 
            alt="F2 Logo"
            fill
            src="/logo.png"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Generating...
        </p>
      </div>
    </div>
  )
}

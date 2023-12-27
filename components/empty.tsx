import Image from "next/image";

interface EmptyProps {
  label: string,
}

export const Empty = ({ label }: EmptyProps ) => {
  return (
    <div className="flex flex-col h-full items-center justify-center p-20 ">
      <div className="relative h-72 w-72">
        <Image 
          alt="Empty"
          fill
          src="/mobile-box-03.png"
        />
      </div>
      <p className="text-center text-sm text-muted-foreground p-4">
        {label}
      </p>
      
    </div>
  )
};
  

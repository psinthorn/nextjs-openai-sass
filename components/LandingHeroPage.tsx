'use client'

import Link from 'next/link';
import { useAuth } from "@clerk/nextjs"
import TypewriterComponent from 'typewriter-effect'
import { Button } from './ui/button';

const LandingHeroPage = () => {

  const isSignedIn = useAuth();

  return (
    <div className='space-y-5 py-36 text-slate-700 font-bold text-center'>
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Integrate AI Power to your Application</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          <TypewriterComponent 
            options={{
              strings: [
                "Chatbot.",
                "Image Creation.",
                "Music Creation.",
                "Video Creation.",
                "Code Generator.",
              ],
              autoStart: true,
              loop: true
            }}
          />   
        </div>
        <div className="text-sm md:text-xl font-light text-zinc-600">
        &quot; Bring your imagination to real with AI &quot;
        </div>
        <div>
          <Link href={ isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button variant='default' className='md:text-lg p-4 md:p-6 rounded-full font-semibold'>
              Try now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default LandingHeroPage
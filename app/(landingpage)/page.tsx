import LandingContentPage from '@/components/LandingContentPage';
import LandingHeroPage from '@/components/LandingHeroPage';
import NavbarLandingPage from '@/components/NavbarLandingPage';
import { Button } from '@/components/ui/button'
import Link  from 'next/link';


export default function LandingPage() {
  return (
    <div className="h-full">
      <NavbarLandingPage />
      <LandingHeroPage/>
      <LandingContentPage />
    </div>
    
  )
}

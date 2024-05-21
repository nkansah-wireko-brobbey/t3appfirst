import  Link  from "next/link";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

const TopNav = () => {
  return (
    <div>
        <nav className="top-nav">
          <div>
            Gallery
          </div>
          <div>

           <SignedOut>
            <SignInButton/>
           </SignedOut>
           <SignedIn>
            <UserButton/>
           </SignedIn>
          </div>
        </nav>
    </div>
  )
}

export default TopNav
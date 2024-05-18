import  Link  from "next/link";
const TopNav = () => {
  return (
    <div>
        <nav className="top-nav">
           <Link href="" className="font-semibold">
                    Gallery
            </Link>
           <Link href="" className="font-semibold">
                    Logout
            </Link>
        </nav>
    </div>
  )
}

export default TopNav
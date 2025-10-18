import Link from "next/link"
import Image from "next/image"
import ThemeSwitcher from "./ThemeSwitcher"

function Header() {
  return (
        <header className="header">
          <nav>
            <div className="logo"><Link href="/"><Image src="https://avatar.iran.liara.run/public" alt="image" width={30} height={30}/></Link></div>
                      <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/contact">Contact</Link>
          </div>
<ThemeSwitcher/>
          </nav>


        </header>
  )
}

export default Header

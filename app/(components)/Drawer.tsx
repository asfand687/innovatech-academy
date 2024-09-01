import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function Drawer({ showDrawer, toggleDrawer }: { showDrawer: boolean, toggleDrawer: Dispatch<SetStateAction<boolean>>}) {
  return (
    <div className={`bg-white text-black transition-all ease-in-out duration-300 fixed top-20 ${showDrawer ? "right-0 ": "-right-full"} w-80 shadow-xl h-screen z-30`}>
      <div className="flex flex-col gap-8 p-4 text-xl">
        <Link href="/" title="" legacyBehavior>
          <a onClick={() => toggleDrawer(false)} className="transition-all duration-200 hover:text-opacity-80">Home</a>
        </Link>
        <Link href="#" title="" legacyBehavior>
          <a onClick={() => toggleDrawer(false)} className="transition-all duration-200 hover:text-opacity-80">Courses</a>
        </Link>
        <Link href="/verification" title="" legacyBehavior>
          <a onClick={() => toggleDrawer(false)} className="transition-all duration-200 hover:text-opacity-80">Verification</a>
        </Link>
      </div>
    </div>
  )
}
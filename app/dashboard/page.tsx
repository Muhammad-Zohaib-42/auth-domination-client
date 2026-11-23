import { BriefcaseBusiness, Camera } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import defaultAvatar from "../../assets/download.png"
import Sidebar from "@/components/Sidebar"

const Page = () => {
  return (
    <div className="flex flex-col h-dvh">
      <header className="flex items-center justify-between px-5 py-2 border-b border-slate-200">
        <Link href="/" className="flex items-center gap-1">
          <BriefcaseBusiness />
          <span className="text-xl font-bold">ApplyFlow</span>
        </Link>
        <button className="h-12 w-12 rounded-full bg-slate-200 relative overflow-hidden">
          <Image alt="default avatar image" src={defaultAvatar} fill className="object-cover" />
        </button>
      </header>
      <div className="grow px-5 flex">
        <Sidebar />
        <main className="grow border-l border-slate-200"></main>
      </div>
    </div>
  )
}

export default Page
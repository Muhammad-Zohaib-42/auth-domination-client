import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import defaultAvatar from "../assets/download.png"
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-dvh">
      <header className="flex items-center justify-between px-5 py-2">
        <Link href="/" className="flex items-center gap-1">
          <BriefcaseBusiness />
          <span className="text-xl font-bold">ApplyFlow</span>
        </Link>
        <Link href="/dashboard" className="h-12 w-12 rounded-full bg-slate-200 relative overflow-hidden">
          <Image alt="default avatar image" src={defaultAvatar} fill className="object-cover" />
        </Link>
      </header>
      <main className="grow px-5 flex items-center justify-center">
        <div className="w-[95%] max-w-187.5 mx-auto">
          <p className="bg-indigo-50 px-3 py-0.5 rounded-3xl text-sm w-fit">Your Career Journey, Organized</p>
          <h1 className="text-3xl font-semibold mt-5 mb-3">Take Control of Your Job Search with ApplyFlow.</h1>
          <p>Track your job applications, manage interview schedules, and keep all your application updates in one place. Stay organized, never miss an opportunity, and move closer to your next career goal.</p>
          <div className="mt-4">
            <Link href="/dashboard" className="flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-800 focus:bg-indigo-800 text-slate-50 rounded-full cursor-pointer transition-all w-fit"><span>Get Started Free</span><span><ArrowRight /></span></Link>
          </div>
        </div>
      </main>
    </div>
  );
}

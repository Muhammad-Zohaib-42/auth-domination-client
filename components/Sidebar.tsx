"use client"

import { Briefcase, CalendarDays, LayoutDashboard, ListChecks, LogOut, StickyNote, UserRound } from "lucide-react"
import { useState } from "react"

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <aside className="flex flex-col justify-between py-5 pr-3 w-60">
          <div>
            <div className="pb-4 border-b border-slate-200">
              <h3 className="text-sm font-semibold mb-2">WORKSPACE</h3>
              <ul className="space-y-1">
                <li>
                  <button onClick={() => setActiveTab("overview")} className={`flex items-center gap-2 py-2 rounded-md transition-all w-full cursor-pointer ${activeTab == "overview" ? "bg-slate-200 px-3" : "px-1 bg-transparent hover:bg-slate-100"}`}>
                    <LayoutDashboard size={18} />
                    <span>Overview</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("applications")} className={`flex items-center gap-2 py-2 rounded-md transition-all w-full cursor-pointer ${activeTab == "applications" ? "bg-slate-200 px-3" : "px-1 bg-transparent hover:bg-slate-100"}`}>
                    <Briefcase size={18} />
                    <span>My Applications</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("interviews")} className={`flex items-center gap-2 py-2 rounded-md transition-all w-full cursor-pointer ${activeTab == "interviews" ? "bg-slate-200 px-3" : "px-1 bg-transparent hover:bg-slate-100"}`}>
                    <CalendarDays size={18} />
                    <span>Interviews</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("tasks")} className={`flex items-center gap-2 py-2 rounded-md transition-all w-full cursor-pointer ${activeTab == "tasks" ? "bg-slate-200 px-3" : "px-1 bg-transparent hover:bg-slate-100"}`}>
                    <ListChecks size={18} />
                    <span>Tasks & Follow-ups</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("notes")} className={`flex items-center gap-2 py-2 rounded-md transition-all w-full cursor-pointer ${activeTab == "notes" ? "bg-slate-200 px-3" : "px-1 bg-transparent hover:bg-slate-100"}`}>
                    <StickyNote size={18} />
                    <span>Notes</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <h3 className="text-sm font-semibold mb-2">PREFERENCES</h3>
              <ul className="space-y-1">
                <li>
                  <button onClick={() => setActiveTab("profile")} className={`flex items-center gap-2 py-2 rounded-md transition-all w-full cursor-pointer ${activeTab == "profile" ? "bg-slate-200 px-3" : "px-1 bg-transparent hover:bg-slate-100"}`}>
                    <UserRound size={18} />
                    <span>My Profile</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button className="flex items-center gap-2 px-3 py-2 rounded-md bg-red-100 text-red-500 hover:bg-red-200 transition-all w-full cursor-pointer">
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </aside>
  )
}

export default Sidebar
import Link from "next/link"

const RegisterForm = () => {
  return (
    <form className="max-w-75 w-[95%] mx-auto flex flex-col gap-2">
      <div className="flex flex-col gap-0.5">
        <label className="text-slate-600" htmlFor="name">Name</label>
        <input className="border border-slate-200 rounded px-3 py-1 outline-none focus:border-indigo-300" type="text" id="name" />
      </div>
      <div className="flex flex-col gap-0.5">
        <label className="text-slate-600" htmlFor="username">Username</label>
        <input className="border border-slate-200 rounded px-3 py-1 outline-none focus:border-indigo-300" type="text" id="username" />
      </div>
      <div className="flex flex-col gap-0.5">
        <label className="text-slate-600" htmlFor="email">Email</label>
        <input className="border border-slate-200 rounded px-3 py-1 outline-none focus:border-indigo-300" type="email" id="email" />
      </div>
      <div className="flex flex-col gap-0.5">
        <label className="text-slate-600" htmlFor="password">Password</label>
        <input className="border border-slate-200 rounded px-3 py-1 outline-none focus:border-indigo-300" type="password" id="password" />
      </div>
      <button className="bg-indigo-600 text-slate-50 px-2 py-1.5 rounded my-1 cursor-pointer transition-all hover:bg-indigo-700 outline-none focus:bg-indigo-900">Register</button>
      <p className="text-sm text-slate-600">Already have an account ! <Link className="text-indigo-600 hover:font-medium hover:underline outline-none focus:font-medium focus:underline" href="/login">Login</Link></p>
    </form>
  )
}

export default RegisterForm
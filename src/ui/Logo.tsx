import { Link } from 'react-router'

export const Logo = () => {
  return (
    <div className="mb-10 cursor-pointer text-slate-700 md:mb-14">
      <Link to="/" className="flex items-center justify-center gap-2">
        <img src="./logo.svg" alt="Order Hub logo" className="w-10 md:w-16" />
        <div className="hidden md:block">
          <h1 className="text-2xl font-medium uppercase">Order Hub</h1>
          <p className="text-sm">Manage. Track. Deliver.</p>
        </div>
      </Link>
    </div>
  )
}

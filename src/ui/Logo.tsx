export const Logo = () => {
  return (
    <div className="mb-10 flex cursor-pointer items-center justify-center gap-2 text-slate-700 md:mb-14">
      <img src="./logo.svg" alt="Order Hub logo" className="w-10 md:w-16" />
      <div className="hidden md:block">
        <h1 className="text-2xl font-medium uppercase">Order Hub</h1>
        <p className="text-sm">Manage. Track. Deliver.</p>
      </div>
    </div>
  )
}

export const Logo = () => {
  return (
    <div className="flex cursor-pointer items-center justify-center gap-2 text-slate-700">
      <img src="./logo.svg" alt="Order Hub logo" className="w-20" />
      <div className="hidden sm:block">
        <h1 className="text-2xl font-medium uppercase">Order Hub</h1>
        <p>Manage. Track. Deliver.</p>
      </div>
    </div>
  )
}

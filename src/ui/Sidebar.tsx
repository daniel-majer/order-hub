import { Logo } from './Logo'
import { Nav } from './Nav'

const Sidebar = () => {
  return (
    <aside className="col-span-1 row-span-full bg-slate-300 px-5 py-10">
      <Logo />
      <Nav />
    </aside>
  )
}
export default Sidebar

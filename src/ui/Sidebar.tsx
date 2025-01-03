import { Logo } from './Logo'
import { Nav } from './Nav'

const Sidebar = () => {
  return (
    <aside className="col-span-1 row-span-full bg-white py-10 md:px-5">
      <Logo />
      <Nav />
    </aside>
  )
}
export default Sidebar

import { Outlet } from 'react-router'
import Sidebar from './Sidebar'
import { Header } from './Header'

export const AppLayout = () => {
  return (
    <div>
      <p>AppLayout</p>

      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

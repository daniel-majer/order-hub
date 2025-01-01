import { Outlet } from 'react-router'
import Sidebar from './Sidebar'
import { Header } from './Header'

export const AppLayout = () => {
  return (
    <div className="grid h-screen grid-cols-[100px_1fr] grid-rows-[auto_1fr] sm:grid-cols-[300px_1fr]">
      <Header />
      <Sidebar />
      <main className="bg-slate-700">
        <Outlet />
      </main>
    </div>
  )
}

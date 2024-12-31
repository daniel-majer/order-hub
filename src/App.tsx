import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { AppLayout } from './ui/AppLayout'
import { Analytics } from './pages/Analytics'
import { Products } from './pages/Products'
import { Customers } from './pages/Customers'
import { Users } from './pages/Users'
import { Settings } from './pages/Settings'
import { User } from './pages/User'
import { Orders } from './pages/Orders'
import { Login } from './pages/Login'
import { PageNotFound } from './pages/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="analytics" />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="customers" element={<Customers />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="user" element={<User />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import {
  ChartNoAxesCombined,
  IdCard,
  PackageOpen,
  Settings,
  ShoppingCart,
  Users,
} from 'lucide-react'

import { StyledNavLink } from './StyledNavLink'

const liStyles = 'font-medium text-xl '
const iconStyles =
  'stroke-2 text-slate-400 transition-all duration-300 group-hover:text-indigo-500 group-[.text-slate-800]:stroke-2 group-[.text-slate-800]:text-indigo-600'

export const Nav = () => {
  return (
    <ul className="text-slate-500">
      <li className={liStyles}>
        <StyledNavLink to="analytics" label="Analytics">
          <ChartNoAxesCombined className={iconStyles} />
        </StyledNavLink>
      </li>
      <li className={liStyles}>
        <StyledNavLink to="orders" label="Orders">
          <ShoppingCart className={iconStyles} />
        </StyledNavLink>
      </li>
      <li className={liStyles}>
        <StyledNavLink to="products" label="Products">
          <PackageOpen className={iconStyles} />
        </StyledNavLink>
      </li>
      <li className={liStyles}>
        <StyledNavLink to="customers" label="Customers">
          <IdCard className={iconStyles} />
        </StyledNavLink>
      </li>
      <li className={liStyles}>
        <StyledNavLink to="users" label="Users">
          <Users className={iconStyles} />
        </StyledNavLink>
      </li>
      <li className={liStyles}>
        <StyledNavLink to="settings" label="Settings">
          <Settings className={iconStyles} />
        </StyledNavLink>
      </li>
    </ul>
  )
}

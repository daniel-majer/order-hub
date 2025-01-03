import { type ReactNode } from 'react'
import { NavLink } from 'react-router'

type Props = {
  to: string
  label: string
  children: ReactNode
}

export const StyledNavLink = ({ to, label, children }: Props) => {
  return (
    <NavLink
      to={`/${to}`}
      className={({ isActive }) =>
        `group flex items-center justify-center space-x-3 p-2 rounded-lg md:justify-normal ${
          isActive ? 'bg-gray-100 text-slate-800' : 'hover:text-slate-800'
        }`
      }
    >
      {children}
      <span className="hidden leading-5 transition-all duration-300 md:inline-block">
        {label}
      </span>
    </NavLink>
  )
}

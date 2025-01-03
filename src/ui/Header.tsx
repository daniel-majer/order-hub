import { LogOut, Moon, User } from 'lucide-react'

const iconStyles =
  'cursor-pointer rounded-md p-1 transition-all duration-200 outline-none outline-offset-0  hover:bg-gray-200 focus:outline focus:outline-indigo-600'

export const Header = () => {
  return (
    <header className="col-start-2 col-end-4 flex p-1 sm:p-2 md:p-4">
      <div className="ml-auto flex items-center gap-4">
        <div className="flex items-center">
          <div className="inline-block h-8 w-8 rounded-full border border-indigo-600 sm:h-10 sm:w-10"></div>
          <span className="ml-1 text-sm sm:text-base">John Doe</span>
        </div>
        <div className="space-x-2 text-indigo-600">
          <button className={iconStyles}>
            <User strokeWidth={2} className="w-5 sm:w-6" />
          </button>
          <button className={iconStyles}>
            <Moon strokeWidth={2} className="w-5 sm:w-6" />
          </button>
          <button className={iconStyles}>
            <LogOut strokeWidth={2} className="w-5 sm:w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

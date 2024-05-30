import { Link } from 'react-router-dom'
import './navbar.css'
import { DropDown } from '../dropdown/DropDown'

export const NavbarP = () => {
  return <>
    <nav className="px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 rounded bg-[#111827] text-gray-200 border-b-[1px]">
      <div className="mx-auto flex flex-wrap items-center justify-between">
        <a className="flex items-center" href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Graph designer</span>
        </a>
        <button data-testid="flowbite-navbar-toggle" className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden">
          <span className="sr-only">Open main menu</span>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" className="h-6 w-6 shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </button>
        <div data-testid="flowbite-navbar-collapse" className="w-full md:block md:w-auto hidden navbar-collapse">
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li>
              <Link className='block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-white text-gray-200 text-base hover:text-slate-400 md:hover:text-slate-400' to={"dashboard-create"}>
                Centro de datos
              </Link>
            </li>
            <li>
              <DropDown id={"dropdown"} header={"Dashboard"}>
                <li>
                  <a href="/dashboard-create" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Crear dashboard</a>
                </li>
                <li>
                  <a href="/dashboard-list" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Listar dashboards</a>
                </li>
                <li>
                  <a href="/sign-out" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                </li>
              </DropDown>
            </li>
            <li>
              <a className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-white text-gray-200 text-base hover:text-slate-400 md:hover:text-slate-400" href="#">Sign out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </>

}

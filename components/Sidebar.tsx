import Link from 'next/link'
import { Home, List, UserPlus, BarChart2 } from 'lucide-react'

const Sidebar = () => {
  return (
    <nav className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <h1 className="text-2xl font-semibold text-center">LeadDrive</h1>
      <ul>
        <li>
          <Link href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <Home className="inline-block mr-2" size={20} />
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/leads" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <List className="inline-block mr-2" size={20} />
            Lead Listing
          </Link>
        </li>
        <li>
          <Link href="/lead-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <UserPlus className="inline-block mr-2" size={20} />
            Lead Management
          </Link>
        </li>
        <li>
          <Link href="/analytics" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <BarChart2 className="inline-block mr-2" size={20} />
            Analytics
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar


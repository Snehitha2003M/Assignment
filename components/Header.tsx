'use client'

import { Bell, Search, User } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchQuery)
  }

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="flex items-center justify-between">
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            placeholder="Search leads..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="ml-2 text-gray-500">
            <Search size={20} />
            <span className="sr-only">Search</span>
          </button>
        </form>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500" aria-label="Notifications">
            <Bell size={20} />
          </button>
          <button className="text-gray-500" aria-label="User profile">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header


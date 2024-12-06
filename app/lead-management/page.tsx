'use client'

import { useState } from 'react'

interface NewLead {
  name: string;
  email: string;
  phone: string;
  source: string;
}

export default function LeadManagement() {
  const [newLead, setNewLead] = useState<NewLead>({
    name: '',
    email: '',
    phone: '',
    source: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewLead({ ...newLead, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the new lead data to your backend
    console.log('New lead:', newLead)
    alert('New lead added!')
    setNewLead({ name: '', email: '', phone: '', source: '' })
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-semibold mb-4">Lead Management</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newLead.name}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={newLead.email}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={newLead.phone}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="source" className="block mb-1">Source:</label>
          <input
            type="text"
            id="source"
            name="source"
            value={newLead.source}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add New Lead
        </button>
      </form>
    </div>
  )
}


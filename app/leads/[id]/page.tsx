'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: string;
  status: string;
  notes: string;
}

export default function LeadDetails() {
  const { id } = useParams()
  const [lead, setLead] = useState<Lead>({
    id: id as string,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    source: 'Facebook',
    status: 'New',
    notes: '',
  })

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLead({ ...lead, status: e.target.value })
  }

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLead({ ...lead, notes: e.target.value })
  }

  const handleSave = () => {
    // Here you would typically save the updated lead information to your backend
    console.log('Saving lead:', lead)
    alert('Lead information saved!')
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-semibold mb-4">Lead Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p><strong>Name:</strong> {lead.name}</p>
          <p><strong>Email:</strong> {lead.email}</p>
          <p><strong>Phone:</strong> {lead.phone}</p>
          <p><strong>Source:</strong> {lead.source}</p>
        </div>
        <div>
          <label className="block mb-2">
            <strong>Status:</strong>
            <select
              value={lead.status}
              onChange={handleStatusChange}
              className="ml-2 border rounded p-1"
            >
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Interested">Interested</option>
              <option value="Not Interested">Not Interested</option>
            </select>
          </label>
          <label className="block mt-4">
            <strong>Notes:</strong>
            <textarea
              value={lead.notes}
              onChange={handleNotesChange}
              className="w-full h-32 mt-2 border rounded p-2"
              placeholder="Add notes here..."
            />
          </label>
        </div>
      </div>
      <button
        onClick={handleSave}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save Changes
      </button>
    </div>
  )
}


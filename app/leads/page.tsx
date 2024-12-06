import Link from 'next/link'

interface Lead {
  id: number;
  name: string;
  source: string;
  status: string;
  date: string;
}

const leads: Lead[] = [
  { id: 1, name: 'John Doe', source: 'Facebook', status: 'New', date: '2023-05-15' },
  { id: 2, name: 'Jane Smith', source: 'Website', status: 'Contacted', date: '2023-05-14' },
  { id: 3, name: 'Bob Johnson', source: 'Google', status: 'Interested', date: '2023-05-13' },
  // Add more sample leads here
]

export default function LeadListing() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-semibold mb-4">Lead Listing</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Source</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b">
                <td className="py-2 px-4">{lead.name}</td>
                <td className="py-2 px-4">{lead.source}</td>
                <td className="py-2 px-4">{lead.status}</td>
                <td className="py-2 px-4">{lead.date}</td>
                <td className="py-2 px-4">
                  <Link href={`/leads/${lead.id}`} className="text-blue-500 hover:underline">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


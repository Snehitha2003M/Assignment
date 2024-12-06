import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const DynamicBarChart = dynamic(() => import('../components/Header'), { ssr: false })

interface LeadData {
  name: string;
  newLeads: number;
  converted: number;
}

const leadData: LeadData[] = [
  { name: 'Jan', newLeads: 65, converted: 40 },
  { name: 'Feb', newLeads: 59, converted: 30 },
  { name: 'Mar', newLeads: 80, converted: 50 },
  { name: 'Apr', newLeads: 81, converted: 55 },
  { name: 'May', newLeads: 56, converted: 35 },
  { name: 'Jun', newLeads: 55, converted: 30 },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Total Leads</h2>
            <p className="text-3xl font-bold">1,234</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Converted Leads</h2>
            <p className="text-3xl font-bold">567</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Conversion Rate</h2>
            <p className="text-3xl font-bold">45.9%</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Lead Performance</h2>
        <Suspense fallback={<div>Loading chart...</div>}>
          <DynamicBarChart data={leadData} />
        </Suspense>
      </div>
    </div>
  )
}


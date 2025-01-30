import React from 'react'

const Metriccard = () => {
  return (
    <div>
       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        {[
          { title: "Total Sales", value: "$150K", bg: "bg-blue-500" },
          { title: "New Users", value: "3,245", bg: "bg-green-500" },
          { title: "Pending Orders", value: "128", bg: "bg-yellow-500" },
          { title: "Inventory Value", value: "$75K", bg: "bg-red-500" },
        ].map((item, idx) => (
          <div key={idx} className={`${item.bg} text-white p-4 rounded-xl shadow-lg`}>
            <h2 className="text-sm">{item.title}</h2>
            <p className="text-3xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Metriccard

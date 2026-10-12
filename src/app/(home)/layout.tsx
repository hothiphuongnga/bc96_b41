import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function layout({children}: Props) {
  return (
    <div>
         <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 shadow-sm">
            {/* LEFT */}
            <div>
                <h1 className="text-xl font-bold text-gray-800">Shoeshop</h1>
                <p className="text-sm text-gray-500">Website bán hàng demo</p>
            </div>

            {/* RIGHT */}
            
            <div className="flex items-center gap-4">
               
                {/* Search */}
                <div className="hidden md:block">
                    <input type="text" placeholder="Tìm kiếm..." className="w-64 rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                </div>

                {/* Notification */}
                <button className="relative rounded-lg p-2 text-gray-600 hover:bg-gray-100">
                    🔔
                    <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">3</span>
                </button>


                
            </div>
        </header>
          {children}
    </div>
  )
}
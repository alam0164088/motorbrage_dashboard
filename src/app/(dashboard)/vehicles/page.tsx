'use client';

import { useState } from 'react';
import { 
  Car, 
  Truck, 
  Bike, 
  Search, 
  Eye
} from 'lucide-react';

// Mock Data - Simulating vehicles added by users in the app
const initialVehicles = [
  { id: 1, type: 'Car', reg: 'AB12 CDE', make: 'Toyota', model: 'Hilux', year: '2023', user: 'Nazmul Alam', status: 'Active' },
  { id: 2, type: 'Van', reg: 'XY55 ZAA', make: 'Ford', model: 'Transit', year: '2021', user: 'John Doe', status: 'Active' },
  { id: 3, type: 'Bike', reg: 'BK22 YYY', make: 'Yamaha', model: 'R1', year: '2022', user: 'Jane Smith', status: 'Inactive' },
  { id: 4, type: 'Car', reg: 'CD99 EEE', make: 'BMW', model: '3 Series', year: '2020', user: 'Mike Brown', status: 'Active' },
  { id: 5, type: 'Car', reg: 'EF88 GGG', make: 'Audi', model: 'A4', year: '2019', user: 'Sarah Wilson', status: 'Maintenance' },
  { id: 6, type: 'Van', reg: 'VW77 HHH', make: 'Mercedes', model: 'Sprinter', year: '2021', user: 'David Lee', status: 'Active' },
];

const VehiclesPage = () => {
  const [vehicles] = useState(initialVehicles);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVehicles = vehicles.filter(vehicle => 
    vehicle.reg.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
           <h1 className="text-3xl font-bold text-gray-800">Vehicle Management</h1>
           <p className="text-gray-500 mt-1">View user-submitted vehicle details</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search vehicles..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
          />
        </div>
      </div>

      {/* Vehicle List */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Make / Model</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredVehicles.map((vehicle) => (
                <tr key={vehicle.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center justify-center h-10 w-10 rounded-full ${
                        vehicle.type === 'Car' ? 'bg-blue-100 text-blue-600' :
                        vehicle.type === 'Van' ? 'bg-orange-100 text-orange-600' :
                        'bg-purple-100 text-purple-600'
                    }`}>
                        {vehicle.type === 'Car' && <Car size={20} />}
                        {vehicle.type === 'Van' && <Truck size={20} />}
                        {vehicle.type === 'Bike' && <Bike size={20} />}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-sm font-semibold text-gray-900">{vehicle.reg}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{vehicle.make} {vehicle.model}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicle.year}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <div className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 mr-2">
                            {vehicle.user.charAt(0)}
                        </div>
                        {vehicle.user}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        vehicle.status === 'Active' ? 'bg-green-100 text-green-800' : 
                        vehicle.status === 'Inactive' ? 'bg-gray-100 text-gray-800' :
                        'bg-yellow-100 text-yellow-800'
                    }`}>
                      {vehicle.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                        <Eye size={20} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredVehicles.length === 0 && (
                 <tr>
                    <td colSpan={7} className="px-6 py-10 text-center text-gray-500">
                       No vehicles found matching your search.
                    </td>
                 </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
                Displaying {filteredVehicles.length} of {vehicles.length} vehicles. Data is synced from User App.
            </p>
        </div>
      </div>
    </div>
  );
};

export default VehiclesPage;

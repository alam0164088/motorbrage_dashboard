'use client';

import { useState, useEffect } from 'react';
import { 
  Car, 
  Truck, 
  Bike, 
  Search, 
  Eye,
  X,
  Calendar,
  FileText,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

// Mock Data - Simulating vehicles added by users in the app
const initialVehicles = [
  { 
    id: 1, 
    type: 'Car', 
    reg: 'AB12 CDE', 
    make: 'Toyota', 
    model: 'Hilux', 
    year: '2023', 
    user: 'Nazmul Alam', 
    status: 'Active',
    vin: 'JT112345678901234',
    engineSize: '2.4L',
    fuelType: 'Diesel',
    color: 'White',
    motExpiry: '2024-10-15',
    taxExpiry: '2024-11-01',
    insuranceExpiry: '2024-09-20',
    mileage: '12,500',
    lastService: '2023-05-10'
  },
  { 
    id: 2, 
    type: 'Van', 
    reg: 'XY55 ZAA', 
    make: 'Ford', 
    model: 'Transit', 
    year: '2021', 
    user: 'John Doe', 
    status: 'Active',
    vin: 'WF0XXRTTGHY654321',
    engineSize: '2.0L',
    fuelType: 'Diesel',
    color: 'Blue',
    motExpiry: '2024-06-22',
    taxExpiry: '2024-07-01',
    insuranceExpiry: '2024-08-15',
    mileage: '45,200',
    lastService: '2023-11-05'
  },
  { 
    id: 3, 
    type: 'Bike', 
    reg: 'BK22 YYY', 
    make: 'Yamaha', 
    model: 'R1', 
    year: '2022', 
    user: 'Jane Smith', 
    status: 'Inactive',
    vin: 'JYARN223344556677',
    engineSize: '1000cc',
    fuelType: 'Petrol',
    color: 'Black',
    motExpiry: '2024-03-30',
    taxExpiry: '2024-04-01',
    insuranceExpiry: '2024-02-28',
    mileage: '3,500',
    lastService: '2023-08-12'
  },
  { 
    id: 4, 
    type: 'Car', 
    reg: 'CD99 EEE', 
    make: 'BMW', 
    model: '3 Series', 
    year: '2020', 
    user: 'Mike Brown', 
    status: 'Active',
    vin: 'WBA33445566778899',
    engineSize: '2.0L',
    fuelType: 'Hybrid',
    color: 'Silver',
    motExpiry: '2024-12-01',
    taxExpiry: '2025-01-01',
    insuranceExpiry: '2024-11-15',
    mileage: '32,100',
    lastService: '2023-12-05'
  },
  { 
    id: 5, 
    type: 'Car', 
    reg: 'EF88 GGG', 
    make: 'Audi', 
    model: 'A4', 
    year: '2019', 
    user: 'Sarah Wilson', 
    status: 'Maintenance',
    vin: 'WAUZZZ8K0A1234567',
    engineSize: '2.0L',
    fuelType: 'Petrol',
    color: 'Grey',
    motExpiry: '2024-05-15',
    taxExpiry: '2024-06-01',
    insuranceExpiry: '2024-04-20',
    mileage: '55,600',
    lastService: '2023-09-22'
  },
  { 
    id: 6, 
    type: 'Van', 
    reg: 'VW77 HHH', 
    make: 'Mercedes', 
    model: 'Sprinter', 
    year: '2021', 
    user: 'David Lee', 
    status: 'Active',
    vin: 'WDB9066332N567890',
    engineSize: '2.2L',
    fuelType: 'Diesel',
    color: 'White',
    motExpiry: '2024-08-10',
    taxExpiry: '2024-09-01',
    insuranceExpiry: '2024-07-25',
    mileage: '28,900',
    lastService: '2023-06-30'
  },
  { 
    id: 7, 
    type: 'Car', 
    reg: 'JK44 LLL', 
    make: 'Honda', 
    model: 'Civic', 
    year: '2022', 
    user: 'Emily Clark', 
    status: 'Active',
    vin: 'JHMFC123456789012',
    engineSize: '1.5L',
    fuelType: 'Petrol',
    color: 'Red',
    motExpiry: '2024-11-20',
    taxExpiry: '2024-12-01',
    insuranceExpiry: '2024-10-15',
    mileage: '15,000',
    lastService: '2023-10-10'
  },
  { 
    id: 8, 
    type: 'Car', 
    reg: 'MN33 PPP', 
    make: 'Nissan', 
    model: 'Qashqai', 
    year: '2021', 
    user: 'Robert Taylor', 
    status: 'Active',
    vin: 'SJNFAAJ11U1234567',
    engineSize: '1.3L',
    fuelType: 'Hybrid',
    color: 'Black',
    motExpiry: '2024-07-15',
    taxExpiry: '2024-08-01',
    insuranceExpiry: '2024-06-20',
    mileage: '22,500',
    lastService: '2023-07-05'
  },
  { 
    id: 9, 
    type: 'Car', 
    reg: 'QR22 SSS', 
    make: 'Volkswagen', 
    model: 'Golf', 
    year: '2020', 
    user: 'Jessica White', 
    status: 'Inactive',
    vin: 'WVWZZZAUZLW123456',
    engineSize: '2.0L',
    fuelType: 'Diesel',
    color: 'Blue',
    motExpiry: '2024-04-10',
    taxExpiry: '2024-05-01',
    insuranceExpiry: '2024-03-25',
    mileage: '38,000',
    lastService: '2023-04-15'
  },
  { 
    id: 10, 
    type: 'Bike', 
    reg: 'TU11 VVV', 
    make: 'Kawasaki', 
    model: 'Ninja', 
    year: '2023', 
    user: 'Kevin Harris', 
    status: 'Active',
    vin: 'JKAZX600RDA123456',
    engineSize: '636cc',
    fuelType: 'Petrol',
    color: 'Green',
    motExpiry: '2024-09-05',
    taxExpiry: '2024-10-01',
    insuranceExpiry: '2024-08-20',
    mileage: '2,500',
    lastService: '2023-09-01'
  },
  { 
    id: 11, 
    type: 'Van', 
    reg: 'WX99 YYY', 
    make: 'Vauxhall', 
    model: 'Vivaro', 
    year: '2019', 
    user: 'Daniel Martin', 
    status: 'Maintenance',
    vin: 'W0V7X123456789012',
    engineSize: '1.6L',
    fuelType: 'Diesel',
    color: 'White',
    motExpiry: '2024-02-15',
    taxExpiry: '2024-03-01',
    insuranceExpiry: '2024-01-20',
    mileage: '65,000',
    lastService: '2023-02-10'
  },
  { 
    id: 12, 
    type: 'Car', 
    reg: 'ZA88 ZZZ', 
    make: 'Tesla', 
    model: 'Model 3', 
    year: '2023', 
    user: 'Lisa Anderson', 
    status: 'Active',
    vin: '5YJ3E1EA1LF123456',
    engineSize: 'N/A',
    fuelType: 'Electric',
    color: 'Red',
    motExpiry: '2026-06-01',
    taxExpiry: '2025-06-01',
    insuranceExpiry: '2024-05-20',
    mileage: '8,000',
    lastService: '2023-06-15'
  },
  { 
    id: 13, 
    type: 'Car', 
    reg: 'BB77 CCC', 
    make: 'Kia', 
    model: 'Sportage', 
    year: '2021', 
    user: 'Paul Thomas', 
    status: 'Active',
    vin: 'KNAH8123456789012',
    engineSize: '1.6L',
    fuelType: 'Hybrid',
    color: 'Silver',
    motExpiry: '2024-08-20',
    taxExpiry: '2024-09-01',
    insuranceExpiry: '2024-07-15',
    mileage: '25,000',
    lastService: '2023-08-10'
  },
  { 
    id: 14, 
    type: 'Car', 
    reg: 'DD66 EEE', 
    make: 'Hyundai', 
    model: 'Tucson', 
    year: '2022', 
    user: 'Nancy Jackson', 
    status: 'Active',
    vin: 'KMhj8123456789012',
    engineSize: '1.6L',
    fuelType: 'Hybrid',
    color: 'Grey',
    motExpiry: '2024-12-10',
    taxExpiry: '2025-01-01',
    insuranceExpiry: '2024-11-20',
    mileage: '18,500',
    lastService: '2023-11-15'
  },
  { 
    id: 15, 
    type: 'Van', 
    reg: 'FF55 GGG', 
    make: 'Renault', 
    model: 'Trafic', 
    year: '2020', 
    user: 'Steven White', 
    status: 'Inactive',
    vin: 'VF1FL123456789012',
    engineSize: '2.0L',
    fuelType: 'Diesel',
    color: 'Silver',
    motExpiry: '2024-05-20',
    taxExpiry: '2024-06-01',
    insuranceExpiry: '2024-04-15',
    mileage: '42,000',
    lastService: '2023-05-10'
  },
  { 
    id: 16, 
    type: 'Car', 
    reg: 'HH44 III', 
    make: 'Mini', 
    model: 'Cooper', 
    year: '2021', 
    user: 'Karen Scott', 
    status: 'Active',
    vin: 'WMWXY123456789012',
    engineSize: '1.5L',
    fuelType: 'Petrol',
    color: 'Green',
    motExpiry: '2024-09-15',
    taxExpiry: '2024-10-01',
    insuranceExpiry: '2024-08-25',
    mileage: '20,000',
    lastService: '2023-09-10'
  },
  { 
    id: 17, 
    type: 'Bike', 
    reg: 'JJ33 KKK', 
    make: 'Ducati', 
    model: 'Panigale', 
    year: '2023', 
    user: 'Brian Green', 
    status: 'Active',
    vin: 'ZDM1SB5V1EB123456',
    engineSize: '1103cc',
    fuelType: 'Petrol',
    color: 'Red',
    motExpiry: '2024-07-20',
    taxExpiry: '2024-08-01',
    insuranceExpiry: '2024-06-15',
    mileage: '1,500',
    lastService: '2023-07-10'
  },
  { 
    id: 18, 
    type: 'Car', 
    reg: 'LL22 MMM', 
    make: 'Land Rover', 
    model: 'Discovery', 
    year: '2022', 
    user: 'George King', 
    status: 'Maintenance',
    vin: 'SALRA2BN3KA123456',
    engineSize: '3.0L',
    fuelType: 'Diesel',
    color: 'Black',
    motExpiry: '2024-11-05',
    taxExpiry: '2024-12-01',
    insuranceExpiry: '2024-10-20',
    mileage: '16,000',
    lastService: '2023-11-01'
  },
  { 
    id: 19, 
    type: 'Car', 
    reg: 'NN11 PPP', 
    make: 'Jaguar', 
    model: 'F-Pace', 
    year: '2020', 
    user: 'Sandra Baker', 
    status: 'Active',
    vin: 'SADCA2BN3KA123456',
    engineSize: '2.0L',
    fuelType: 'Diesel',
    color: 'Blue',
    motExpiry: '2024-03-15',
    taxExpiry: '2024-04-01',
    insuranceExpiry: '2024-02-20',
    mileage: '35,000',
    lastService: '2023-03-10'
  },
  { 
    id: 20, 
    type: 'Van', 
    reg: 'QQ00 RRR', 
    make: 'Citroen', 
    model: 'Berlingo', 
    year: '2021', 
    user: 'Edward Nelson', 
    status: 'Active',
    vin: 'VF7ER123456789012',
    engineSize: '1.5L',
    fuelType: 'Diesel',
    color: 'White',
    motExpiry: '2024-06-10',
    taxExpiry: '2024-07-01',
    insuranceExpiry: '2024-05-15',
    mileage: '30,000',
    lastService: '2023-06-05'
  }
];

const VehiclesPage = () => {
  const [vehicles] = useState(initialVehicles);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState<typeof initialVehicles[0] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const filteredVehicles = vehicles.filter(vehicle => 
    vehicle.reg.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastVehicle = currentPage * itemsPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - itemsPerPage;
  const currentVehicles = filteredVehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);
  const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };


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
              {currentVehicles.map((vehicle) => (
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
                    <button 
                      onClick={() => setSelectedVehicle(vehicle)}
                      className="text-gray-400 hover:text-indigo-600 transition-colors"
                    >
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
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
                Showing <span className="font-medium text-gray-900">{filteredVehicles.length > 0 ? indexOfFirstVehicle + 1 : 0}</span> to <span className="font-medium text-gray-900">{Math.min(indexOfLastVehicle, filteredVehicles.length)}</span> of <span className="font-medium text-gray-900">{filteredVehicles.length}</span> results
            </p>
            
            <div className="flex items-center gap-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    Previous
                </button>
                
                <div className="hidden sm:flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`min-w-[32px] px-3 py-1 text-sm font-medium border rounded-lg transition-colors ${
                              currentPage === page
                                  ? 'bg-indigo-600 text-white border-indigo-600'
                                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                          }`}
                      >
                          {page}
                      </button>
                  ))}
                </div>

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages || totalPages === 0}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    Next
                </button>
            </div>
        </div>
      </div>

       {/* Vehicle Details Modal */}
       {selectedVehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <div className="flex items-center gap-3">
                 <div className={`p-2 rounded-lg ${
                     selectedVehicle.type === 'Car' ? 'bg-blue-100 text-blue-600' :
                     selectedVehicle.type === 'Van' ? 'bg-orange-100 text-orange-600' :
                     'bg-purple-100 text-purple-600'
                 }`}>
                    {selectedVehicle.type === 'Car' && <Car size={24} />}
                    {selectedVehicle.type === 'Van' && <Truck size={24} />}
                    {selectedVehicle.type === 'Bike' && <Bike size={24} />}
                 </div>
                 <div>
                    <h2 className="text-xl font-bold text-gray-800">{selectedVehicle.make} {selectedVehicle.model}</h2>
                    <p className="text-sm text-gray-500 font-mono">{selectedVehicle.reg}</p>
                 </div>
              </div>
              <button 
                onClick={() => setSelectedVehicle(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-200 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
                
                {/* Status & User Info */}
                <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-100">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        Status: {selectedVehicle.status}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">
                       <span>User: </span>
                       <span className="text-indigo-600">{selectedVehicle.user}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Vehicle Specs */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <AlertCircle size={16} />
                            Vehicle Specifications
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-gray-600">Year</span>
                                <span className="font-medium text-gray-800">{selectedVehicle.year}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-gray-600">Color</span>
                                <span className="font-medium text-gray-800">{selectedVehicle.color}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-gray-600">Fuel Type</span>
                                <span className="font-medium text-gray-800">{selectedVehicle.fuelType}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-gray-600">Engine Size</span>
                                <span className="font-medium text-gray-800">{selectedVehicle.engineSize}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-gray-600">Mileage</span>
                                <span className="font-medium text-gray-800">{selectedVehicle.mileage} miles</span>
                            </div>
                            <div className=" pt-2">
                                <span className="text-gray-600 block text-xs mb-1">VIN Number</span>
                                <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm text-gray-700 select-all block break-all">
                                    {selectedVehicle.vin}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Important Dates */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Calendar size={16} />
                            Important Dates
                        </h3>
                        <div className="space-y-4">
                            <div className="bg-white border text-left border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                        <FileText size={18} />
                                    </div>
                                    <span className="text-sm font-medium text-gray-600">MOT Expiry</span>
                                </div>
                                <p className="text-lg font-bold text-gray-800 ml-11">{selectedVehicle.motExpiry}</p>
                            </div>
                            
                            <div className="bg-white border text-left border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                        <ShieldCheck size={18} />
                                    </div>
                                    <span className="text-sm font-medium text-gray-600">Tax Expiry</span>
                                </div>
                                <p className="text-lg font-bold text-gray-800 ml-11">{selectedVehicle.taxExpiry}</p>
                            </div>

                             <div className="bg-white border text-left border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                                        <ShieldCheck size={18} />
                                    </div>
                                    <span className="text-sm font-medium text-gray-600">Insurance Expiry</span>
                                </div>
                                <p className="text-lg font-bold text-gray-800 ml-11">{selectedVehicle.insuranceExpiry}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                     <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl text-blue-700">
                        <AlertCircle className="mt-0.5 flex-shrink-0" size={18} />
                        <div>
                             <h4 className="font-semibold text-sm mb-1">Administrative Note</h4>
                             <p className="text-sm opacity-90">
                                This vehicle data is managed by <span className="font-semibold">{selectedVehicle.user}</span> via the mobile app. 
                                Changes made here are for administrative view only and do not directly modify the user's local app data unless synced.
                             </p>
                        </div>
                     </div>
                </div>

            </div>
            
            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
                <button 
                  onClick={() => setSelectedVehicle(null)}
                  className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-medium transition-colors"
                >
                  Close
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehiclesPage;

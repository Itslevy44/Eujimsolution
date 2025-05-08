import React, { useState } from 'react';

const AdminEmployerApproval = () => {
  const [employers, setEmployers] = useState([
    { id: 1, companyName: 'Tech Corp', email: 'contact@techcorp.com', status: 'pending', industry: 'Technology', dateApplied: '2025-05-01' },
    { id: 2, companyName: 'Health Solutions', email: 'info@healthsolutions.com', status: 'pending', industry: 'Healthcare', dateApplied: '2025-05-02' },
    { id: 3, companyName: 'Finance Connect', email: 'support@financeconnect.com', status: 'pending', industry: 'Finance', dateApplied: '2025-05-03' },
    { id: 4, companyName: 'Green Energy', email: 'hello@greenenergy.com', status: 'pending', industry: 'Energy', dateApplied: '2025-05-04' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'dateApplied', direction: 'desc' });
  const [selectedEmployer, setSelectedEmployer] = useState(null);

  const handleApprove = (id) => {
    setEmployers(
      employers.map(employer => 
        employer.id === id ? { ...employer, status: 'approved' } : employer
      )
    );
    if (selectedEmployer && selectedEmployer.id === id) {
      setSelectedEmployer({ ...selectedEmployer, status: 'approved' });
    }
  };

  const handleReject = (id) => {
    setEmployers(
      employers.map(employer => 
        employer.id === id ? { ...employer, status: 'rejected' } : employer
      )
    );
    if (selectedEmployer && selectedEmployer.id === id) {
      setSelectedEmployer({ ...selectedEmployer, status: 'rejected' });
    }
  };

  const handleSort = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
  };

  const sortedEmployers = [...employers].filter(employer => 
    employer.status === 'pending' && 
    (employer.companyName.toLowerCase().includes(searchTerm.toLowerCase()) || 
     employer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
     employer.industry.toLowerCase().includes(searchTerm.toLowerCase()))
  ).sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const handleRowClick = (employer) => {
    setSelectedEmployer(employer.id === selectedEmployer?.id ? null : employer);
  };

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Employer Registrations</h1>
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
              <span className="text-gray-500 mr-2">🔍</span>
              <input
                type="text"
                placeholder="Search employers..."
                className="bg-transparent border-none focus:outline-none text-gray-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-700">
                Pending Approval <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">{sortedEmployers.length}</span>
              </h2>
            </div>
          </div>

          {sortedEmployers.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No pending employer registrations found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-50 text-left text-gray-600 text-sm">
                    <th className="px-4 py-3 cursor-pointer" onClick={() => handleSort('companyName')}>
                      <div className="flex items-center">
                        Company Name {renderSortIcon('companyName')}
                      </div>
                    </th>
                    <th className="px-4 py-3 cursor-pointer" onClick={() => handleSort('industry')}>
                      <div className="flex items-center">
                        Industry {renderSortIcon('industry')}
                      </div>
                    </th>
                    <th className="px-4 py-3 cursor-pointer" onClick={() => handleSort('email')}>
                      <div className="flex items-center">
                        Email {renderSortIcon('email')}
                      </div>
                    </th>
                    <th className="px-4 py-3 cursor-pointer" onClick={() => handleSort('dateApplied')}>
                      <div className="flex items-center">
                        Date Applied {renderSortIcon('dateApplied')}
                      </div>
                    </th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedEmployers.map((employer) => (
                    <React.Fragment key={employer.id}>
                      <tr 
                        className={`border-t text-sm hover:bg-blue-50 cursor-pointer transition-colors ${selectedEmployer?.id === employer.id ? 'bg-blue-50' : ''}`}
                        onClick={() => handleRowClick(employer)}
                      >
                        <td className="px-4 py-4 font-medium text-gray-800">{employer.companyName}</td>
                        <td className="px-4 py-4 text-gray-600">{employer.industry}</td>
                        <td className="px-4 py-4 text-gray-600">{employer.email}</td>
                        <td className="px-4 py-4 text-gray-600">{employer.dateApplied}</td>
                        <td className="px-4 py-4 text-right">
                          <div className="flex justify-end space-x-2">
                            <button 
                              onClick={(e) => {e.stopPropagation(); handleApprove(employer.id);}}
                              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md flex items-center transition-colors"
                            >
                              Approve
                            </button>
                            <button 
                              onClick={(e) => {e.stopPropagation(); handleReject(employer.id);}}
                              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md flex items-center transition-colors"
                            >
                              Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                      {selectedEmployer?.id === employer.id && (
                        <tr>
                          <td colSpan="5" className="bg-blue-50 px-4 py-4 border-t border-blue-100">
                            <div className="text-sm">
                              <h3 className="font-medium text-blue-800 mb-2">Additional Information</h3>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className="text-gray-600">Registration ID: <span className="text-gray-800">REG-{employer.id.toString().padStart(4, '0')}</span></p>
                                  <p className="text-gray-600">Status: 
                                    <span className={`ml-1 px-2 py-1 rounded-full text-xs ${
                                      employer.status === 'approved' ? 'bg-green-100 text-green-800' : 
                                      employer.status === 'rejected' ? 'bg-red-100 text-red-800' : 
                                      'bg-yellow-100 text-yellow-800'
                                    }`}>
                                      {employer.status.charAt(0).toUpperCase() + employer.status.slice(1)}
                                    </span>
                                  </p>
                                </div>
                                <div>
                                  <p className="text-gray-600">Application Date: <span className="text-gray-800">{employer.dateApplied}</span></p>
                                  <p className="text-gray-600">Industry: <span className="text-gray-800">{employer.industry}</span></p>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminEmployerApproval;
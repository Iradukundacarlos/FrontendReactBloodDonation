import { User } from '@/types';

export const exportUsersToCSV = (users: User[]) => {
  // Define the headers for your CSV
  const headers = [
    'Username',
    'First Name',
    'Last Name',
    'Email',
    'Phone Number',
    'Role'
  ];

  // Map the data to CSV rows
  const userDataRows = users.map((user) => [
    user.username,
    user.firstName,
    user.lastName,
    user.email,
    user.phoneNumber,
    user.role
  ]);

  // Combine headers and data
  const csvContent = [
    headers.join(','),
    ...userDataRows.map(row => row.join(','))
  ].join('\n');

  // Create a Blob containing the CSV data
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

  // Create a download link and trigger download
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', `users_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
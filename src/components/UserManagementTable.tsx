import { useState } from 'react';
import { MantineReactTable, MRT_ColumnDef, MRT_Row } from 'mantine-react-table';
import { Group, Text } from '@mantine/core';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchUsers, deleteUser } from '../lib/api';
import { User } from '@/types';
import { Button } from './ui/button';

export function UserManagementTable() {
  const [rowSelection, setRowSelection] = useState({});
  const queryClient = useQueryClient();

  const { data: users = [], isLoading, isError } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const handleDeleteUser = (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteMutation.mutate(userId);
    }
  };

  const columns: MRT_ColumnDef<User>[] = [
    { accessorKey: 'username', header: 'Username' },
    { accessorKey: 'firstName', header: 'First Name' },
    { accessorKey: 'lastName', header: 'Last Name' },
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'phoneNumber', header: 'Phone Number' },
    { accessorKey: 'role', header: 'Role' },
    {
      id: 'actions',
      header: 'Actions',
      Cell: ({ row }: { row: MRT_Row<User>; }) => (
        <Group spacing={4} position="right" noWrap>
          <Button
            onClick={() => console.log('Edit', row.original)}
            variant="outline"
            color="blue"
            size="sm"
          >
            Edit
          </Button>
          <Button
            onClick={() => handleDeleteUser(row.original.id)}
            variant="outline"
            color="red"
            size="sm"
          >
            Delete
          </Button>
        </Group>
      ),
    },
  ];

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error loading users</Text>;
  }

  return (
    <MantineReactTable
      columns={columns}
      data={users}
      enableRowSelection
      enableColumnOrdering
      enableGlobalFilter
      mantineTableProps={{
        striped: true,
        highlightOnHover: true,
      }}
      state={{ rowSelection }}
      onRowSelectionChange={setRowSelection}
      initialState={{
        columnVisibility: {
          username: false,
          role: false
        }
      }}
      renderTopToolbarCustomActions={() => (
        <Group spacing={8}>
          <Button onClick={() => console.log('Add New User')}>
            Add New User
          </Button>
          <Button onClick={() => console.log('Download Data')}>
            Download Data
          </Button>
          <Button onClick={() => console.log('Upload Data')}>
            Upload Data
          </Button>
        </Group>
      )}
    />
  );
}


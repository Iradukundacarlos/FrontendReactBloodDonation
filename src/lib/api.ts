import { User } from "@/types";

const mockUsers: User[] = [
  { id: '1', username: 'kabera_john', firstName: 'John', lastName: 'Kabera', email: 'john.kabera@example.rw', phoneNumber: '+250 788 111 001', role: 'Admin' },
  { id: '2', username: 'umutoni_jane', firstName: 'Jane', lastName: 'Umutoni', email: 'jane.umutoni@example.rw', phoneNumber: '+250 788 111 002', role: 'User' },
  { id: '3', username: 'ngabo_eric', firstName: 'Eric', lastName: 'Ngabo', email: 'eric.ngabo@example.rw', phoneNumber: '+250 788 111 003', role: 'User' },
  { id: '4', username: 'irene_ishimwe', firstName: 'Irene', lastName: 'Ishimwe', email: 'irene.ishimwe@example.rw', phoneNumber: '+250 788 111 004', role: 'Admin' },
  { id: '5', username: 'karangwa_peter', firstName: 'Peter', lastName: 'Karangwa', email: 'peter.karangwa@example.rw', phoneNumber: '+250 788 111 005', role: 'User' },
  { id: '6', username: 'mukamana_claire', firstName: 'Claire', lastName: 'Mukamana', email: 'claire.mukamana@example.rw', phoneNumber: '+250 788 111 006', role: 'User' },
  { id: '7', username: 'ndayisenga_paul', firstName: 'Paul', lastName: 'Ndayisenga', email: 'paul.ndayisenga@example.rw', phoneNumber: '+250 788 111 007', role: 'Admin' },
  { id: '8', username: 'mugisha_anne', firstName: 'Anne', lastName: 'Mugisha', email: 'anne.mugisha@example.rw', phoneNumber: '+250 788 111 008', role: 'User' },
  { id: '9', username: 'rwema_samuel', firstName: 'Samuel', lastName: 'Rwema', email: 'samuel.rwema@example.rw', phoneNumber: '+250 788 111 009', role: 'User' },
  { id: '10', username: 'akayezu_david', firstName: 'David', lastName: 'Akayezu', email: 'david.akayezu@example.rw', phoneNumber: '+250 788 111 010', role: 'Admin' },
  { id: '11', username: 'uwase_grace', firstName: 'Grace', lastName: 'Uwase', email: 'grace.uwase@example.rw', phoneNumber: '+250 788 111 011', role: 'User' },
  { id: '12', username: 'habimana_emmanuel', firstName: 'Emmanuel', lastName: 'Habimana', email: 'emmanuel.habimana@example.rw', phoneNumber: '+250 788 111 012', role: 'User' },
  { id: '13', username: 'nirere_faith', firstName: 'Faith', lastName: 'Nirere', email: 'faith.nirere@example.rw', phoneNumber: '+250 788 111 013', role: 'Admin' },
  { id: '14', username: 'nkurunziza_john', firstName: 'John', lastName: 'Nkurunziza', email: 'john.nkurunziza@example.rw', phoneNumber: '+250 788 111 014', role: 'User' },
  { id: '15', username: 'mukamwiza_linda', firstName: 'Linda', lastName: 'Mukamwiza', email: 'linda.mukamwiza@example.rw', phoneNumber: '+250 788 111 015', role: 'User' },
  { id: '16', username: 'kamanzi_joseph', firstName: 'Joseph', lastName: 'Kamanzi', email: 'joseph.kamanzi@example.rw', phoneNumber: '+250 788 111 016', role: 'User' },
  { id: '17', username: 'mutesi_diane', firstName: 'Diane', lastName: 'Mutesi', email: 'diane.mutesi@example.rw', phoneNumber: '+250 788 111 017', role: 'Admin' },
  { id: '18', username: 'manzi_justin', firstName: 'Justin', lastName: 'Manzi', email: 'justin.manzi@example.rw', phoneNumber: '+250 788 111 018', role: 'User' },
  { id: '19', username: 'mukundwa_beatrice', firstName: 'Beatrice', lastName: 'Mukundwa', email: 'beatrice.mukundwa@example.rw', phoneNumber: '+250 788 111 019', role: 'User' },
  { id: '20', username: 'nsabimana_eric', firstName: 'Eric', lastName: 'Nsabimana', email: 'eric.nsabimana@example.rw', phoneNumber: '+250 788 111 020', role: 'User' },
  { id: '21', username: 'umuhire_juliet', firstName: 'Juliet', lastName: 'Umuhire', email: 'juliet.umuhire@example.rw', phoneNumber: '+250 788 111 021', role: 'Admin' },
  { id: '22', username: 'gashugi_ally', firstName: 'Ally', lastName: 'Gashugi', email: 'ally.gashugi@example.rw', phoneNumber: '+250 788 111 022', role: 'User' },
  { id: '23', username: 'izere_patience', firstName: 'Patience', lastName: 'Izere', email: 'patience.izere@example.rw', phoneNumber: '+250 788 111 023', role: 'User' },
  { id: '24', username: 'murenzi_claud', firstName: 'Claud', lastName: 'Murenzi', email: 'claud.murenzi@example.rw', phoneNumber: '+250 788 111 024', role: 'Admin' },
  { id: '25', username: 'irakoze_gloria', firstName: 'Gloria', lastName: 'Irakoze', email: 'gloria.irakoze@example.rw', phoneNumber: '+250 788 111 025', role: 'User' },
  { id: '26', username: 'kwizera_henry', firstName: 'Henry', lastName: 'Kwizera', email: 'henry.kwizera@example.rw', phoneNumber: '+250 788 111 026', role: 'User' },
  { id: '27', username: 'kayitesi_faith', firstName: 'Faith', lastName: 'Kayitesi', email: 'faith.kayitesi@example.rw', phoneNumber: '+250 788 111 027', role: 'Admin' },
  { id: '28', username: 'hagenimana_noel', firstName: 'Noel', lastName: 'Hagenimana', email: 'noel.hagenimana@example.rw', phoneNumber: '+250 788 111 028', role: 'User' },
  { id: '29', username: 'nyirahabimana_sandra', firstName: 'Sandra', lastName: 'Nyirahabimana', email: 'sandra.nyirahabimana@example.rw', phoneNumber: '+250 788 111 029', role: 'User' },
  { id: '30', username: 'tuyishime_peter', firstName: 'Peter', lastName: 'Tuyishime', email: 'peter.tuyishime@example.rw', phoneNumber: '+250 788 111 030', role: 'Admin' },
];


export const fetchUsers = async (): Promise<User[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockUsers;
};

export const addUser = async (user: Omit<User, 'id'>): Promise<User> => {
  const newUser = { ...user, id: String(mockUsers.length + 1) };
  mockUsers.push(newUser);
  return newUser;
};

export const updateUser = async (user: User): Promise<User> => {
  const index = mockUsers.findIndex(u => u.id === user.id);
  if (index !== -1) {
    mockUsers[index] = user;
  }
  return user;
};

export const deleteUser = async (id: string): Promise<void> => {
  const index = mockUsers.findIndex(u => u.id === id);
  if (index !== -1) {
    mockUsers.splice(index, 1);
  }
};



import { Outlet } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';

const UserLayout: React.FC = () => {
  return (
    <div className="flex flex-col">
      <UserNavbar />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;


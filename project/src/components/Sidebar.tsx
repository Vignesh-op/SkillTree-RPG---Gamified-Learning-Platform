import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, GitBranch, Book, Users, User, FileText, Gamepad2 } from 'lucide-react';

interface NavItem {
  path: string;
  name: string;
  icon: React.ReactNode;
}

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const navItems: NavItem[] = [
    { path: '/dashboard', name: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
    { path: '/skilltree', name: 'Skill Tree', icon: <GitBranch className="h-5 w-5" /> },
    { path: '/quests', name: 'Quests', icon: <Book className="h-5 w-5" /> },
    { path: '/games', name: 'Games', icon: <Gamepad2 className="h-5 w-5" /> },
    { path: '/social', name: 'Social', icon: <Users className="h-5 w-5" /> },
    { path: '/profile', name: 'Profile', icon: <User className="h-5 w-5" /> },
    { path: '/resume', name: 'Resume', icon: <FileText className="h-5 w-5" /> },
  ];

  return (
    <aside className="hidden md:block bg-white w-64 shadow-md">
      <div className="h-full flex flex-col">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="px-4 text-xl font-bold text-center mb-6 text-primary-600 font-display">
            Level 5
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-primary-600 h-2 rounded-full progress-fill" 
                style={{ '--progress-width': '65%' } as React.CSSProperties}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">350/500 XP</div>
          </div>
          <nav className="mt-2 flex-1 px-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  ${location.pathname === item.path
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                  group flex items-center px-2 py-3 text-sm font-medium rounded-md transition-all duration-200
                `}
              >
                <div 
                  className={`
                    ${location.pathname === item.path
                      ? 'text-primary-600'
                      : 'text-gray-400 group-hover:text-gray-500'
                    }
                    mr-3
                  `}
                >
                  {item.icon}
                </div>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="card bg-primary-50 border border-primary-200">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-primary-100 rounded-full text-primary-600">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-primary-800">AI Mentor Tip</h3>
                <p className="mt-1 text-xs text-primary-700">
                  Try completing the "Python Basics" quest next to unlock new challenges in the Data Science path!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
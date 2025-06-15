import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bell, User, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    setIsProfileOpen(false);
  };
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsNotificationsOpen(false);
  };

  const notifications = [
    { id: 1, text: "You gained 50XP for completing Python Basics!", isNew: true },
    { id: 2, text: "Sarah challenged you to a coding duel!", isNew: true },
    { id: 3, text: "New quest available: Build a Simple Web App", isNew: false },
  ];

  return (
    <nav className="bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/dashboard" className="flex items-center">
                <span className="text-primary-600 text-xl font-display font-bold">SkillTree RPG</span>
              </Link>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <div className="relative">
              <button 
                onClick={toggleNotifications}
                className="p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                <Bell className="h-6 w-6" />
                {notifications.some(n => n.isNew) && (
                  <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-error-500"></span>
                )}
              </button>
              
              {isNotificationsOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-2 px-4 border-b border-gray-200">
                    <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className={`px-4 py-3 hover:bg-gray-50 ${notification.isNew ? 'bg-primary-50' : ''}`}>
                        <p className="text-sm text-gray-700">{notification.text}</p>
                        {notification.isNew && (
                          <span className="inline-flex items-center px-2 py-0.5 mt-1 rounded text-xs font-medium bg-primary-100 text-primary-800">
                            New
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="py-2 px-4 border-t border-gray-200">
                    <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-800">
                      View all notifications
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              <button 
                onClick={toggleProfile}
                className="flex items-center space-x-2 p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white">
                  <User className="h-5 w-5" />
                </div>
                <span className="font-medium">Level 5</span>
              </button>
              
              {isProfileOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Your Profile
                    </Link>
                    <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </Link>
                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <div className="flex items-center space-x-2">
                        <LogOut className="h-4 w-4" />
                        <span>Sign out</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center sm:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden bg-white">
          <div className="pt-2 pb-4 space-y-1">
            <Link to="/dashboard" className="block px-3 py-2 text-base font-medium text-primary-600 hover:bg-gray-100">
              Dashboard
            </Link>
            <Link to="/skilltree" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
              Skill Tree
            </Link>
            <Link to="/quests" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
              Quests
            </Link>
            <Link to="/social" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
              Social
            </Link>
            <Link to="/profile" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
              Profile
            </Link>
            <Link to="/resume" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
              Resume Builder
            </Link>
          </div>
          
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-3">
              <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white">
                <User className="h-6 w-6" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">John Doe</div>
                <div className="text-sm font-medium text-gray-500">Level 5 Coder</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <Link to="/profile" className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
                Your Profile
              </Link>
              <Link to="/settings" className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
                Settings
              </Link>
              <Link to="/" className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
                Sign out
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React, { useState } from 'react';
import { Users, User, Award, MessageSquare, Search, Filter, Send, Zap, Trophy } from 'lucide-react';

interface SocialUser {
  id: number;
  name: string;
  level: number;
  title: string;
  skills: string[];
  avatar: string;
  isOnline: boolean;
  lastActive?: string;
  stats: {
    quests: number;
    achievements: number;
    challenges: number;
  };
}

interface Challenge {
  id: number;
  title: string;
  challenger: string;
  challenged: string;
  skill: string;
  status: 'pending' | 'active' | 'completed';
  deadline?: string;
  reward: number;
}

const socialUsers: SocialUser[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    level: 7,
    title: 'JavaScript Expert',
    skills: ['JavaScript', 'React', 'Node.js'],
    avatar: 'SJ',
    isOnline: true,
    stats: {
      quests: 28,
      achievements: 15,
      challenges: 7,
    },
  },
  {
    id: 2,
    name: 'Michael Chen',
    level: 5,
    title: 'Python Developer',
    skills: ['Python', 'Data Analysis', 'Machine Learning'],
    avatar: 'MC',
    isOnline: false,
    lastActive: '2 hours ago',
    stats: {
      quests: 19,
      achievements: 12,
      challenges: 3,
    },
  },
  {
    id: 3,
    name: 'Emma Wilson',
    level: 9,
    title: 'Full Stack Developer',
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    avatar: 'EW',
    isOnline: true,
    stats: {
      quests: 42,
      achievements: 24,
      challenges: 12,
    },
  },
  {
    id: 4,
    name: 'James Roberts',
    level: 6,
    title: 'UI/UX Designer',
    skills: ['UI Design', 'Figma', 'CSS'],
    avatar: 'JR',
    isOnline: false,
    lastActive: '1 day ago',
    stats: {
      quests: 22,
      achievements: 14,
      challenges: 5,
    },
  },
  {
    id: 5,
    name: 'Olivia Garcia',
    level: 8,
    title: 'Data Scientist',
    skills: ['Python', 'Machine Learning', 'Statistics'],
    avatar: 'OG',
    isOnline: true,
    stats: {
      quests: 35,
      achievements: 20,
      challenges: 9,
    },
  },
];

const challenges: Challenge[] = [
  {
    id: 1,
    title: 'JavaScript Challenge: Build a Weather App',
    challenger: 'Sarah Johnson',
    challenged: 'John Doe',
    skill: 'JavaScript',
    status: 'active',
    deadline: '3 days left',
    reward: 150,
  },
  {
    id: 2,
    title: 'Python Data Visualization Duel',
    challenger: 'Michael Chen',
    challenged: 'John Doe',
    skill: 'Python',
    status: 'pending',
    reward: 100,
  },
  {
    id: 3,
    title: 'CSS Layout Master Challenge',
    challenger: 'Emma Wilson',
    challenged: 'John Doe',
    skill: 'CSS',
    status: 'completed',
    reward: 120,
  },
];

const Social: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'people' | 'challenges'>('people');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<string>('All');
  const [messageText, setMessageText] = useState('');
  const [selectedUser, setSelectedUser] = useState<SocialUser | null>(null);
  
  const skills = ['All', 'JavaScript', 'Python', 'React', 'CSS', 'UI Design', 'Data Analysis', 'Machine Learning'];
  
  // Filter users based on search and selected skill
  const filteredUsers = socialUsers
    .filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(user => 
      selectedSkill === 'All' || user.skills.includes(selectedSkill)
    );
  
  const handleSendMessage = () => {
    if (messageText.trim() && selectedUser) {
      // In a real app, this would send the message to the user
      console.log(`Sending "${messageText}" to ${selectedUser.name}`);
      setMessageText('');
    }
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Social Hub</h1>
      </div>
      
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button 
          onClick={() => setActiveTab('people')}
          className={`py-3 px-6 font-medium text-sm ${
            activeTab === 'people' 
              ? 'border-b-2 border-primary-600 text-primary-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          People
        </button>
        <button 
          onClick={() => setActiveTab('challenges')}
          className={`py-3 px-6 font-medium text-sm ${
            activeTab === 'challenges' 
              ? 'border-b-2 border-primary-600 text-primary-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Challenges
        </button>
      </div>
      
      {/* Search and filters */}
      <div className="flex flex-col md:flex-row md:items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder={activeTab === 'people' ? "Search people..." : "Search challenges..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {activeTab === 'people' && (
          <div className="relative">
            <select
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
            >
              {skills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <Filter className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        )}
      </div>
      
      {/* People tab content */}
      {activeTab === 'people' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* People list */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-card overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary-600 mr-2" />
                  <h2 className="text-xl font-bold text-gray-900">People with Similar Skills</h2>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <div 
                      key={user.id} 
                      className={`p-6 cursor-pointer hover:bg-gray-50 transition-colors ${selectedUser?.id === user.id ? 'bg-primary-50' : ''}`}
                      onClick={() => setSelectedUser(user)}
                    >
                      <div className="flex items-start">
                        <div className={`relative flex-shrink-0 h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-medium ${user.isOnline ? 'ring-2 ring-green-400' : ''}`}>
                          {user.avatar}
                          {user.isOnline && (
                            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-400 ring-2 ring-white"></span>
                          )}
                        </div>
                        
                        <div className="ml-4 flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-bold text-gray-900">{user.name}</h3>
                            <div className="bg-primary-50 text-primary-700 rounded-full px-3 py-1 text-sm font-medium">
                              Level {user.level}
                            </div>
                          </div>
                          
                          <p className="text-gray-500 mt-1">{user.title}</p>
                          
                          <div className="mt-2 flex flex-wrap gap-2">
                            {user.skills.map(skill => (
                              <span key={skill} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                {skill}
                              </span>
                            ))}
                          </div>
                          
                          <div className="mt-3 flex items-center text-sm">
                            {user.isOnline ? (
                              <span className="text-green-600 flex items-center">
                                <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>
                                Online
                              </span>
                            ) : (
                              <span className="text-gray-500">
                                Last active {user.lastActive}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                      <Users className="h-8 w-8" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">No users found</h3>
                    <p className="mt-2 text-gray-500">
                      Try adjusting your filters or search to find more people.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* User profile / message panel */}
          <div className="lg:col-span-1">
            {selectedUser ? (
              <div className="bg-white rounded-xl shadow-card overflow-hidden h-full flex flex-col">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-primary-600 mr-2" />
                    <h2 className="text-xl font-bold text-gray-900">User Profile</h2>
                  </div>
                </div>
                
                <div className="p-6 flex-1 overflow-y-auto">
                  <div className="flex flex-col items-center">
                    <div className={`h-20 w-20 rounded-full bg-primary-600 flex items-center justify-center text-white text-xl font-medium ${selectedUser.isOnline ? 'ring-2 ring-green-400' : ''}`}>
                      {selectedUser.avatar}
                    </div>
                    
                    <h3 className="mt-4 text-xl font-bold text-gray-900">{selectedUser.name}</h3>
                    <p className="text-gray-500">{selectedUser.title}</p>
                    
                    <div className="mt-2 bg-primary-50 text-primary-700 rounded-full px-3 py-1 text-sm font-medium">
                      Level {selectedUser.level}
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-gray-900">{selectedUser.stats.quests}</div>
                      <div className="text-xs text-gray-500">Quests</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-gray-900">{selectedUser.stats.achievements}</div>
                      <div className="text-xs text-gray-500">Achievements</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-gray-900">{selectedUser.stats.challenges}</div>
                      <div className="text-xs text-gray-500">Challenges</div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedUser.skills.map(skill => (
                        <span key={skill} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 space-x-2 flex">
                    <button className="flex-1 flex items-center justify-center btn-primary">
                      <Award className="h-4 w-4 mr-2" />
                      View Profile
                    </button>
                    <button className="flex-1 flex items-center justify-center btn bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500">
                      <Zap className="h-4 w-4 mr-2" />
                      Challenge
                    </button>
                  </div>
                </div>
                
                <div className="p-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Message
                  </h4>
                  <div className="flex">
                    <input
                      type="text"
                      className="flex-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-l-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Write a message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                    />
                    <button 
                      className="bg-primary-600 text-white px-4 rounded-r-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      onClick={handleSendMessage}
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-card p-6 flex flex-col items-center justify-center h-64 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                  <User className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a User</h3>
                <p className="text-gray-600">
                  Click on any user to view their profile and connect with them
                </p>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Challenges tab content */}
      {activeTab === 'challenges' && (
        <div>
          <div className="bg-white rounded-xl shadow-card overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <Trophy className="h-5 w-5 text-primary-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Active Challenges</h2>
              </div>
            </div>
            
            <div className="divide-y divide-gray-200">
              {challenges.filter(c => c.status === 'active').map((challenge) => (
                <div key={challenge.id} className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{challenge.title}</h3>
                      <div className="flex items-center mt-2">
                        <span className="text-sm text-gray-500 mr-2">From:</span>
                        <span className="font-medium text-gray-700">{challenge.challenger}</span>
                      </div>
                    </div>
                    <div className="flex items-center bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span>+{challenge.reward} XP</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Skill:</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {challenge.skill}
                    </span>
                  </div>
                  
                  {challenge.deadline && (
                    <div className="mt-2 text-sm text-orange-600 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {challenge.deadline}
                    </div>
                  )}
                  
                  <div className="mt-4 flex space-x-2">
                    <button className="flex-1 btn-primary text-sm">
                      View Challenge
                    </button>
                    <button className="flex-1 border border-red-500 text-red-500 hover:bg-red-50 py-2 px-4 rounded-lg text-sm">
                      Forfeit
                    </button>
                  </div>
                </div>
              ))}
              
              {challenges.filter(c => c.status === 'active').length === 0 && (
                <div className="p-6 text-center">
                  <p className="text-gray-500">No active challenges at the moment.</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-card overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <Trophy className="h-5 w-5 text-gray-500 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Pending Challenges</h2>
              </div>
            </div>
            
            <div className="divide-y divide-gray-200">
              {challenges.filter(c => c.status === 'pending').map((challenge) => (
                <div key={challenge.id} className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{challenge.title}</h3>
                      <div className="flex items-center mt-2">
                        <span className="text-sm text-gray-500 mr-2">From:</span>
                        <span className="font-medium text-gray-700">{challenge.challenger}</span>
                      </div>
                    </div>
                    <div className="flex items-center bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span>+{challenge.reward} XP</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Skill:</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {challenge.skill}
                    </span>
                  </div>
                  
                  <div className="mt-4 flex space-x-2">
                    <button className="flex-1 btn-primary text-sm">
                      Accept Challenge
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg text-sm">
                      Decline
                    </button>
                  </div>
                </div>
              ))}
              
              {challenges.filter(c => c.status === 'pending').length === 0 && (
                <div className="p-6 text-center">
                  <p className="text-gray-500">No pending challenges at the moment.</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <Trophy className="h-5 w-5 text-success-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Completed Challenges</h2>
              </div>
            </div>
            
            <div className="divide-y divide-gray-200">
              {challenges.filter(c => c.status === 'completed').map((challenge) => (
                <div key={challenge.id} className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{challenge.title}</h3>
                      <div className="flex items-center mt-2">
                        <span className="text-sm text-gray-500 mr-2">With:</span>
                        <span className="font-medium text-gray-700">{challenge.challenger}</span>
                      </div>
                    </div>
                    <div className="flex items-center bg-success-50 text-success-700 px-3 py-1 rounded-full text-sm font-medium">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span>Won +{challenge.reward} XP</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Skill:</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {challenge.skill}
                    </span>
                  </div>
                  
                  <div className="mt-4">
                    <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg text-sm">
                      View Results
                    </button>
                  </div>
                </div>
              ))}
              
              {challenges.filter(c => c.status === 'completed').length === 0 && (
                <div className="p-6 text-center">
                  <p className="text-gray-500">No completed challenges yet.</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <button className="btn-primary flex items-center">
              <Trophy className="h-5 w-5 mr-2" />
              Create New Challenge
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Social;
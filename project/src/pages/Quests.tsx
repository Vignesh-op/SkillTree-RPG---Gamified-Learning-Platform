import React, { useState } from 'react';
import { Book, Clock, Trophy, Tag, Search, Filter, CheckCircle, Star } from 'lucide-react';

interface Quest {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  xpReward: number;
  estimatedTime: string;
  status: 'available' | 'in-progress' | 'completed';
  deadline?: string;
  progress?: number;
  skills: string[];
}

const questsData: Quest[] = [
  {
    id: 'q1',
    title: 'Build a Portfolio Website',
    description: 'Create a personal portfolio website to showcase your skills and projects.',
    category: 'Web Development',
    difficulty: 'Beginner',
    xpReward: 100,
    estimatedTime: '4-6 hours',
    status: 'in-progress',
    deadline: '5 days left',
    progress: 60,
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'q2',
    title: 'Complete SQL Basics',
    description: 'Learn fundamental SQL commands and database concepts.',
    category: 'Data',
    difficulty: 'Beginner',
    xpReward: 75,
    estimatedTime: '2-3 hours',
    status: 'in-progress',
    deadline: '2 days left',
    progress: 80,
    skills: ['SQL', 'Databases'],
  },
  {
    id: 'q3',
    title: 'Python Data Visualization',
    description: 'Create insightful charts and graphs using Python libraries.',
    category: 'Data Science',
    difficulty: 'Intermediate',
    xpReward: 150,
    estimatedTime: '5-7 hours',
    status: 'available',
    skills: ['Python', 'Matplotlib', 'Pandas'],
  },
  {
    id: 'q4',
    title: 'Build a Todo App with React',
    description: 'Create a functional todo application using React components and state.',
    category: 'Web Development',
    difficulty: 'Intermediate',
    xpReward: 125,
    estimatedTime: '4-5 hours',
    status: 'available',
    skills: ['React', 'JavaScript', 'CSS'],
  },
  {
    id: 'q5',
    title: 'Machine Learning Classification Project',
    description: 'Build and train a classification model on a real-world dataset.',
    category: 'Data Science',
    difficulty: 'Advanced',
    xpReward: 200,
    estimatedTime: '8-10 hours',
    status: 'available',
    skills: ['Python', 'Machine Learning', 'Scikit-learn'],
  },
  {
    id: 'q6',
    title: 'Public Speaking: Give a Tech Talk',
    description: 'Prepare and deliver a 10-minute presentation on a technical topic.',
    category: 'Soft Skills',
    difficulty: 'Intermediate',
    xpReward: 100,
    estimatedTime: '3-5 hours',
    status: 'available',
    skills: ['Communication', 'Presentation'],
  },
  {
    id: 'q7',
    title: 'Create a Resume Using HTML/CSS',
    description: 'Build a professional resume using modern HTML and CSS.',
    category: 'Web Development',
    difficulty: 'Beginner',
    xpReward: 75,
    estimatedTime: '2-3 hours',
    status: 'completed',
    progress: 100,
    skills: ['HTML', 'CSS'],
  },
];

const Quests: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'available' | 'in-progress' | 'completed'>('available');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');

  const categories = ['All', ...new Set(questsData.map(quest => quest.category))];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  // Filter quests based on tab, search, and filters
  const filteredQuests = questsData
    .filter(quest => activeTab === 'available' ? quest.status === 'available' : 
                     activeTab === 'in-progress' ? quest.status === 'in-progress' : 
                     quest.status === 'completed')
    .filter(quest => quest.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                     quest.description.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(quest => filterCategory === 'All' || quest.category === filterCategory)
    .filter(quest => filterDifficulty === 'All' || quest.difficulty === filterDifficulty);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Quests</h1>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button 
          onClick={() => setActiveTab('available')}
          className={`py-3 px-6 font-medium text-sm ${
            activeTab === 'available' 
              ? 'border-b-2 border-primary-600 text-primary-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Available Quests
        </button>
        <button 
          onClick={() => setActiveTab('in-progress')}
          className={`py-3 px-6 font-medium text-sm ${
            activeTab === 'in-progress' 
              ? 'border-b-2 border-primary-600 text-primary-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          In Progress
        </button>
        <button 
          onClick={() => setActiveTab('completed')}
          className={`py-3 px-6 font-medium text-sm ${
            activeTab === 'completed' 
              ? 'border-b-2 border-primary-600 text-primary-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Completed
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
            placeholder="Search quests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <Filter className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          <div className="relative">
            <select
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              value={filterDifficulty}
              onChange={(e) => setFilterDifficulty(e.target.value)}
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <Filter className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Quest list */}
      {filteredQuests.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredQuests.map((quest) => (
            <div key={quest.id} className="card hover:shadow-lg border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{quest.title}</h2>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {quest.category}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      quest.difficulty === 'Beginner' 
                        ? 'bg-green-100 text-green-800' 
                        : quest.difficulty === 'Intermediate'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                    }`}>
                      {quest.difficulty}
                    </span>
                  </div>
                </div>
                <div className="flex items-center bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                  <Trophy className="h-4 w-4 mr-1" />
                  <span>+{quest.xpReward} XP</span>
                </div>
              </div>
              
              <p className="mt-4 text-gray-600">{quest.description}</p>
              
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>{quest.estimatedTime}</span>
                {quest.deadline && (
                  <span className="ml-4 text-orange-600 font-medium flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {quest.deadline}
                  </span>
                )}
              </div>
              
              <div className="mt-4">
                <div className="flex items-center mb-1">
                  <Tag className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500">Required Skills:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {quest.skills.map(skill => (
                    <span key={skill} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {quest.status === 'in-progress' && quest.progress !== undefined && (
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>{quest.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full progress-fill" 
                      style={{ '--progress-width': `${quest.progress}%` } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              )}
              
              <div className="mt-6">
                {quest.status === 'available' ? (
                  <button className="w-full btn-primary">
                    Start Quest
                  </button>
                ) : quest.status === 'in-progress' ? (
                  <button className="w-full btn bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500">
                    Continue Quest
                  </button>
                ) : (
                  <button className="w-full flex items-center justify-center btn bg-success-500 text-white hover:bg-success-600 focus:ring-success-400">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Completed
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
            <Book className="h-8 w-8" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">No quests found</h3>
          <p className="mt-2 text-gray-500">
            Try adjusting your filters or search criteria to find more quests.
          </p>
          <button 
            onClick={() => {
              setSearchQuery('');
              setFilterCategory('All');
              setFilterDifficulty('All');
            }}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Featured quests */}
      {activeTab === 'available' && filteredQuests.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Featured Quests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {questsData
              .filter(quest => quest.status === 'available')
              .slice(0, 3)
              .map((quest) => (
                <div key={`featured-${quest.id}`} className="card hover:shadow-lg border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0">
                    <div className="bg-accent-500 text-white px-3 py-1 transform rotate-45 translate-x-6 translate-y-3 text-xs font-bold">
                      Featured
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-full bg-primary-100 text-primary-600 mr-3">
                      <Star className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-900">{quest.title}</h3>
                  </div>
                  
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{quest.estimatedTime}</span>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-xs">
                      <Trophy className="h-3 w-3 mr-1" />
                      <span>+{quest.xpReward} XP</span>
                    </div>
                    <button className="text-sm text-primary-600 hover:text-primary-800 font-medium">
                      View details
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quests;
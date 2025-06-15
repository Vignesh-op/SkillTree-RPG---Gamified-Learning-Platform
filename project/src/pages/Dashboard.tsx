import React from 'react';
import { TrendingUp, Award, Book, Clock, BarChart, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for the dashboard
const recentAchievements = [
  { id: 1, name: 'Python Basics Completed', xp: 50, date: '3 days ago' },
  { id: 2, name: 'First Web App Built', xp: 100, date: '1 week ago' },
  { id: 3, name: 'Participated in Coding Challenge', xp: 75, date: '2 weeks ago' },
];

const recommendedSkills = [
  { id: 1, name: 'JavaScript Fundamentals', category: 'Web Development', completion: 25 },
  { id: 2, name: 'Data Visualization', category: 'Data Science', completion: 0 },
  { id: 3, name: 'Public Speaking', category: 'Soft Skills', completion: 10 },
];

const activeQuests = [
  { id: 1, name: 'Build a Portfolio Website', deadline: '5 days left', completion: 60 },
  { id: 2, name: 'Complete SQL Basics', deadline: '2 days left', completion: 80 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome back, Adventurer!</h1>
        <div className="hidden md:flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full">
          <TrendingUp className="h-5 w-5" />
          <span className="font-medium">+125 XP this week</span>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card bg-gradient-to-br from-primary-500 to-primary-700 text-white">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Current Level</h3>
            <div className="p-2 bg-white bg-opacity-20 rounded-full">
              <BarChart className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-bold">Level 5</div>
            <div className="mt-1 text-primary-100">350/500 XP to Level 6</div>
            <div className="w-full bg-white bg-opacity-20 rounded-full h-2 mt-2">
              <div 
                className="bg-white h-2 rounded-full progress-fill" 
                style={{ '--progress-width': '70%' } as React.CSSProperties}
              ></div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-gray-700">Skills Unlocked</h3>
            <div className="p-2 bg-primary-100 text-primary-600 rounded-full">
              <Award className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-bold text-gray-900">12</div>
            <div className="mt-1 text-gray-500">4 in progress</div>
          </div>
        </div>

        <div className="card">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-gray-700">Active Quests</h3>
            <div className="p-2 bg-secondary-100 text-secondary-600 rounded-full">
              <Book className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-bold text-gray-900">3</div>
            <div className="mt-1 text-gray-500">2 due soon</div>
          </div>
        </div>

        <div className="card">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-gray-700">Study Streak</h3>
            <div className="p-2 bg-accent-100 text-accent-600 rounded-full">
              <Calendar className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-bold text-gray-900">5 days</div>
            <div className="mt-1 text-gray-500">2 hours today</div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent achievements */}
        <div className="lg:col-span-1">
          <div className="card h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Achievements</h2>
              <Link to="/profile" className="text-sm text-primary-600 hover:text-primary-800">
                View all
              </Link>
            </div>
            <div className="space-y-4">
              {recentAchievements.map((achievement) => (
                <div key={achievement.id} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="font-medium text-gray-900">{achievement.name}</div>
                    <div className="text-sm text-gray-500">{achievement.date}</div>
                  </div>
                  <div className="text-sm font-bold text-primary-600">+{achievement.xp} XP</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended skills */}
        <div className="lg:col-span-1">
          <div className="card h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recommended Skills</h2>
              <Link to="/skilltree" className="text-sm text-primary-600 hover:text-primary-800">
                View skill tree
              </Link>
            </div>
            <div className="space-y-4">
              {recommendedSkills.map((skill) => (
                <div key={skill.id} className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">{skill.name}</h3>
                      <div className="text-sm text-gray-500">{skill.category}</div>
                    </div>
                    <div className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">
                      Recommended
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{skill.completion}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full progress-fill" 
                        style={{ '--progress-width': `${skill.completion}%` } as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active quests */}
        <div className="lg:col-span-1">
          <div className="card h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Active Quests</h2>
              <Link to="/quests" className="text-sm text-primary-600 hover:text-primary-800">
                Find new quests
              </Link>
            </div>
            <div className="space-y-4">
              {activeQuests.map((quest) => (
                <div key={quest.id} className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-900">{quest.name}</h3>
                    <div className="flex items-center text-xs text-orange-600">
                      <Clock className="h-3 w-3 mr-1" />
                      {quest.deadline}
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{quest.completion}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-secondary-600 h-2 rounded-full progress-fill" 
                        style={{ '--progress-width': `${quest.completion}%` } as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button className="w-full text-center py-2 text-sm font-medium text-primary-600 border border-primary-600 rounded-md hover:bg-primary-50 transition-colors">
                      Continue Quest
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-center mt-6">
                <button className="btn-primary">
                  Browse More Quests
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
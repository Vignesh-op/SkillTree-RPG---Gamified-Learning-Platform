import React, { useState } from 'react';
import { User, Mail, Award, Calendar, BookOpen, Clock, Edit, Trophy, Activity, Briefcase } from 'lucide-react';

interface Achievement {
  id: number;
  name: string;
  description: string;
  dateEarned: string;
  icon: JSX.Element;
}

interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
  experience: number;
  nextLevelExperience: number;
}

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'achievements' | 'skills' | 'stats'>('achievements');
  
  // Mock achievements data
  const achievements: Achievement[] = [
    { 
      id: 1, 
      name: 'Python Master', 
      description: 'Completed all Python-related skills in the skill tree', 
      dateEarned: 'July 15, 2024',
      icon: <Award className="h-6 w-6 text-accent-500" />
    },
    { 
      id: 2, 
      name: 'Quest Champion', 
      description: 'Completed 10 quests', 
      dateEarned: 'July 10, 2024',
      icon: <Trophy className="h-6 w-6 text-accent-500" />
    },
    { 
      id: 3, 
      name: 'Web Wizard', 
      description: 'Built and deployed a full-stack web application', 
      dateEarned: 'June 25, 2024',
      icon: <Trophy className="h-6 w-6 text-accent-500" />
    },
    { 
      id: 4, 
      name: 'Early Bird', 
      description: 'Completed 5 study sessions before 9 AM', 
      dateEarned: 'June 20, 2024',
      icon: <Award className="h-6 w-6 text-accent-500" />
    },
    { 
      id: 5, 
      name: 'Social Butterfly', 
      description: 'Connected with 5 other learners', 
      dateEarned: 'June 15, 2024',
      icon: <Award className="h-6 w-6 text-accent-500" />
    },
  ];
  
  // Mock skills data
  const skills: Skill[] = [
    { id: 1, name: 'JavaScript', category: 'Web Development', level: 4, experience: 350, nextLevelExperience: 500 },
    { id: 2, name: 'Python', category: 'Programming', level: 3, experience: 275, nextLevelExperience: 400 },
    { id: 3, name: 'HTML/CSS', category: 'Web Development', level: 5, experience: 500, nextLevelExperience: 500 },
    { id: 4, name: 'React', category: 'Web Development', level: 2, experience: 150, nextLevelExperience: 300 },
    { id: 5, name: 'SQL', category: 'Data', level: 2, experience: 180, nextLevelExperience: 300 },
    { id: 6, name: 'Data Analysis', category: 'Data Science', level: 1, experience: 50, nextLevelExperience: 200 },
    { id: 7, name: 'UI Design', category: 'Design', level: 3, experience: 320, nextLevelExperience: 400 },
    { id: 8, name: 'Public Speaking', category: 'Soft Skills', level: 2, experience: 220, nextLevelExperience: 300 },
  ];
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Your Profile</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-primary-500 to-primary-700"></div>
            <div className="px-6 pb-6">
              <div className="flex justify-center">
                <div className="relative -mt-12">
                  <div className="h-24 w-24 rounded-full border-4 border-white bg-primary-600 flex items-center justify-center text-white text-2xl font-bold">
                    JD
                  </div>
                  <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md border border-gray-200">
                    <Edit className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
                <p className="text-gray-500">Level 5 Adventurer</p>
              </div>
              
              <div className="mt-6 text-center">
                <div className="inline-block bg-primary-50 text-primary-700 rounded-full px-3 py-1 text-sm font-medium">
                  <span className="mr-1">⭐</span>
                  1,250 Total XP
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-gray-700">
                  <Mail className="h-5 w-5 text-gray-400 mr-2" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <span>Joined June 2024</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Briefcase className="h-5 w-5 text-gray-400 mr-2" />
                  <span>Software Developer</span>
                </div>
              </div>
              
              <div className="mt-8 space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">Current XP Level</span>
                    <span className="text-sm text-gray-500">350/500 XP</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full progress-fill" 
                      style={{ '--progress-width': '70%' } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">Daily Goal</span>
                    <span className="text-sm text-gray-500">1.5/2 hours</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-secondary-600 h-2 rounded-full progress-fill" 
                      style={{ '--progress-width': '75%' } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="w-full btn-primary">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-card p-6 mt-6">
            <h3 className="font-bold text-gray-900 mb-4">Study Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-primary-100 text-primary-600 mr-3">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span className="text-gray-700">Study Time</span>
                </div>
                <span className="font-medium">42 hours</span>
              </div>
              
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-secondary-100 text-secondary-600 mr-3">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <span className="text-gray-700">Completed Quests</span>
                </div>
                <span className="font-medium">15</span>
              </div>
              
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-accent-100 text-accent-600 mr-3">
                    <Trophy className="h-4 w-4" />
                  </div>
                  <span className="text-gray-700">Achievements</span>
                </div>
                <span className="font-medium">8</span>
              </div>
              
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-success-100 text-success-600 mr-3">
                    <Activity className="h-4 w-4" />
                  </div>
                  <span className="text-gray-700">Current Streak</span>
                </div>
                <span className="font-medium">5 days</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs and content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button 
                  onClick={() => setActiveTab('achievements')}
                  className={`py-4 px-6 text-sm font-medium ${
                    activeTab === 'achievements' 
                      ? 'border-b-2 border-primary-600 text-primary-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Achievements
                </button>
                <button 
                  onClick={() => setActiveTab('skills')}
                  className={`py-4 px-6 text-sm font-medium ${
                    activeTab === 'skills' 
                      ? 'border-b-2 border-primary-600 text-primary-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Skills
                </button>
                <button 
                  onClick={() => setActiveTab('stats')}
                  className={`py-4 px-6 text-sm font-medium ${
                    activeTab === 'stats' 
                      ? 'border-b-2 border-primary-600 text-primary-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Detailed Stats
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {/* Achievements tab */}
              {activeTab === 'achievements' && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Your Achievements</h2>
                    <p className="text-gray-600 mt-1">Badges and rewards you've earned on your learning journey</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((achievement) => (
                      <div key={achievement.id} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                        <div className="flex items-start">
                          <div className="p-2 bg-primary-50 rounded-lg mr-4">
                            {achievement.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{achievement.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                            <div className="mt-2 text-xs text-gray-500">Earned on {achievement.dateEarned}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <button className="btn-primary">
                      View All Achievements
                    </button>
                  </div>
                </div>
              )}
              
              {/* Skills tab */}
              {activeTab === 'skills' && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Your Skills</h2>
                    <p className="text-gray-600 mt-1">Skills you've learned and their current levels</p>
                  </div>
                  
                  <div className="space-y-6">
                    {skills.map((skill) => (
                      <div key={skill.id} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-gray-900">{skill.name}</h3>
                            <div className="inline-block px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded mt-1">
                              {skill.category}
                            </div>
                          </div>
                          <div className="bg-primary-50 text-primary-700 rounded-full px-3 py-1 text-sm font-medium">
                            Level {skill.level}
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Experience</span>
                            <span>{skill.experience}/{skill.nextLevelExperience} XP</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-primary-600 h-2 rounded-full progress-fill" 
                              style={{ '--progress-width': `${(skill.experience / skill.nextLevelExperience) * 100}%` } as React.CSSProperties}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Stats tab */}
              {activeTab === 'stats' && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Learning Statistics</h2>
                    <p className="text-gray-600 mt-1">Detailed stats about your learning progress</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-medium text-gray-700 mb-3">Time Distribution</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Web Development</span>
                            <span className="font-medium">18h</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-primary-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Data Science</span>
                            <span className="font-medium">12h</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-secondary-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Soft Skills</span>
                            <span className="font-medium">8h</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-accent-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Other</span>
                            <span className="font-medium">4h</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-gray-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-medium text-gray-700 mb-3">Weekly Activity</h3>
                      <div className="flex items-end justify-between h-32 mt-4">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                          <div key={day} className="flex flex-col items-center">
                            <div 
                              className={`w-8 ${index === 3 ? 'bg-primary-600' : 'bg-primary-300'} rounded-t`}
                              style={{ height: `${[30, 45, 60, 90, 75, 50, 20][index]}%` }}
                            ></div>
                            <div className="text-xs text-gray-500 mt-1">{day}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h3 className="font-medium text-gray-700 mb-3">Recent Activity</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="p-2 rounded-full bg-primary-100 text-primary-600 mr-3">
                          <Award className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-900">Completed "JavaScript Fundamentals" skill</p>
                          <p className="text-xs text-gray-500">Yesterday at 3:45 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="p-2 rounded-full bg-secondary-100 text-secondary-600 mr-3">
                          <BookOpen className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-900">Started "Build a Todo App" quest</p>
                          <p className="text-xs text-gray-500">2 days ago at 10:20 AM</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="p-2 rounded-full bg-accent-100 text-accent-600 mr-3">
                          <Trophy className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-900">Earned "Python Master" achievement</p>
                          <p className="text-xs text-gray-500">3 days ago at 5:15 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-8">
                    <button className="btn-primary">
                      Download Progress Report
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
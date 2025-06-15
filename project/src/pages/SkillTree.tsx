import React, { useState } from 'react';
import { Sparkles, Lock, CheckCircle } from 'lucide-react';

// Define skill node types
type SkillStatus = 'locked' | 'unlocked' | 'completed';

interface Skill {
  id: string;
  name: string;
  description: string;
  status: SkillStatus;
  level: number;
  xp: number;
  category: string;
  children: string[];
  requirements?: {
    skills?: string[];
    level?: number;
  };
}

// Mock data for the skill tree
const skillsData: Record<string, Skill> = {
  'web-basics': {
    id: 'web-basics',
    name: 'Web Fundamentals',
    description: 'Learn the basics of HTML, CSS, and JavaScript.',
    status: 'completed',
    level: 1,
    xp: 100,
    category: 'Web Development',
    children: ['javascript', 'responsive-design'],
  },
  'javascript': {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Master JavaScript programming language for dynamic web applications.',
    status: 'unlocked',
    level: 2,
    xp: 150,
    category: 'Web Development',
    children: ['react'],
    requirements: {
      skills: ['web-basics'],
    },
  },
  'responsive-design': {
    id: 'responsive-design',
    name: 'Responsive Design',
    description: 'Create websites that work on any device size.',
    status: 'unlocked',
    level: 2,
    xp: 120,
    category: 'Web Development',
    children: ['ui-design'],
    requirements: {
      skills: ['web-basics'],
    },
  },
  'react': {
    id: 'react',
    name: 'React Framework',
    description: 'Build powerful user interfaces with React.',
    status: 'locked',
    level: 3,
    xp: 200,
    category: 'Web Development',
    children: ['fullstack'],
    requirements: {
      skills: ['javascript'],
    },
  },
  'ui-design': {
    id: 'ui-design',
    name: 'UI/UX Design',
    description: 'Learn principles of user interface and experience design.',
    status: 'locked',
    level: 3,
    xp: 180,
    category: 'Design',
    children: [],
    requirements: {
      skills: ['responsive-design'],
    },
  },
  'fullstack': {
    id: 'fullstack',
    name: 'Full Stack Development',
    description: 'Combine frontend and backend skills to build complete applications.',
    status: 'locked',
    level: 4,
    xp: 250,
    category: 'Web Development',
    children: [],
    requirements: {
      skills: ['react'],
      level: 4,
    },
  },
  'python-basics': {
    id: 'python-basics',
    name: 'Python Basics',
    description: 'Learn the fundamentals of Python programming language.',
    status: 'unlocked',
    level: 1,
    xp: 100,
    category: 'Programming',
    children: ['data-analysis'],
  },
  'data-analysis': {
    id: 'data-analysis',
    name: 'Data Analysis',
    description: 'Learn to analyze and visualize data using Python libraries.',
    status: 'locked',
    level: 2,
    xp: 150,
    category: 'Data Science',
    children: ['machine-learning'],
    requirements: {
      skills: ['python-basics'],
    },
  },
  'machine-learning': {
    id: 'machine-learning',
    name: 'Machine Learning',
    description: 'Build and train machine learning models.',
    status: 'locked',
    level: 3,
    xp: 220,
    category: 'Data Science',
    children: [],
    requirements: {
      skills: ['data-analysis'],
      level: 3,
    },
  },
};

// Simplified layout coordinates for the skill tree visualization
const skillCoordinates: Record<string, { x: number, y: number, pathIds: string[] }> = {
  'web-basics': { x: 1, y: 1, pathIds: [] },
  'javascript': { x: 0, y: 2, pathIds: ['web-basics'] },
  'responsive-design': { x: 2, y: 2, pathIds: ['web-basics'] },
  'react': { x: 0, y: 3, pathIds: ['javascript'] },
  'ui-design': { x: 2, y: 3, pathIds: ['responsive-design'] },
  'fullstack': { x: 0, y: 4, pathIds: ['react'] },
  'python-basics': { x: 4, y: 1, pathIds: [] },
  'data-analysis': { x: 4, y: 2, pathIds: ['python-basics'] },
  'machine-learning': { x: 4, y: 3, pathIds: ['data-analysis'] },
};

const SkillTree: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', ...new Set(Object.values(skillsData).map(skill => skill.category))];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : Object.fromEntries(
        Object.entries(skillsData).filter(([_, skill]) => skill.category === activeCategory)
      );

  const handleSkillClick = (skillId: string) => {
    setSelectedSkill(skillsData[skillId]);
  };

  const renderSkillNode = (skillId: string) => {
    const skill = skillsData[skillId];
    if (!skill) return null;

    // If filtering by category and this skill isn't in the category, don't render
    if (activeCategory !== 'all' && skill.category !== activeCategory) return null;

    const { x, y } = skillCoordinates[skillId];
    
    // Determine the right icon and style based on skill status
    let icon;
    let nodeClass = 'skill-node';
    
    if (skill.status === 'locked') {
      icon = <Lock className="h-6 w-6" />;
      nodeClass += ' skill-node-locked';
    } else if (skill.status === 'completed') {
      icon = <CheckCircle className="h-6 w-6" />;
      nodeClass += ' skill-node-completed';
    } else {
      icon = <Sparkles className="h-6 w-6" />;
      nodeClass += ' skill-node-unlocked';
    }

    return (
      <div 
        key={skillId}
        className="absolute transform -translate-x-1/2 -translate-y-1/2"
        style={{ 
          left: `${(x + 1) * 16}%`, 
          top: `${(y) * 150}px`,
        }}
      >
        <div 
          className={`${nodeClass} ${selectedSkill?.id === skillId ? 'ring-4 ring-primary-300' : ''}`}
          onClick={() => handleSkillClick(skillId)}
        >
          {icon}
        </div>
        <div className="mt-2 text-center w-32 -ml-8 text-sm font-medium">
          {skill.name}
        </div>
        <div className="text-xs text-center text-gray-500">
          Level {skill.level}
        </div>
      </div>
    );
  };

  const renderConnections = () => {
    return Object.keys(skillCoordinates).map(skillId => {
      const { pathIds } = skillCoordinates[skillId];
      
      return pathIds.map(parentId => {
        // If filtering by category and either skill isn't in the category, don't render the connection
        if (activeCategory !== 'all' && 
           (skillsData[skillId].category !== activeCategory || 
            skillsData[parentId].category !== activeCategory)) {
          return null;
        }

        const startCoord = skillCoordinates[parentId];
        const endCoord = skillCoordinates[skillId];
        
        // Calculate start and end positions
        const startX = (startCoord.x + 1) * 16;
        const startY = startCoord.y * 150;
        const endX = (endCoord.x + 1) * 16;
        const endY = endCoord.y * 150;
        
        // Determine if the connection is active
        const isActive = skillsData[parentId].status === 'completed' || skillsData[parentId].status === 'unlocked';
        
        return (
          <div 
            key={`${parentId}-${skillId}`}
            className={`absolute skill-connection ${isActive ? 'skill-connection-active' : ''}`}
            style={{
              left: `${Math.min(startX, endX)}%`,
              top: `${startY + 8}px`,
              width: `${Math.abs(endX - startX)}%`,
              transform: startX > endX ? 'translateX(-100%)' : 'none',
            }}
          />
        );
      });
    }).flat();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Skill Tree</h1>
        <div className="flex space-x-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1 text-sm rounded-full ${
                activeCategory === category
                  ? 'bg-primary-100 text-primary-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Skill tree visualization */}
        <div className="w-full md:w-3/4 bg-white rounded-xl shadow-card overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Your Learning Path</h2>
            <p className="text-gray-600 mt-1">
              Click on a skill to see details and unlock new abilities
            </p>
          </div>
          <div className="relative h-[600px] p-4 overflow-auto">
            {/* Render the connections between skills */}
            {renderConnections()}
            
            {/* Render the skill nodes */}
            {Object.keys(filteredSkills).map(skillId => renderSkillNode(skillId))}
          </div>
        </div>

        {/* Skill details panel */}
        <div className="w-full md:w-1/4">
          {selectedSkill ? (
            <div className="bg-white rounded-xl shadow-card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{selectedSkill.name}</h2>
              <div className="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full mb-4">
                {selectedSkill.category}
              </div>
              <p className="text-gray-600 mb-4">{selectedSkill.description}</p>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Level Required</span>
                  <span className="font-medium">{selectedSkill.level}</span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">XP Reward</span>
                  <span className="font-medium text-primary-600">+{selectedSkill.xp} XP</span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Status</span>
                  <span className={`font-medium ${
                    selectedSkill.status === 'completed' 
                      ? 'text-success-600' 
                      : selectedSkill.status === 'unlocked' 
                        ? 'text-primary-600' 
                        : 'text-gray-500'
                  }`}>
                    {selectedSkill.status.charAt(0).toUpperCase() + selectedSkill.status.slice(1)}
                  </span>
                </div>
              </div>
              
              {selectedSkill.requirements && (
                <div className="mb-4">
                  <h3 className="font-medium text-gray-900 mb-2">Requirements</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {selectedSkill.requirements.skills && (
                      <>
                        {selectedSkill.requirements.skills.map(reqSkill => (
                          <li key={reqSkill} className="flex items-center">
                            {skillsData[reqSkill].status === 'completed' ? (
                              <CheckCircle className="h-4 w-4 text-success-500 mr-2" />
                            ) : (
                              <div className="h-4 w-4 rounded-full border border-gray-300 mr-2" />
                            )}
                            {skillsData[reqSkill].name}
                          </li>
                        ))}
                      </>
                    )}
                    {selectedSkill.requirements.level && (
                      <li className="flex items-center">
                        {5 >= selectedSkill.requirements.level ? (
                          <CheckCircle className="h-4 w-4 text-success-500 mr-2" />
                        ) : (
                          <div className="h-4 w-4 rounded-full border border-gray-300 mr-2" />
                        )}
                        Player Level {selectedSkill.requirements.level}
                      </li>
                    )}
                  </ul>
                </div>
              )}
              
              <div className="mt-6">
                {selectedSkill.status === 'locked' ? (
                  <button disabled className="w-full btn bg-gray-300 text-gray-600 cursor-not-allowed">
                    Locked
                  </button>
                ) : selectedSkill.status === 'completed' ? (
                  <button className="w-full btn bg-success-500 text-white hover:bg-success-600 focus:ring-success-400">
                    Completed
                  </button>
                ) : (
                  <button className="w-full btn-primary">
                    Start Learning
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-card p-6 flex flex-col items-center justify-center h-64 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Skill</h3>
              <p className="text-gray-600">
                Click on any skill node to view details and start learning
              </p>
            </div>
          )}

          <div className="bg-white rounded-xl shadow-card p-6 mt-6">
            <h3 className="font-medium text-gray-900 mb-4">Legend</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="skill-node skill-node-completed w-8 h-8 mr-3">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <span className="text-sm text-gray-600">Completed Skill</span>
              </div>
              <div className="flex items-center">
                <div className="skill-node skill-node-unlocked w-8 h-8 mr-3">
                  <Sparkles className="h-4 w-4" />
                </div>
                <span className="text-sm text-gray-600">Available to Learn</span>
              </div>
              <div className="flex items-center">
                <div className="skill-node skill-node-locked w-8 h-8 mr-3">
                  <Lock className="h-4 w-4" />
                </div>
                <span className="text-sm text-gray-600">Locked Skill</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTree;
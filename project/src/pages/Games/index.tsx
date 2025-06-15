import React, { useState } from 'react';
import { Code, Brain, Gamepad2 } from 'lucide-react';
import CodeRacer from './CodeRacer';
import MemoryMatch from './MemoryMatch';

const Games: React.FC = () => {
  const [activeGame, setActiveGame] = useState<'coderacer' | 'memorymatch'>('coderacer');

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Learning Games</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <Gamepad2 className="h-5 w-5 text-primary-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Available Games</h2>
              </div>
            </div>
            
            <div className="p-4">
              <button
                onClick={() => setActiveGame('coderacer')}
                className={`w-full mb-3 p-4 rounded-lg flex items-center ${
                  activeGame === 'coderacer'
                    ? 'bg-primary-50 text-primary-700'
                    : 'hover:bg-gray-50'
                }`}
              >
                <Code className="h-5 w-5 mr-3" />
                <div className="text-left">
                  <div className="font-medium">Code Racer</div>
                  <div className="text-sm text-gray-500">
                    Practice typing code snippets
                  </div>
                </div>
              </button>

              <button
                onClick={() => setActiveGame('memorymatch')}
                className={`w-full p-4 rounded-lg flex items-center ${
                  activeGame === 'memorymatch'
                    ? 'bg-primary-50 text-primary-700'
                    : 'hover:bg-gray-50'
                }`}
              >
                <Brain className="h-5 w-5 mr-3" />
                <div className="text-left">
                  <div className="font-medium">Memory Match</div>
                  <div className="text-sm text-gray-500">
                    Match programming concepts
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-card p-6 mt-6">
            <h3 className="font-medium text-gray-900 mb-4">Why Play?</h3>
            <div className="space-y-4 text-sm text-gray-600">
              <p>
                Our learning games are designed to help you master programming concepts
                while having fun. Each game targets different skills:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Improve typing speed and accuracy</li>
                <li>Learn programming terminology</li>
                <li>Practice pattern recognition</li>
                <li>Build muscle memory</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          {activeGame === 'coderacer' && <CodeRacer />}
          {activeGame === 'memorymatch' && <MemoryMatch />}
        </div>
      </div>
    </div>
  );
};

export default Games;
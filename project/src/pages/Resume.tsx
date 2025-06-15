import React, { useState } from 'react';
import { FileText, Download, Award, Book, Code, Edit, Copy } from 'lucide-react';

const Resume: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<'professional' | 'creative' | 'minimal'>('professional');
  
  // Mock user data for resume
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    title: 'Software Developer',
    summary: 'Passionate software developer with expertise in web technologies and a strong foundation in computer science principles. Skilled in building responsive and user-friendly applications using modern frameworks and libraries.',
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Python', level: 75 },
      { name: 'Node.js', level: 70 },
      { name: 'SQL', level: 65 },
    ],
    achievements: [
      { title: 'Python Master', description: 'Completed all Python-related skills' },
      { title: 'Web Wizard', description: 'Built and deployed a full-stack web application' },
      { title: 'Quest Champion', description: 'Completed 10 quests' },
    ],
    experience: [
      {
        title: 'Junior Web Developer',
        company: 'Tech Solutions Inc.',
        location: 'San Francisco, CA',
        startDate: 'January 2023',
        endDate: 'Present',
        description: 'Developed and maintained web applications using React and Node.js. Collaborated with design team to implement responsive user interfaces.',
      },
      {
        title: 'Web Development Intern',
        company: 'Digital Innovations',
        location: 'San Francisco, CA',
        startDate: 'May 2022',
        endDate: 'December 2022',
        description: 'Assisted in front-end development tasks. Created responsive layouts using HTML, CSS, and JavaScript.',
      },
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of California',
        location: 'Berkeley, CA',
        graduationDate: 'May 2022',
      },
    ],
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Resume Builder</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Controls panel */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-primary-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Resume Options</h2>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-medium text-gray-900 mb-3">Choose Template</h3>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <button 
                  onClick={() => setSelectedTemplate('professional')}
                  className={`relative p-2 border rounded-lg ${
                    selectedTemplate === 'professional' 
                      ? 'border-primary-500 ring-2 ring-primary-200' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="aspect-w-8 aspect-h-11 bg-gray-100 rounded mb-2">
                    <div className="w-full h-2 bg-primary-600 rounded-t"></div>
                    <div className="p-1">
                      <div className="h-2 w-1/2 bg-gray-300 rounded mb-1"></div>
                      <div className="h-1 w-3/4 bg-gray-200 rounded mb-1"></div>
                      <div className="h-1 w-2/3 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="text-xs text-center text-gray-700">Professional</div>
                </button>
                
                <button 
                  onClick={() => setSelectedTemplate('creative')}
                  className={`relative p-2 border rounded-lg ${
                    selectedTemplate === 'creative' 
                      ? 'border-primary-500 ring-2 ring-primary-200' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="aspect-w-8 aspect-h-11 bg-gray-100 rounded mb-2">
                    <div className="w-1/3 h-full bg-accent-500 rounded-l"></div>
                    <div className="absolute inset-0 p-1">
                      <div className="h-2 w-1/2 bg-gray-300 rounded mb-1 ml-auto"></div>
                      <div className="h-1 w-1/2 bg-gray-200 rounded mb-1 ml-auto"></div>
                      <div className="h-1 w-1/3 bg-gray-200 rounded ml-auto"></div>
                    </div>
                  </div>
                  <div className="text-xs text-center text-gray-700">Creative</div>
                </button>
                
                <button 
                  onClick={() => setSelectedTemplate('minimal')}
                  className={`relative p-2 border rounded-lg ${
                    selectedTemplate === 'minimal' 
                      ? 'border-primary-500 ring-2 ring-primary-200' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="aspect-w-8 aspect-h-11 bg-gray-100 rounded mb-2">
                    <div className="p-1">
                      <div className="h-2 w-3/4 bg-gray-300 rounded mb-3 mx-auto"></div>
                      <div className="h-1 w-2/3 bg-gray-200 rounded mb-1 mx-auto"></div>
                      <div className="h-1 w-1/2 bg-gray-200 rounded mb-3 mx-auto"></div>
                      <div className="h-1 w-3/4 bg-gray-200 rounded mb-1"></div>
                      <div className="h-1 w-2/3 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="text-xs text-center text-gray-700">Minimal</div>
                </button>
              </div>
              
              <h3 className="font-medium text-gray-900 mb-3">Sections to Include</h3>
              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <input
                    id="include-summary"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    defaultChecked
                  />
                  <label htmlFor="include-summary" className="ml-2 block text-sm text-gray-700">
                    Professional Summary
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="include-skills"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    defaultChecked
                  />
                  <label htmlFor="include-skills" className="ml-2 block text-sm text-gray-700">
                    Skills
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="include-achievements"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    defaultChecked
                  />
                  <label htmlFor="include-achievements" className="ml-2 block text-sm text-gray-700">
                    Achievements
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="include-experience"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    defaultChecked
                  />
                  <label htmlFor="include-experience" className="ml-2 block text-sm text-gray-700">
                    Work Experience
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="include-education"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    defaultChecked
                  />
                  <label htmlFor="include-education" className="ml-2 block text-sm text-gray-700">
                    Education
                  </label>
                </div>
              </div>
              
              <div className="space-y-4">
                <button className="w-full btn-primary flex items-center justify-center">
                  <Download className="h-5 w-5 mr-2" />
                  Download PDF
                </button>
                <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg font-medium flex items-center justify-center">
                  <Copy className="h-5 w-5 mr-2" />
                  Copy as Text
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-card p-6 mt-6">
            <h3 className="font-medium text-gray-900 mb-4 flex items-center">
              <Award className="h-5 w-5 text-primary-600 mr-2" />
              Skills & Achievements
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Your resume automatically includes skills and achievements you've earned in SkillTree RPG.
            </p>
            <button className="w-full border border-primary-500 text-primary-600 hover:bg-primary-50 py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center">
              <Edit className="h-4 w-4 mr-2" />
              Customize Included Items
            </button>
          </div>
        </div>
        
        {/* Resume preview */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-primary-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Resume Preview</h2>
              </div>
            </div>
            
            <div className="p-6 bg-gray-50">
              <div className="bg-white rounded-lg shadow-md max-w-3xl mx-auto overflow-hidden">
                {/* Professional template */}
                {selectedTemplate === 'professional' && (
                  <div className="p-8">
                    <div className="border-b-2 border-primary-600 pb-6 mb-6">
                      <h1 className="text-3xl font-bold text-gray-900">{userData.name}</h1>
                      <p className="text-xl text-gray-600 mt-1">{userData.title}</p>
                      
                      <div className="flex flex-wrap mt-4 text-sm text-gray-600">
                        <div className="mr-6 mb-2">{userData.email}</div>
                        <div className="mr-6 mb-2">{userData.phone}</div>
                        <div>{userData.location}</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-3">Professional Summary</h2>
                      <p className="text-gray-700">{userData.summary}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-3">Skills</h2>
                      <div className="grid grid-cols-2 gap-3">
                        {userData.skills.map((skill) => (
                          <div key={skill.name} className="mb-2">
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-700">{skill.name}</span>
                              <span className="text-gray-500 text-sm">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-primary-600 h-2 rounded-full" 
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-3">Achievements</h2>
                      <div className="space-y-3">
                        {userData.achievements.map((achievement) => (
                          <div key={achievement.title} className="flex">
                            <div className="mr-2">•</div>
                            <div>
                              <span className="font-medium text-gray-900">{achievement.title}</span>
                              <span className="text-gray-700"> - {achievement.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-3">Work Experience</h2>
                      <div className="space-y-6">
                        {userData.experience.map((exp) => (
                          <div key={exp.title}>
                            <div className="flex justify-between">
                              <h3 className="font-bold text-gray-900">{exp.title}</h3>
                              <div className="text-gray-600 text-sm">
                                {exp.startDate} - {exp.endDate}
                              </div>
                            </div>
                            <div className="text-gray-700">{exp.company}, {exp.location}</div>
                            <p className="mt-2 text-gray-600">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3">Education</h2>
                      <div className="space-y-4">
                        {userData.education.map((edu) => (
                          <div key={edu.degree}>
                            <div className="flex justify-between">
                              <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                              <div className="text-gray-600 text-sm">
                                {edu.graduationDate}
                              </div>
                            </div>
                            <div className="text-gray-700">{edu.institution}, {edu.location}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Creative template */}
                {selectedTemplate === 'creative' && (
                  <div className="flex">
                    <div className="w-1/3 bg-accent-500 text-white p-6">
                      <div className="mb-8">
                        <h1 className="text-2xl font-bold">{userData.name}</h1>
                        <p className="text-sm mt-1">{userData.title}</p>
                      </div>
                      
                      <div className="mb-8">
                        <h2 className="text-lg font-bold mb-3 border-b border-white pb-1">Contact</h2>
                        <div className="space-y-2 text-sm">
                          <div>{userData.email}</div>
                          <div>{userData.phone}</div>
                          <div>{userData.location}</div>
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <h2 className="text-lg font-bold mb-3 border-b border-white pb-1">Skills</h2>
                        <div className="space-y-3">
                          {userData.skills.map((skill) => (
                            <div key={skill.name}>
                              <div className="flex justify-between mb-1 text-sm">
                                <span>{skill.name}</span>
                              </div>
                              <div className="w-full bg-accent-700 rounded-full h-1.5">
                                <div 
                                  className="bg-white h-1.5 rounded-full" 
                                  style={{ width: `${skill.level}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h2 className="text-lg font-bold mb-3 border-b border-white pb-1">Education</h2>
                        <div className="space-y-4">
                          {userData.education.map((edu) => (
                            <div key={edu.degree} className="text-sm">
                              <h3 className="font-bold">{edu.degree}</h3>
                              <div>{edu.institution}</div>
                              <div className="text-xs">{edu.graduationDate}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-2/3 p-6">
                      <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-accent-500 pb-1">
                          Professional Summary
                        </h2>
                        <p className="text-gray-700">{userData.summary}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-accent-500 pb-1">
                          Achievements
                        </h2>
                        <div className="space-y-3">
                          {userData.achievements.map((achievement) => (
                            <div key={achievement.title} className="flex">
                              <div className="mr-2 text-accent-500">•</div>
                              <div>
                                <span className="font-medium text-gray-900">{achievement.title}</span>
                                <span className="text-gray-700"> - {achievement.description}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-accent-500 pb-1">
                          Work Experience
                        </h2>
                        <div className="space-y-6">
                          {userData.experience.map((exp) => (
                            <div key={exp.title}>
                              <div className="flex justify-between">
                                <h3 className="font-bold text-gray-900">{exp.title}</h3>
                                <div className="text-accent-600 text-sm">
                                  {exp.startDate} - {exp.endDate}
                                </div>
                              </div>
                              <div className="text-gray-700">{exp.company}, {exp.location}</div>
                              <p className="mt-2 text-gray-600">{exp.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Minimal template */}
                {selectedTemplate === 'minimal' && (
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <h1 className="text-3xl font-bold text-gray-900">{userData.name}</h1>
                      <p className="text-xl text-gray-600 mt-1">{userData.title}</p>
                      
                      <div className="flex justify-center flex-wrap mt-4 text-sm text-gray-600">
                        <div className="mx-3 mb-2">{userData.email}</div>
                        <div className="mx-3 mb-2">{userData.phone}</div>
                        <div className="mx-3 mb-2">{userData.location}</div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <p className="text-gray-700 text-center max-w-2xl mx-auto">{userData.summary}</p>
                    </div>
                    
                    <div className="mb-8">
                      <h2 className="text-center text-xl font-bold text-gray-900 mb-4">Skills</h2>
                      <div className="flex flex-wrap justify-center gap-2">
                        {userData.skills.map((skill) => (
                          <div key={skill.name} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">
                            {skill.name}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h2 className="text-center text-xl font-bold text-gray-900 mb-4">Achievements</h2>
                      <div className="space-y-2 max-w-2xl mx-auto">
                        {userData.achievements.map((achievement) => (
                          <div key={achievement.title} className="text-center">
                            <span className="font-medium text-gray-900">{achievement.title}</span>
                            <span className="text-gray-700"> - {achievement.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h2 className="text-center text-xl font-bold text-gray-900 mb-4">Work Experience</h2>
                      <div className="space-y-6 max-w-2xl mx-auto">
                        {userData.experience.map((exp) => (
                          <div key={exp.title} className="text-center">
                            <h3 className="font-bold text-gray-900">{exp.title}</h3>
                            <div className="text-gray-700">{exp.company}, {exp.location}</div>
                            <div className="text-gray-500 text-sm mb-2">
                              {exp.startDate} - {exp.endDate}
                            </div>
                            <p className="text-gray-600">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-center text-xl font-bold text-gray-900 mb-4">Education</h2>
                      <div className="space-y-4 max-w-2xl mx-auto">
                        {userData.education.map((edu) => (
                          <div key={edu.degree} className="text-center">
                            <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                            <div className="text-gray-700">{edu.institution}, {edu.location}</div>
                            <div className="text-gray-500 text-sm">
                              {edu.graduationDate}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
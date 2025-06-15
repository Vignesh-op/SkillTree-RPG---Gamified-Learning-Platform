import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, GitBranch, Target, Zap, Flame, Award } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="relative bg-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="text-center md:text-left md:max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Level Up Your <span className="text-accent-400">Real-Life Skills</span>
            </h1>
            <p className="mt-6 text-xl text-primary-100 max-w-3xl">
              SkillTree RPG transforms learning into an adventure. Master new skills, complete quests, and build your personal skill tree while having fun.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/dashboard" className="btn-primary py-3 px-8 text-lg w-full sm:w-auto">
                Start Your Journey
              </Link>
              <a href="#features" className="btn bg-white text-primary-700 hover:bg-gray-100 focus:ring-primary-500 py-3 px-8 text-lg w-full sm:w-auto">
                Learn More
              </a>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block absolute right-0 bottom-0 transform translate-y-1/4 translate-x-1/4">
          <div className="relative w-64 h-64 bg-accent-500 rounded-full opacity-10 animate-pulse-slow"></div>
        </div>
        <div className="hidden lg:block absolute right-64 top-20 transform -translate-x-1/2">
          <div className="relative w-40 h-40 bg-secondary-500 rounded-full opacity-10 animate-pulse-slow"></div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Gamify Your Learning Experience
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Turn boring study sessions into exciting quests and adventures
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="card flex flex-col items-center text-center p-8 hover:border-primary-300 border border-transparent">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-6">
                <GitBranch className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Skill Trees</h3>
              <p className="text-gray-600">
                Create personalized skill trees based on your interests and career goals. Visualize your progress as you level up.
              </p>
            </div>

            <div className="card flex flex-col items-center text-center p-8 hover:border-primary-300 border border-transparent">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-secondary-100 text-secondary-600 mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Skill-Based Quests</h3>
              <p className="text-gray-600">
                Complete real-world challenges that reinforce your learning and help you apply new skills in practical ways.
              </p>
            </div>

            <div className="card flex flex-col items-center text-center p-8 hover:border-primary-300 border border-transparent">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent-100 text-accent-600 mb-6">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Earn Achievements</h3>
              <p className="text-gray-600">
                Collect badges and certificates as you master new skills. Showcase your accomplishments on your profile.
              </p>
            </div>

            <div className="card flex flex-col items-center text-center p-8 hover:border-primary-300 border border-transparent">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-error-100 text-error-600 mb-6">
                <Flame className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Friend Challenges</h3>
              <p className="text-gray-600">
                Challenge friends to skill duels and compete to see who can learn faster or complete tougher quests.
              </p>
            </div>

            <div className="card flex flex-col items-center text-center p-8 hover:border-primary-300 border border-transparent">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-success-100 text-success-600 mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Mentor</h3>
              <p className="text-gray-600">
                Get personalized recommendations for what to learn next based on your goals, interests, and current skill level.
              </p>
            </div>

            <div className="card flex flex-col items-center text-center p-8 hover:border-primary-300 border border-transparent">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-warning-100 text-warning-600 mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resume Builder</h3>
              <p className="text-gray-600">
                Automatically generate professional resumes based on your skill tree progress and completed achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Transform How You Learn?
          </h2>
          <p className="mt-4 text-xl text-primary-200 max-w-3xl mx-auto">
            Join thousands of learners who have turned their education into an adventure
          </p>
          <div className="mt-8">
            <Link to="/dashboard" className="btn-accent py-3 px-8 text-lg">
              Get Started For Free
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-white font-display">SkillTree RPG</h3>
              <p className="mt-2 max-w-md">
                Gamified learning platform that helps you master real-world skills through an immersive RPG experience.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Product</h4>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="hover:text-white">Features</a></li>
                  <li><a href="#" className="hover:text-white">Pricing</a></li>
                  <li><a href="#" className="hover:text-white">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Company</h4>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Blog</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Legal</h4>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="hover:text-white">Privacy</a></li>
                  <li><a href="#" className="hover:text-white">Terms</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 SkillTree RPG. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
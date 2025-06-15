import React, { useState, useEffect, useCallback } from 'react';
import { Play, RefreshCw, Trophy } from 'lucide-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeSnippets = [
  {
    language: 'javascript',
    code: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`,
    title: 'Fibonacci Sequence'
  },
  {
    language: 'python',
    code: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr`,
    title: 'Bubble Sort'
  },
  {
    language: 'javascript',
    code: `const quickSort = arr => {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = arr.filter((x, i) => x < pivot && i !== 0);
  const right = arr.filter(x => x >= pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
};`,
    title: 'Quick Sort'
  }
];

const CodeRacer: React.FC = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState<number | null>(null);
  const [accuracy, setAccuracy] = useState<number | null>(null);

  const calculateStats = useCallback(() => {
    if (startTime && endTime) {
      const timeInMinutes = (endTime - startTime) / 60000;
      const wordsTyped = userInput.trim().split(/\s+/).length;
      const calculatedWpm = Math.round(wordsTyped / timeInMinutes);
      
      let correctChars = 0;
      const targetCode = codeSnippets[currentSnippet].code;
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === targetCode[i]) correctChars++;
      }
      const calculatedAccuracy = Math.round((correctChars / targetCode.length) * 100);
      
      setWpm(calculatedWpm);
      setAccuracy(calculatedAccuracy);
    }
  }, [startTime, endTime, userInput, currentSnippet]);

  useEffect(() => {
    if (userInput === codeSnippets[currentSnippet].code && isPlaying) {
      setEndTime(Date.now());
      setIsPlaying(false);
    }
  }, [userInput, currentSnippet, isPlaying]);

  useEffect(() => {
    if (endTime) {
      calculateStats();
    }
  }, [endTime, calculateStats]);

  const startGame = () => {
    setUserInput('');
    setStartTime(Date.now());
    setEndTime(null);
    setWpm(null);
    setAccuracy(null);
    setIsPlaying(true);
  };

  const resetGame = () => {
    setUserInput('');
    setStartTime(null);
    setEndTime(null);
    setWpm(null);
    setAccuracy(null);
    setIsPlaying(false);
  };

  const nextSnippet = () => {
    setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
    resetGame();
  };

  return (
    <div className="bg-white rounded-xl shadow-card p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Code Racer</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={nextSnippet}
            className="text-gray-600 hover:text-gray-900"
          >
            <RefreshCw className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            {codeSnippets[currentSnippet].title}
          </span>
          <span className="text-sm text-gray-500">
            {codeSnippets[currentSnippet].language}
          </span>
        </div>
        <div className="relative">
          <SyntaxHighlighter
            language={codeSnippets[currentSnippet].language}
            style={vs2015}
            className="rounded-lg text-sm"
          >
            {codeSnippets[currentSnippet].code}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className="mb-6">
        <textarea
          value={userInput}
          onChange={(e) => isPlaying && setUserInput(e.target.value)}
          className="w-full h-40 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="Start typing here..."
          disabled={!isPlaying}
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          {wpm !== null && accuracy !== null && (
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Trophy className="h-5 w-5 text-primary-600 mr-2" />
                <span className="font-medium">{wpm} WPM</span>
              </div>
              <div>
                <span className="font-medium">{accuracy}% Accuracy</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={resetGame}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Reset
          </button>
          <button
            onClick={startGame}
            disabled={isPlaying}
            className="btn-primary flex items-center"
          >
            <Play className="h-5 w-5 mr-2" />
            {isPlaying ? 'Typing...' : 'Start Typing'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeRacer;
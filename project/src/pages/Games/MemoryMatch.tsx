import React, { useState, useEffect } from 'react';
import { Trophy, RefreshCw } from 'lucide-react';

interface Card {
  id: number;
  content: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const programmingPairs = [
  { front: 'HTML', back: 'Markup Language' },
  { front: 'CSS', back: 'Styling Language' },
  { front: 'JavaScript', back: 'Programming Language' },
  { front: 'React', back: 'UI Library' },
  { front: 'Node.js', back: 'Runtime Environment' },
  { front: 'Python', back: 'Programming Language' },
  { front: 'SQL', back: 'Query Language' },
  { front: 'Git', back: 'Version Control' }
];

const MemoryMatch: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  const initializeGame = () => {
    const initialCards: Card[] = [];
    programmingPairs.forEach((pair, index) => {
      initialCards.push(
        { id: index * 2, content: pair.front, isFlipped: false, isMatched: false },
        { id: index * 2 + 1, content: pair.back, isFlipped: false, isMatched: false }
      );
    });

    // Shuffle cards
    for (let i = initialCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [initialCards[i], initialCards[j]] = [initialCards[j], initialCards[i]];
    }

    setCards(initialCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setStartTime(null);
    setEndTime(null);
    setGameStarted(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (id: number) => {
    if (!gameStarted) {
      setGameStarted(true);
      setStartTime(Date.now());
    }

    if (
      flippedCards.length === 2 ||
      flippedCards.includes(id) ||
      cards[id].isMatched
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [firstId, secondId] = newFlippedCards;
      const firstCard = cards[firstId];
      const secondCard = cards[secondId];

      if (
        (programmingPairs.some(pair => 
          (pair.front === firstCard.content && pair.back === secondCard.content) ||
          (pair.back === firstCard.content && pair.front === secondCard.content)
        ))
      ) {
        setMatchedPairs(matchedPairs + 1);
        setCards(cards.map(card =>
          card.id === firstId || card.id === secondId
            ? { ...card, isMatched: true }
            : card
        ));
        setFlippedCards([]);

        if (matchedPairs + 1 === programmingPairs.length) {
          setEndTime(Date.now());
        }
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const getTimeElapsed = () => {
    if (!startTime || !endTime) return null;
    const seconds = Math.floor((endTime - startTime) / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-card p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Memory Match</h2>
        <button
          onClick={initializeGame}
          className="text-gray-600 hover:text-gray-900"
        >
          <RefreshCw className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {cards.map(card => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`
              aspect-w-3 aspect-h-4 rounded-lg cursor-pointer transform transition-all duration-300
              ${card.isMatched || flippedCards.includes(card.id)
                ? 'rotate-y-180'
                : ''
              }
              ${card.isMatched
                ? 'bg-success-100 border-success-500'
                : 'bg-primary-100 border-primary-300'
              }
            `}
          >
            <div className="flex items-center justify-center p-4 border-2 rounded-lg">
              <span className="text-sm font-medium text-center">
                {card.isMatched || flippedCards.includes(card.id)
                  ? card.content
                  : '?'
                }
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <div className="flex space-x-6">
          <div className="flex items-center">
            <Trophy className="h-5 w-5 text-primary-600 mr-2" />
            <span className="font-medium">{matchedPairs} / {programmingPairs.length} Pairs</span>
          </div>
          <div>
            <span className="font-medium">{moves} Moves</span>
          </div>
          {getTimeElapsed() && (
            <div>
              <span className="font-medium">Time: {getTimeElapsed()}</span>
            </div>
          )}
        </div>

        {matchedPairs === programmingPairs.length && (
          <div className="text-success-600 font-medium flex items-center">
            <Trophy className="h-5 w-5 mr-2" />
            Completed!
          </div>
        )}
      </div>
    </div>
  );
};

export default MemoryMatch;
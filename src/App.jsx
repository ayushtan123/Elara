import { useState } from 'react';
import './App.css';
import './index.css';
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSplit, setIsSplit] = useState(false);
  const [numFlashcards, setNumFlashcards] = useState(3);

  async function getAnswer() {
    setIsLoading(true);
    setAnswer(["Loading ...\n Please Wait"]);
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${
          import.meta.env.VITE_API_KEY}`,
        method: "post",
        data: {
          "contents": [
            {
              "parts": [
                {
                  "text": question + ". Generate the answer in around 100 words. Please divide the answer into " + numFlashcards + " distinct parts. Each part should be concise and self-contained. Display the answer in separate paragraphs without any text styles."
                }
              ]
            }
          ]
        }
      });
      const generatedAnswer = response.data.candidates[0].content.parts[0].text;
      const parts = isSplit ? generatedAnswer.split('\n').filter(part => part.trim() !== '') : [generatedAnswer];
      if (parts.length > 16) {
        setAnswer(["Exceeded maximum limit of 15 flashcards. Upgrade to Pro"]);
      } else {
        setAnswer(parts.slice(0, numFlashcards));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setAnswer(["Sorry - Something went wrong. Please try again!"]);
    } finally {
      setIsLoading(false);
    }
  }

  const renderFlashcards = () => {
    if (answer.length === 1) {
      return (
        <div className="flashcard single">
          <p>{answer[0]}</p>
        </div>
      );
    } else {
      return (
        <div className="flashcards">
          {answer.map((part, index) => (
            <div key={index} className="flashcard">
              <p>{part}</p>
              <span className="flashcard-number">{index + 1}</span>
            </div>
          ))}
        </div>
      );
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="app">
      <nav className="navbar">
        <div>
          <img className="elaraL" src="/images\elara1.png" alt="ELARA" /> 
        </div>
        <h1 className="logoName">ELARA</h1>
      </nav>
      <div className="container">
        <textarea 
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="How can I help you today?"
        ></textarea>
        <div className="options">
          <label>
            <input 
              type="checkbox" 
              checked={isSplit} 
              onChange={() => setIsSplit(!isSplit)} 
            />
            {!isSplit && "Display in flashcards"}
          </label>
          {isSplit && (
            <div>
              <label>Number of Flashcards:</label>
              <input 
                type="number" 
                value={numFlashcards} 
                onChange={(e) => setNumFlashcards(e.target.value)} 
                min="1"
                max="50"
              />
            </div>
          )}
        </div>
        <button className="submitBTN"
          onClick={getAnswer}
        >
          Generate Answer
        </button>
        {isLoading && (
          <div className="spinner-overlay">
            <div className="spinner-container" />
          </div>
        )}
        {!isLoading && renderFlashcards()}
      </div>
      <footer className="footer">
        <div>Built using  <a href="https://gemini.google.com/">
          <img src="/images/Google_Gemini_logo.svg.png" alt="gemini" width="100px" height="40px" />
        </a></div>
        <p>©️ All Rights Reserved {currentYear}</p>
        <p> Made by <a className="fname" href="https://github.com/ayushtan123">Ayush Tandon</a></p>
      </footer>
    </div>
  );
}

export default App;

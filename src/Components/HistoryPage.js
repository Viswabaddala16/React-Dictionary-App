import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './SearchHistory.css';
function HistoryPage() {
  // Select the 'history' property from the Redux state
  const searchHistory = useSelector((state) => state.history);

  return (
    <div className="search-history">
      <h2>Search History</h2>
      {searchHistory.length === 0 ? (
        <p style={{marginLeft:"35px"}}>No search history details</p>
      ) : (
        <ul>
          {searchHistory.map((word, index) => (
            <li key={index}>
              <Link to={`/word/${word}`}><a href='#'>{word}</a></Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HistoryPage;

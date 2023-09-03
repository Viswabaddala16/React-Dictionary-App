import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addWordToHistory } from '../Store/actions';
import { useDispatch } from 'react-redux';
import './navbar.css';

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchWord, setSearchWord] = useState('');

  async function handleSearch() {
    if (searchWord.trim() === '') {
      return "Type the words";
    }
    dispatch(addWordToHistory(searchWord));
    navigate(`/word/${searchWord}`);
  }

  return (
    <div className='nav-container'>
      <div>
        <input
          type="text"
          value={searchWord}
          placeholder="Search the word"
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default HomePage;

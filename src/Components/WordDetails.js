import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchWordDetails } from '../services/api';
import './WordDetails.css'; // Import your CSS file

function WordDetails() {
  const { word } = useParams();
  const [wordDetails, setWordDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWord() {
      try {
        const data = await fetchWordDetails(word);
        setWordDetails(data);
      } catch (error) {
        console.error("Error in fetching", error);
      } finally {
        setLoading(false);
      }
    }
    fetchWord();
  }, [word]);

  return (
    <div className="word-details-container">
      {loading ? (
        <p>Loading</p>
      ) : wordDetails.length > 0 ? (
        wordDetails.map((wordDetail, wordIndex) => (
          <div key={wordIndex} className="word-box">
            <h2>Word Details for "{word}"</h2>
            <div className="phonetics">
              <h3>Phonetics:</h3>
              {wordDetail.phonetics.map((phonetic, phoneticIndex) => (
                <div key={phoneticIndex}>
                  <p>{phonetic.text}</p>
                  <audio controls>
                    <source src={phonetic.audio} type='audio/mpeg' />
                  </audio>
                </div>
              ))}
            </div>
            <div className="meanings">
              <h3>Meanings:</h3>
              {wordDetail.meanings.map((meaning, meaningIndex) => (
                <div key={meaningIndex} className="meaning-definition">
                  <h4 className="part-of-speech">Part Of Speech: {meaning.partOfSpeech}</h4>
                  {meaning.definitions.map((definition, defIndex) => (
                    <div key={defIndex} className="definition">
                      <p>Definition: {definition.definition}</p>
                      {definition.synonyms && definition.synonyms.length > 0 && (
                        <p className="synonyms-antonyms">Synonyms: {definition.synonyms.join(", ")}</p>
                      )}
                      {definition.antonyms && definition.antonyms.length > 0 && (
                        <p className="synonyms-antonyms">Antonyms: {definition.antonyms.join(", ")}</p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No details available for '{word}'</p>
      )}
    </div>
  );
}

export default WordDetails;

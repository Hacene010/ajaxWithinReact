import { useEffect, useState } from 'react';
import axios from 'axios';

export default function QuoteCard() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(({ data }) => {
        setQuotes(data);
      });
  }, []);
  const getNewQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(({ data }) => {
        setQuotes(data);
      });
  };
  return (
    <>
      <button type="button" onClick={getNewQuote}>
        Next quote
      </button>
      {quotes.map((quote) => {
        return (
          <>
            <h1>{quote.character}</h1>
            <img src={quote.image} alt="img" />
            <p>{quote.quote}</p>
          </>
        );
      })}
    </>
  );
}

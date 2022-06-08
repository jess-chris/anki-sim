import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const ViewDeck = ({ decks }) => {

  const navigate = useNavigate();
  const { id } = useParams();
  const currentDeck = decks[id];
  const totalQuestions = Object.keys(currentDeck).length;

  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(currentDeck[currentIndex]);
  const [showAnswer, setShowAnswer] = useState(false);

  const goNext = (e) => {

    e.preventDefault();

    setShowAnswer(false);

    if (currentIndex !== totalQuestions) {
      setCurrentIndex(currentIndex + 1);
      setCurrentQuestion(currentDeck[currentIndex + 1]);
    } else {
      setCurrentIndex(1);
      setCurrentQuestion(currentDeck[1])
    }
  };

  const goBack = (e) => {

    e.preventDefault();

    setShowAnswer(false);

    if (currentIndex !== 1) {
      setCurrentIndex(currentIndex - 1);
      setCurrentQuestion(currentDeck[currentIndex - 1]);
    } else {
      setCurrentIndex(totalQuestions);
      setCurrentQuestion(currentDeck[totalQuestions])
    }
  };


  const goHome = (e) => {
    e.preventDefault();

    navigate('/');
  }


  const displayAnswer = (e) => {

    e.preventDefault();

    showAnswer ? setShowAnswer(false) : setShowAnswer(true);

  };


  return (
    <>
    <i onClick={goHome} id='home-btn' className="fa-solid fa-circle-arrow-left fa-2xl"></i>
    <div className='main-cont'>


      <div className='view-deck'>

        <span id='question-count'>{`${currentIndex} / ${totalQuestions}`}</span>

        <h2>{currentQuestion?.question}</h2>

        <pre><code><ol>

        {currentQuestion?.code?.map((ele) => {
          return (
            <li key={(Date.now() + Math.random()).toString()}>{ele}</li>
          )
        })}
        </ol></code></pre>

        <div id='forward-back-btns'>
        <button onClick={goBack}><i className="fa-solid fa-backward"></i></button>
        <button onClick={goNext}><i className="fa-solid fa-forward"></i></button>
        </div>

      </div>
      
      <button onClick={displayAnswer} className='main-btns'>Show answer</button>

      {showAnswer && showAnswer && (
        <div className='answer-display'>

          <h3>{currentQuestion?.answer}</h3>

        </div>
      )}


    </div>
    </>
  )


};

export default ViewDeck;
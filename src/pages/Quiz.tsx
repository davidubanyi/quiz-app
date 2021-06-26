import React, { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useQuiz } from "../utils";
import { fetchQuestions } from "../api";
import Button from "../components/Button";
import ShowQuestion from "../components/ShowQuestion";

const Questions = () => {
  let history = useHistory();
  const { number } = useParams<{ number: string }>();
  const { questions, status, error, run, setAnswer, results } = useQuiz();

  useEffect(() => {
    if (questions.length > 0) {
      return;
    } else {
      run(fetchQuestions());
    }
  }, []);

  function handleChoice(choice: string) {
    const currentQuestion = questions[+number - 1];
      if (currentQuestion.correct_answer === choice) {
        setAnswer({ correct: true, question: currentQuestion.question })
      } else {
        setAnswer({ correct: false, question: currentQuestion.question })
      }
  }

  useEffect(
    () => {
      //if the page refreshes or changes suddenly
      if (results.length === 0 && +number > 1) {
        history.push("/questions/1");
      }
      if (results.length === 0) {
        return;
      }
      if (+number === 10) {
        history.push("/results", { results });
      } else {
        history.push(`/questions/${+number + 1}`);
      }
    },
    // eslint-disable-next-line
    [results]
  );

  if (status === "idle" || status === "pending") {
    return <div className="page">Loading</div>;
  }
  if (error || status === "rejected") {
    return <div className="page">There was an error, <Link to="/">Please try again</Link></div>;
  }
  if (status === "resolved") {
    const currentQuestion = {
      ...questions[+number - 1],
      number : +number,
    };
    return (
      <div className="page">
        <ShowQuestion currentQuestion={currentQuestion} />
        <div>
          <Button handleClick={handleChoice} type="True" />
          <Button handleClick={handleChoice} type="False" />
        </div>
      </div>
    );
  }
};

export default Questions;

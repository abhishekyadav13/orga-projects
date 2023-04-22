import React, { useState } from "react";

const Survey = () => {
  const [questions, setQuestions] = useState([
    { id: 1, question: "How Satisfied are You with our Products?", answer: null },
    { id: 2, question: "How fair are the prices compared to similar retailers?", answer: null },
    { id: 3, question: "How satisfied are you with the value for money of your purchase?", answer: null },
    { id: 4, question: "On a Scale of 1-10 how would you recommend us to your friends and family?", answer: null },
    { id: 5, question: "What could we do to improve our service?", answer: "" }
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handlePrevClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].answer = selectedValue;
    setQuestions(updatedQuestions);
  };

  const handleTextInputChange = (event) => {
    const textValue = event.target.value;
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].answer = textValue;
    setQuestions(updatedQuestions);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userId = Math.floor(Math.random() * 1000000);


  const feedbackData = {
    userId,
    feedback: questions.map((question) => ({
      question: question.question,
      answer: question.answer,
    })),
  };

  localStorage.setItem(`feedback_${userId}`, JSON.stringify(feedbackData));
    alert("Feedback saved successfully!");
  };

  const currentQuestionObj = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-[36rem] mx-auto bg-white p-8 border rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-6">{currentQuestionObj.question}</h2>
        {currentQuestionObj.answer === null && currentQuestionObj.id!==4 &&(
          <div className="flex flex-row gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="rating"
                value="1"
                onChange={handleRadioChange}
                className="form-radio h-4 w-4 text-red-600"
              />
              <span className="ml-2">1</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="rating"
                value="2"
                onChange={handleRadioChange}
                className="form-radio h-4 w-4 text-red-600"
              />
              <span className="ml-2">2</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="rating"
                value="3"
                onChange={handleRadioChange}
                className="form-radio h-4 w-4 text-red-600"
              />
              <span className="ml-2">3</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="rating"
                value="4"
                onChange={handleRadioChange}
                className="form-radio h-4 w-4 text-red-600"
              />
              <span className="ml-2">4</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="rating"
                value="5"
                onChange={handleRadioChange}
                className="form-radio h-4 w-4 text-red-600"
              />
              <span className="ml-2">5</span>
            </label>
          </div>
        )}
        {currentQuestionObj.answer === null && currentQuestionObj.id===4 &&(
          <div className="flex flex-row gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="rating"
                value="1"
                onChange={handleRadioChange}
                className="form-radio h-4 w-4 text-red-600"
              />
              <span className="ml-2">1</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="rating"
                value="2"
                onChange={handleRadioChange}
                className="form-radio h-4 w-4 text-red-600"
              />
              <span className="ml-2">2</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="rating"
                value="3"
                onChange={handleRadioChange}
                className="form-radio h-4 w-4 text-red-600"
              />
              <span className="ml-2">3</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="rating"
                value="4"
                onChange={handleRadioChange}
                className="form-radio h-4 w-4 text-red-600"
              />
              <span className="ml-2">4</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="rating"
                value="5"
                onChange={handleRadioChange}
                className="form-radio h-4 w-4 text-red-600"
              />
              <span className="ml-2">5</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="rating"
                value="6"
                onChange={handleRadioChange}
                className="form-radio h-4 w-4 text-red-600"
              />
              <span className="ml-2">6</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="rating"
                value="7"
                onChange={handleRadioChange}
                className="form-radio h-4 w-4 text-red-600"
              />
              <span className="ml-2">7</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="rating"
                value="8"
                onChange={handleRadioChange}
                className="form-radio h-4 w-4 text-red-600"
              />
              <span className="ml-2">8</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="rating"
                value="9"
                onChange={handleRadioChange}
                className="form-radio h-4 w-4 text-red-600"
              />
              <span className="ml-2">9</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="rating"
                value="10"
                onChange={handleRadioChange}
                className="form-radio h-4 w-4 text-red-600"
              />
              <span className="ml-2">10</span>
            </label>
          </div>
        )}
        {currentQuestionObj.answer !== null && (
          <input
            type="text"
            value={currentQuestionObj.answer}
            onChange={handleTextInputChange}
            className="border rounded-lg p-2 w-full"
          />
        )}
        <div className="flex justify-between mt-6">
          {currentQuestion !== 0 && (
            <button
              type="button"
              onClick={handlePrevClick}
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
            >
              Prev
            </button>
          )}
          {currentQuestion !== questions.length - 1 && (
            <button
              type="button"
              onClick={handleNextClick}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Next
            </button>
          )}
          {currentQuestion === questions.length - 1 && (
            <button
              type="submit"
              onClick={handleFormSubmit}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Survey;







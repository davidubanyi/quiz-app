import React from "react"

const ShowQuestion = ({currentQuestion}:{currentQuestion:{question:string, category:string, number:number}}) => {
    function createMarkup(){
        return {__html: currentQuestion.question}
    }
    return (
        <>
            <h2 className="title--h2">{currentQuestion.category}</h2>
            <div>
                <div className="question-box" dangerouslySetInnerHTML={createMarkup()} />
                <div>Question {currentQuestion.number} of 10</div>
            </div>
        </>
    )
} 

export default ShowQuestion
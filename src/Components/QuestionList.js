import React from 'react'

function QuestionList({ question, options, getSelOption, currAnswer }) {

    return (
        <>
            <div>
                <h2>{question}</h2>
                <ul>
                    {options.map((option, index) => (
                        <li key={index} onClick={() => getSelOption(option)}
                         className={currAnswer === option ? 'selected' : ''}>{option}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default QuestionList
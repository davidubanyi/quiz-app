import React from 'react'

const Result = ({question, correct}:{question:string, correct:boolean}) => {
    function createMarkup(){
        return {__html: question}
    }
    return (
        <div style={{
            fontSize: '1.2em',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px'
        }}>
            <div style={{
                marginRight: '20px'
            }}>{correct ? '+' : '-'}</div>
            <p dangerouslySetInnerHTML={createMarkup()} />
        </div>
    )
}

export default Result

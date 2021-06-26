import React from 'react'

type ResultProps = {
    question:string, correct:boolean
}

const Result:React.FC<ResultProps> = ({question, correct}) => {
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

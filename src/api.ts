import axios from "axios"

async function fetchQuestions(){
    const response = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    return response.data.results
}

export {fetchQuestions}
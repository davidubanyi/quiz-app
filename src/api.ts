import axios from "axios"

/**
 * fetches the questions from the api using the provided url and params
 *
 * @return  {[questions]}  an array of the questions from the api
 */
async function fetchQuestions(){
    const response = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')

    return response.data.results
}

export {fetchQuestions}
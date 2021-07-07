import StartQuiz from './pages/StartQuiz'
import Questions from './pages/Quiz'
import Results from './pages/Results'

const routes = [
    {
        path: '/results',
        component: Results
    },
    {
        path: "/questions/:number",
        component: Questions
    },
    {
        path: "/",
        component: StartQuiz
    }
]

export default routes
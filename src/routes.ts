import Starter from './pages/QuizStarter'
import Questions from './pages/Questions'
import Results from './pages/QuizEnded'

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
        component: Starter
    }
]

export default routes
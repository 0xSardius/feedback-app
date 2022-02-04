import { useState } from "react";
import Header from "./components/Header"
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'


export default function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <>
        <Header />
        <div className="container">
            <FeedbackList feedback={feedback}/>
        </div>
        
        </>
    )
}
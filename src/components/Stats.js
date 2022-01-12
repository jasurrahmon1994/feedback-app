import {useContext} from 'react';
import Context from './Context';
function Stats() {
    const {feedback} = useContext(Context);
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length;
    
    return (
        <div className="feedback-stats">
            <h4>{feedback.length} ta izoh</h4>
            <h4>O'rtacha baho: {isNaN(average) ? 0 : average} </h4>
        </div>
    )
}

export default Stats

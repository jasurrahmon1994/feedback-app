import {useContext} from 'react';
import {FaTimes, FaEdit} from 'react-icons/fa'
import Card from "./Card";
import Context from './Context';

function Feedback({ item }) {
    const {deleteFeedback, editFeedback} = useContext(Context);

    // Giving class conditionally

	return (
		<div>
			<Card reverse={false}>
				<div className="num-display">{item.rating}</div>
                <button className="close" onClick={() => deleteFeedback(item.id)} >
                    <FaTimes color='purple' />
                </button>
                <button className="edit" onClick={() => {editFeedback(item)}} >
                    <FaEdit color='purple' />
                </button>
				<div className="text-display">{item.text}</div>
			</Card>
		</div>
	);

    // Giving styles conditionally

    // return (
    //     <div className="card" style={{
    //         backgroundColor: reverse ? 'rgba(0,0,0,0.4)': "#fff",
    //         color: reverse ? '#fff' : '#000'
    //     }} >
    //         {children}
    //     </div>
    // )

}

export default Feedback;

import { motion, AnimatePresence } from "framer-motion";
import Feedback from "./Feedback";
import {useContext} from 'react';
import Context from './Context';

function List() {
	const {feedback} = useContext(Context);
	if (!feedback || feedback.length === 0) {
		return <p>Izoh mavjud emas</p>;
	}
	return (
		<div className="feedback-list">
			<AnimatePresence>
				{feedback.map((item) => (
					<motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						<Feedback key={item.id} item={item} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
}

export default List;

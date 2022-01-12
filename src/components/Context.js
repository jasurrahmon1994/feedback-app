import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
const Context = createContext();

export const Provider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: "Context hookni sinash uchun test qilinyapti 1",
			rating: 10,
		},
		{
			id: 2,
			text: "Context hookni sinash uchun test qilinyapti 2",
			rating: 10,
		},
		{
			id: 3,
			text: "Context hookni sinash uchun test qilinyapti 3",
			rating: 10,
		},
	]);

	const [edit, setEdit] = useState({
		item: {},
		edit: false,
	});

	const deleteFeedback = (id) => {
		if (window.confirm("Ishonchingiz komilmi?")) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	const editFeedback = (item) => {
		setEdit({
			item,
			edit: true,
		});
	};

	const updateFeedback = (id, updItem) => {
		setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item ))
	};

	return (
		<Context.Provider value={{ feedback, edit, deleteFeedback, addFeedback, editFeedback, updateFeedback }}>
			{children}
		</Context.Provider>
	);
};
export default Context;

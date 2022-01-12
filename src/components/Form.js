import { useState, useEffect } from "react";
import Button from "./Button";
import Card from './Card';
import Rating from "./Rating";
import {useContext} from 'react';
import Context from './Context';

function Form() {
    
    const [rating, setRating] = useState(10);
    const [text, setText] = useState('');
    const [button, setButton] = useState(true);
    const [message, setMessage] = useState('');

    const {addFeedback, updateFeedback, edit} = useContext(Context);
    useEffect(() => {
        if(edit.edit === true) {
            setButton(true);
            setText(edit.item.text);
            setRating(edit.item.rating)
        }
    }, [edit])

    const handleText = e => {
        if(text === '') {
            setMessage(null);
            setButton(true);
        } else if (text !== '' && text.trim().length <= 10) {
            setButton(true);
            setMessage('Kiritilgan matn kamida 10ta simbol bolishi lozim');
        } else {
            setButton(false);
            setMessage(null)
        }

        setText(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newFeedback = {
            text: text,
            rating: rating
        }

        if(edit.edit === true) {
            updateFeedback(edit.item.id, newFeedback)
        } else {
            addFeedback(newFeedback);
        }

        setText('');
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Marhamat, xizmatimizga baho bering.</h2>
                <Rating select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input type="text"
                    onChange={handleText} value={text}
                    />
                    <Button type='submit' version='primary' isDisabled={button} >
                        Send
                    </Button>
                </div>
            </form>
            { message && <div className="message">{message}</div> } 
        </Card>
    )
}

export default Form

import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../actions/setauth';

interface TextProps {
    data?: any
}

const Form: React.FC<TextProps> = (props) => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => { dispatch(logOut()) }}>Logout</button>
            <h1>{props.data.name}</h1>
            <p>{props.data.id}</p>
            <p>{props.data.email}</p>
        </div>
    );
};

export default Form;
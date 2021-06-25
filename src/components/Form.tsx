import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../actions/setauth';
import UserCardFolder from './Profile/UserCardFolder'

interface TextProps {
    data?: any
}

const Form: React.FC<TextProps> = (props) => {
    const dispatch = useDispatch();
    return (
        <div>
            <UserCardFolder user={props.data.name} id={props.data.id} email={props.data.email} />
            <div className='flex_user'>
                <button onClick={() => { dispatch(logOut()) }}>Logout</button>
            </div>
        </div>
    );
};

export default Form;
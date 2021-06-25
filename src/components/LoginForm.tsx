import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

interface TextProps {
    login?: any;
};

interface RootState {
    error: boolean
}
const Login: React.FC<TextProps> = (props) => {
    var checked: any;
    const [details, setDetails] = useState({ email: "", password: "" });
    const submitHandler = (e: any) => {
        e.preventDefault();
        validate(details.email)
        if (checked && details.password.length > 2) {
            props.login(details)
        }
    };
    const error = (state: RootState) => state.error
    const isError = useSelector(error)
    const onEmailChange = useCallback((e) => setDetails({ ...details, email: e.target.value }), [validate(details.email)]);

    function validate(mail: any) {
        let controlMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        if (mail === "") {
            return false;
        };
        if (!controlMail.test(mail)) {
            checked = false;
            return false;
        };
        checked = true;
    };

    return (
        <div className='formContent'>
            <div className='formContainer'>
                <form onSubmit={submitHandler}>
                    <div className='formContentFirst'>
                        <input onChange={onEmailChange} value={details.email} name='email' type="text" id='first' placeholder='E-mail' />
                        <div className={checked ? 'check' : 'check active'}>
                            <p>Invalid E-mail</p>
                        </div>
                    </div>
                    <div className='formContentLast'>
                        <input onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} name='password' type="password" id='last' placeholder='Password' />
                        <div className={details.password.length > 2 ? 'check' : 'check active'}>
                            <p>Short Password</p>
                        </div>
                    </div>
                    <div className='flex_user'>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <div className={isError ? 'check active' : 'check'}>
                    <p>Ops... Invalid request :(</p>
                </div>
            </div>
        </div>
    )
}

export default Login;
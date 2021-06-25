import LoginForm from './LoginForm';
import { useDispatch } from 'react-redux';
import { logIn } from '../actions/setauth';

const Login: React.FC = (props) => {
    const dispatch = useDispatch();
    function Login(details: any) {
        let initEmail = details.email;
        let initPassword = details.password;
        dispatch(logIn(initEmail, initPassword));
    }
    return (
        <LoginForm login={Login} />
    )
}

export default Login;
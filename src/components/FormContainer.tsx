import Form from './Form';
import { connect } from 'react-redux';
import { setUserData } from '../actions/setauth';

const mapDispatchToProps = (dispatch: any) => {
    return setUserData();
};
let mapStateToProps = (state: any) => {
    return {
        data: state.auth
    }
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;
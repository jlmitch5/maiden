import { connect } from 'react-redux';
import ReplActivity from './repl-activity';

import {
    replSend
} from './model/repl-actions';


const mapStateToProps = (state) => {
    let { activeRepl, buffers } = state.repl;
    return { activeRepl, buffers };
}

const mapDispatchToProps = (dispatch) => {
    return {
        replSend: (component, value) => {
            dispatch(replSend(component, value))
        }
    }
}

const BoundReplActivity = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ReplActivity);

export default BoundReplActivity;

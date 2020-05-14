import Hello from '../components/Home';
import * as actions from '../store/Home/actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootState } from '../store'
 
export function mapStateToProps({ Home }: IRootState) {
  return {
    name: Home.name || 'world'
  };
} 

export function mapDispatchToProps(dispatch: Dispatch<actions.homeActions>) {
  return { 
    onSetName: () => dispatch(actions.setName('Alan'))
    // onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    // onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
} 

export default connect(mapStateToProps, mapDispatchToProps)(Hello);

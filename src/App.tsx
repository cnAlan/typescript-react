import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IRootState } from './store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import * as actions from './store/demo/actions';
import * as asyncactions from './store/demo/async-actions';
import { DemoActions } from './store/demo/types';

const mapDispatcherToProps = (dispatch: Dispatch<DemoActions>) => {
  return {
      addItem: (item: string) => asyncactions.addItemAsync(dispatch, item)
  }
}

const mapStateToProps = ({ demo }: IRootState) => {
    const { list, loading } = demo;
    return { list, loading };
}

interface IState {
  inputText: string
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;


class App extends React.Component<ReduxType, IState> {
  public state: IState = {inputText: ''};
  public onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({inputText: e.target.value});
  }
  public onAddClick = () => {
    this.props.addItem(this.state.inputText);
    this.setState({inputText: ''});
  }

  public render() {
    const { list, loading } = this.props;
    return (
      <div style={{ margin: '20px' }}>
        <input value={this.state.inputText} onChange={this.onInputChange}/>
        <button onClick={this.onAddClick}>Add</button>
        <ul>
          {list.map(l => <li key={l}>{l}</li>)}
        </ul>
        {loading && <div>Loading...</div>}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(App);

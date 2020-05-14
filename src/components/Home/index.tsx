import * as React from 'react';
import './Hello.css';

export interface Props {
  name: string;
  onSetName?: () => void;
}

function Hello({ name, onSetName }: Props) {
  return (
    <div className="hello">
      <div className="greeting">
        Hello { name }
      </div>
      <div>
        <button onClick={onSetName}>-</button>
      </div>
    </div>
  );
}

export default Hello;

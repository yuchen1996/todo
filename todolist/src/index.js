import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import TodoList from "./List/TodoList";

/*ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

ReactDOM.render(<TodoList />, document.getElementById('root'));
//registerServiceWorker();

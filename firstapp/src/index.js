import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';

const App = () => {
    return(
        <div>
            <Header/>
            <h1>Hii To React from NareshIT</h1>
            <h2>This is heading 2</h2>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))
import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Tab from './components/Tab';

function App() {


    const [tab] = useState([
        { content: <p>This is the content for tab 1.</p> },
        { content: <p>Tab 2 content is showing here.</p> },
        { content: <p style={{ color: "blue" }}>Tab 3 is blue</p> }
    ]);


    return (
        <div className="App">
            <Tab tab={tab} />
        </div>
    );
}

export default App;

import React, {Component} from 'react';

import './App.css';
import database from '../../data.json'

import Header from '../Header/Header';
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header top={database.top} header={database.header}/>
                <Body sections={database.sections} form={database.form} events={database.events}/>
                <Footer footer={database.footer}/>
            </div>
        );
    }
}

export default App;

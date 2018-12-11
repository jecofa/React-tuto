import React, {Component} from 'react';
import Header from './Header';
import Products from './Products';
import Footer from './Footer';

//Class component

class FirstComponent extends Component{
    render() {
        return (
            <div>
                <Header />
                <Products />
                <Footer />
            </div>
        )
    }
}


export default FirstComponent;
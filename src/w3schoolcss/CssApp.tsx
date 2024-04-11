import React from 'react';
import './css_syntax.css';
// import  '../../node bootstrap/dist/css/bootstrap.css'
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css'



export default function CssApp() {
    return (
        <div >

            <h1>A Five Items Grid Layout</h1>

            <div className="grid-container">
                <div className="grid-item item1">1</div>
                <div className="grid-item item2">2</div>
                <div className="grid-item item3">3</div>
                <div className="grid-item item4">4</div>
                <div className="grid-item item5">5</div>
            </div>

            <p>Direct child elements(s) of the grid container automatically becomes grid items.</p>

            <p>Item 1, 2, and 5 are set to span multiple columns or rows.</p>


        </div>
    )
}

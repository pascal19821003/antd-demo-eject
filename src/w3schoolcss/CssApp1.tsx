import React from 'react';
import './css_syntax.css';
// import  '../../node bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'



export default function CssApp() {
    return (
        <div >
            <h1>Beautiful Norway</h1>

            <p>Norway has a total area of 385,252 square kilometers and a population of 5,438,657 (December 2020). Norway is bordered by Sweden, Finland and Russia to the north-east, and the Skagerrak to the south, with Denmark on the other side.</p>

            <p>Norway has beautiful mountains, glaciers and stunning fjords. Oslo, the capital, is a city of green spaces and museums. Bergen, with colorful wooden houses, is the srting point for cruises to the dramatic Sognefjord. Norway is also known for fishing, hiking and skiing.</p>
            <p>


            </p>
            <div className="iconEle">
                <i className="fa-solid fa-user"></i>
                <i className="fas fa-cloud"></i>
                <i className="fas fa-heart"></i>
                <i className="fas fa-car"></i>
                <i className="fas fa-file"></i>
                <i className="fas fa-bars"></i>
            </div>

            <div>

                <i className="glyphicon glyphicon-cloud"></i>
                <i className="glyphicon glyphicon-remove"></i>
                <i className="glyphicon glyphicon-user"></i>
                <i className="glyphicon glyphicon-envelope"></i>
                <i className="glyphicon glyphicon-thumbs-up"></i>
            </div>

            <Button as="a" variant="primary">
                Button as link
            </Button>
            <Button as="a" variant="success">
                Button as link
            </Button>

        </div>
    )
}

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.scss';
var imageDatas = require('./data/imageDatas.json');


imageDatas = (function genImageURL(imageDatasArr) {
    for (var i = 0, j = imageDatasArr.length; i < j; i++) {
        var singleImageData = imageDatasArr[i];

        singleImageData.imageURL = require('./images/' + singleImageData.fileName);

        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
})(imageDatas);

var ImgFigure = React.createClass({
    render:function(){
        return(
            <figure>
                <img src={this.props.data.imageURL}/>
                <figcaption>
                    <h2>{this.props.data.title}</h2>
                </figcaption>
            </figure>
        );
    }
});
var GalleryByReactApp = React.createClass({
    render: function(){
        var controllerUnits = [];
        var imgFigures=[];
        imageDatas.forEach(function(value){
            imgFigures.push(<ImgFigure data={value}/>);
        });
        return (
        <section className="stage" ref="stage">
            <section className="img-sec">
                {imgFigures}
            </section>
            <nav className="controller-nav">
                {controllerUnits}
            </nav>
        </section>
    );
    }
    
    
});
render(<GalleryByReactApp />, document.getElementById('content'));
      
/*var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());*/
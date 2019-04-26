import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Nav from './navBar';
import placeholder from './resources/blackbird.png';
import * as tf from '@tensorflow/tfjs';
import './imageupload.css';


// let model;
// (async function(){
//     model=await tf.loadModel(`/birdguide_tfjs_model/model.json`);
// })();

const IMAGENET_CLASSES = {
    0: 'egret',
    1: 'harpy',
    2: 'jabiru',
    3: 'macaw',
    4: 'toucan',
};

// async function predict(){
//
// }

/*$("#predict-button").click(async function(){
    let image= $('#selected-image').get(0);
    let tensor=preprocessImage(image);
    let prediction = await model.predict(tensor).data();
    let top5=Array.from(prediction)
                .map(function(p,i){
    return {
        probability: p,
        className: IMAGENET_CLASSES[i]
    };
    }).sort(function(a,b){
        return b.probability-a.probability;
    }).slice(0,5);

$("#prediction-list").empty();
top5.forEach(function(p){
    $("#prediction-list").append(`<li>${p.className}:${p.probability.toFixed(6)}</li>`);
});

});*/



class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: '', url: null};
      const { history } = this.props;
      //this.handleSubmit = this.handleSubmit.bind(this);

    }

    preprocessImage(image)
    {
        let tensor=tf.fromPixels(image)
        .resizeNearestNeighbor([224,224])
        .toFloat()
            let offset=tf.scalar(127.5);
            return tensor.sub(offset)
                        .div(offset)
                        .expandDims();
    }

    async getPrediction(tensor){
      let prediction = await this.model.predict(tensor).data();
      return prediction;
    }


    async componentDidMount(){
        this.model=await tf.loadModel(`http://localhost:3000/birdguide_tfjs_model/model.json`);
    };



    async _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      let image = document.getElementById('send');
      console.log(image)
      let tensor=this.preprocessImage(image);
      let prediction = await this.model.predict(tensor).data();
      let top5=Array.from(prediction)
                  .map(function(p,i){
      return {
          probability: p,
          className: IMAGENET_CLASSES[i]
      };
      }).sort(function(a,b){
          return b.probability-a.probability;
      }).slice(0,5);
      console.log(prediction);
      console.log(top5[0].className);
      let url='/info/' + top5[0].className;
      window.location = url;
    }



    _handleImageChange(e) {
      e.preventDefault();

      let reader = new FileReader();
      let file = e.target.files[0];

      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }

      reader.readAsDataURL(file)
    }

    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img className="img" id="send" src={imagePreviewUrl} />);

        console.log($imagePreview.props);
      } else {
        $imagePreview = (<img className="img" src={placeholder} />);
      }


      return (
        <div className="contentCon">
        <Nav/>
        <h3>...Use our tool to identify your bird!</h3>
          <div className="center">
                <div className="center">
                    {$imagePreview}
                </div>
                <div className="center">
                <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="fileInput"
                        type="file"
                        onChange={(e)=>this._handleImageChange(e)} />
                    <button className="submitButton"
                        type="submit"
                        onClick={(e)=>this._handleSubmit(e)}>Identify</button>
                </form>
            </div>
            
            
        </div>
        </div>
      )
    }
  }

 export default ImageUpload;
  //ReactDOM.render(<ImageUpload/>, document.getElementById("mainApp"));

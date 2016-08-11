import React, { Component, PropTypes } from 'react';
import { resize } from '../utils/image';
import { lang } from '../strings';

export default class Belgform extends Component {
   constructor(props){
      super(props);

      this.state = this.makeInitialState(props);
   }

   makeInitialState(props) {
      return {
         width: 0,
         height: 0,
         files: [],
         file: null,
         belgad: false
      }
   }

   render() {
      let { width, height, belgad } = this.state;
      return(
         <div>
            <input className="form-control" type="file" name="image" onChange={this.setFile}/> <br />

            <label>{lang.width}</label>
            <input type="number" min="1" max="100000" value={width} name="width" onChange={this.setWidth} className="form-control" /> <br />
            <label>{lang.height}</label>
            <input type="number" min="1" max="100000" value={height} name="height" onChange={this.setHeight} className="form-control" /> <br/>
            <button className={this.submitClass()} onClick={this.resizeImage}>{lang.belga}</button>
            <br />
            <br />
            <br />
            {belgad ? <label>Så jävla belgad:</label> : null}
            <img id="output-image" />
         </div>
      );
   }

   submitClass(){
      let { width, height, file } = this.state;
      return file && width && width > 0 && height && height > 0 ? 'btn btn-primary' : 'btn btn-primary bg-disabled';
   }

   setHeight = ev => {
      this.setState({height: ev.target.value});
   };

   setWidth = ev => {
      this.setState({width: ev.target.value})
   };

   setFile = ev => {
      let input = ev.target;
      if (input.files && input.files[0]) {
         this.setState({file: input.files[0], belgad: false});

      }
   };

   resizeImage = () => {
      let { file, width, height } = this.state;
      if (file) {
         resize(file, width, height);
         this.setState({belgad: true});
      }
   }
}
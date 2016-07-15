import React, { Component, PropTypes } from 'react';
import { resize } from '../utils/image';
import { connect } from 'react-redux';

class Root extends Component {
   constructor(props){
      super(props);
      this.state = this.makeInitialState(props);
   }

   makeInitialState(props) {
      return {
         width: 0,
         height: 0,
         files: [],
         belgad: false
      }
   }

   render() {
      let { width, height, belgad } = this.state;
      return (
         <div>
            <h2>Belga den jäveln</h2>
            <input className="form-control" type="file" name="image" onChange={this.setFile}/> <br />

            <label>W</label>
            <input type="number" min="1" max="100000" value={width} name="width" onChange={this.setWidth} className="form-control" /> <br />
            <label>H</label>
            <input type="number" min="1" max="100000" value={height} name="height" onChange={this.setHeight} className="form-control" /> <br/>
            <button className="btn btn-primary" onClick={this.resizeImage}>Belga!</button>
            <br />
            <br />
            <br />
            {belgad ? <label>Så jävla belgad:</label> : null}
            <img id="output-image" />
         </div>
      );
   }

   setHeight = ev => {
      this.setState({height: ev.target.value});
   };

   setWidth = ev => {
      this.setState({width: ev.target.value})
   };

   setFile = ev => {
      let input = ev.target;
      console.log(input.files[0]);
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

Root.propTypes = {
   dispatch: PropTypes.func.isRequired,
   appState: PropTypes.object.isRequired
};

function propProvider(reduxState, props) {
   const {appState} = reduxState;

   return {
      appState
   };
}

export default connect(propProvider)(Root);
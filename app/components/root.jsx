import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Belgform from './belg-form';
import { lang } from '../strings';

class Root extends Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      return (
         <div>
            <h2>{lang.title}</h2>
            <Belgform />
         </div>
      );
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
import React, { Component } from 'react';
import RightArrow from "./RightArrow";
import Grid from '@material-ui/core/Grid';
import '../styles/resume.css';
import Resume from './Resume';
import ContainerDimensions from 'react-container-dimensions'

class App extends Component {

  render() {
    const MD_WIDTH = 10;
    const LG_WIDTH = 8;
    return (
    <Grid container spacing={0} className="fullHeight">
      <Grid item md={(12 - MD_WIDTH) / 2.0} lg={(12 - LG_WIDTH) / 2.0}/>
      <Grid item xs={12} md={MD_WIDTH} lg={LG_WIDTH} className='resume-container '>
        <ContainerDimensions>
          { ({ height, width }) => <Resume height={height} width={width}/> }
        </ContainerDimensions>
      </Grid>
      <Grid item  md={(12 - MD_WIDTH) / 2.0} lg={(12 - LG_WIDTH) / 2.0}/>
    </Grid>
    );
  }


  render2() {
    return (
      <div>

      </div>
    );
  }
}

export default App;

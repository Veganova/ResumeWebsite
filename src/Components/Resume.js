import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import RightArrow from "./RightArrow";

class Resume extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <div>Viraj Patil | Other stuff</div>
        </Grid>

        <Grid item xs={3}>
          <RightArrow height={this.props.height} width={this.props.width}/>
        </Grid>
        <Grid item xs={9}/>

        <Grid item xs={3}>
          <RightArrow height={this.props.height} width={this.props.width}/>
        </Grid>
        <Grid item xs={9} style={{'background-color':'blue'}}/>
      </Grid>
    )
  }
}

export default Resume;
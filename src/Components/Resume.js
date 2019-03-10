import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import RightArrow from "./RightArrow";
import styled from 'styled-components';
import Education from "./Education";

const Name = styled.p`
  font-size: ${props => props.size}pt;
  font-weight: bold;
  display: inline;
`;

const MyGrid = styled(Grid)`
  padding-bottom: 5px;
`;


class Resume extends Component {
  render() {
    return (
      <MyGrid container>
        <MyGrid item xs={12}>
          <div><Name size={18}> Viraj Patil </Name> | Other stuff</div>
        </MyGrid>

        <MyGrid item xs={3}>
          <RightArrow text={"Projects"} height={this.props.height} width={this.props.width}/>
        </MyGrid><MyGrid item xs={9}/>
        <MyGrid item xs={10}>
          <Education height={this.props.height} width={this.props.width}/>
        </MyGrid>

        <MyGrid item xs={3}>
          <RightArrow text={"Technical Skills"} height={this.props.height} width={this.props.width}/>
        </MyGrid>
        <MyGrid item xs={9} style={{'background-color':'blue'}}/>
      </MyGrid>
    )
  }
}

export default Resume;
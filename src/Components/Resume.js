import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import RightArrow from "./RightArrow";
import styled from 'styled-components';
import ContentListing from "./ContentListing";
import styles from '../styles/styles';

const Name = styled.p`
  font-size: ${props => props.size}pt;
  font-weight: bold;
  display: inline;
`;

const MyGrid = styled(Grid)`
  padding-bottom: 5px;
  font-family: "gothic"
`;
const Nested = styled.div`
  .key {
    display: inline-block;
    vertical-align: top;
    text-decoration: underline;
    width: 30%;
    overflow-wrap: break-word;
  }
  
  .value {
    display: inline-block;
    width: 70%;
  }
`

const InnerNested = styled.div`
  padding-bottom: ${0.5 * styles.contentSpacing}px;
  .innerKey {
    display: inline-block;
    vertical-align: top;
    font-weight: 700;
    width: 20%;
    overflow-wrap: break-word;
  }
  
  .innerValue {
    display: inline-block;
    width: 80%;
  }
`


class Resume extends Component {
  render() {
    return (
      <MyGrid style={{"backgroundColor": styles.background}} container>
        <MyGrid item xs={12}>
          <div><Name size={18}> Viraj Patil </Name> | Other stuff</div>
        </MyGrid>

        <MyGrid item xs={6}>
          <div>
            <RightArrow text={"Education"} height={this.props.height} width={this.props.width}/>
          </div>
        </MyGrid><MyGrid item xs={6}/>
        <MyGrid item xs={12}>
          <ContentListing height={this.props.height} width={this.props.width} resumeContent={[
            [<h4>Northeastern University, Boston, MA</h4>, "2016 – present"],
            [<p>College of Computer and Information Science</p>, "Exp. 2020"],
            [<i> Candidate for a Bachelor of Science in Computer Science (minor in Mathematics) </i>, null],
            [<Nested>
              <div className="key">Related Courses</div>
              <div className="value">Object-Oriented Design, Algorithms & Data Structures, Computer
                Systems, Database Design, Networks & Distributed Systems
              </div>
            </Nested>],
            [<Nested>
              <div className="key">GPA</div>
              <div className="value" style={{fontWeight: 650}}>3.8/4</div>
            </Nested>],
            [<Nested>
              <div className="key">Honors</div>
              <div className="value">Dean's List</div>
            </Nested>],
            [<h4>Lexington High School, Lexington, MA</h4>, "June, 2016"],
            [<Nested>
              <div className="key">Activities & Honors</div>
              <div className="value">National Honor Society, Math Tutor, Robotics, Animation Club</div>
            </Nested>]
          ]}/>
        </MyGrid>

        <MyGrid item xs={6}>
          <RightArrow text={"Technical Skills"} height={this.props.height} width={this.props.width}/>
        </MyGrid>
        <MyGrid item xs={6}/>
        <MyGrid item xs={12}>
          <ContentListing height={this.props.height} width={this.props.width} resumeContent={[
            [<Nested>
              <div className="key">Languages & Frameworks</div>
              <div className="value">
                <InnerNested><div className="innerKey">Native</div><div className="innerValue">Java, JavaScript(ES6), HTML5, CSS3, React-Redux</div></InnerNested>
                <InnerNested><div className="innerKey">Frequenter</div><div className="innerValue">SQL, jQuery, NodeJS, ExpressJS, C, Racket</div></InnerNested>
                <InnerNested><div className="innerKey">Tourist</div><div className="innerValue">Python, Spring, MongoDB, C++, Bash, Scala</div></InnerNested>
              </div>
            </Nested>],
            [<Nested>
              <div className="key">Systems</div>
              <div className="value">Linux, Android, MacOS, Windows</div>
            </Nested>],
            [<Nested>
              <div className="key">Tools</div>
              <div className="value">IntelliJ, Android SDK, Git, npm, Maven, Webpack</div>
            </Nested>],
            [<Nested>
              <div className="key">Other</div>
              <div className="value">TDD w/ JUnit, Selenium, Bootstrap</div>
            </Nested>]
          ]}/>
        </MyGrid>

      </MyGrid>
    )
  }
}

export default Resume;
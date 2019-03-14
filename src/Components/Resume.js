import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import RightArrow from "./RightArrow";
import styled from 'styled-components';
import ContentListing from "./ContentListing";
import styles from '../styles/styles';
import {Motion, spring} from "react-motion";

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
      <Motion
        defaultStyle={{scale: 0.0}}
        style={{scale: spring(1, {stiffness: 45, damping: 6})}}
      >
        {interpolatedStyles => {
          return (
          <MyGrid style={{"backgroundColor": styles.background}} container>
            <MyGrid item xs={12}>
              <div><Name size={18}> Viraj Patil </Name> | Other stuff</div>
            </MyGrid>
            <MyGrid item xs={6}>
              <div>
                <RightArrow scale={interpolatedStyles.scale}  text={"Education"} height={this.props.height} width={this.props.width}/>
              </div>
            </MyGrid><MyGrid item xs={6}/>
            <MyGrid item xs={12}>
              <ContentListing  scale={interpolatedStyles.scale}  height={this.props.height} width={this.props.width} resumeContent={[
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
              <RightArrow scale={interpolatedStyles.scale}  text={"Technical Skills"} height={this.props.height} width={this.props.width}/>
            </MyGrid>
            <MyGrid item xs={6}/>
            <MyGrid item xs={12}>
              <ContentListing  scale={interpolatedStyles.scale}  height={this.props.height} width={this.props.width} resumeContent={[
                [<Nested>
                  <div className="key">Languages & Frameworks</div>
                  <div className="value">
                    <InnerNested>
                      <div className="innerKey">Native</div>
                      <div className="innerValue">Java, JavaScript(ES6), HTML5, CSS3, React-Redux</div>
                    </InnerNested>
                    <InnerNested>
                      <div className="innerKey">Frequenter</div>
                      <div className="innerValue">SQL, jQuery, NodeJS, ExpressJS, C, Racket</div>
                    </InnerNested>
                    <InnerNested>
                      <div className="innerKey">Tourist</div>
                      <div className="innerValue">Python, Spring, MongoDB, C++, Bash, Scala</div>
                    </InnerNested>
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

            <MyGrid item xs={6}>
              <RightArrow scale={interpolatedStyles.scale}  text={"Experience"} height={this.props.height} width={this.props.width}/>
            </MyGrid>
            <MyGrid item xs={6}/>
            <MyGrid item xs={12}>
              <ContentListing  scale={interpolatedStyles.scale}  height={this.props.height} width={this.props.width} resumeContent={[
                [<h4>SmarterTravel - A TripAdvisor company, Boston, MA | Software Developer Co-op</h4>, "Jan. ‘18 – June ‘18"],
                [<ul>
                  <li>Implemented new functionality and fixed bugs across the full-stack for SmarterTravel's
                    Search Engine Marketing (SEM) development team
                  </li>
                </ul>, null],
                [<ul>
                  <li>Completed the first ever suite of Selenium integration tests for ST’s SEM web application</li>
                </ul>, null],
                [<ul>
                  <li>Used a variety of technologies such as Spring, Struts, Vue, SQL, and the Java servlet stack</li>
                </ul>, null],
                [<h4>Ovitas, Burlington, MA | Quality Assurance Intern</h4>, "July ‘15 – Aug. ‘15"],
                [<ul>
                  <li>Tested the ScienceOpen website and worked in a software development lifecycle</li>
                </ul>, null],
                [<ul>
                  <li>Detected and logged (60+) significant defects during my 2 month internship</li>
                </ul>, null]
              ]}/>
            </MyGrid>

            <MyGrid item xs={6}>
              <RightArrow scale={interpolatedStyles.scale}  text={"Projects"} height={this.props.height} width={this.props.width}/>
            </MyGrid>
            <MyGrid item xs={6}/>
            <MyGrid item xs={12}>
              <ContentListing  scale={interpolatedStyles.scale}  height={this.props.height} width={this.props.width} resumeContent={[
                [<div><h4>Note-taking Web Application</h4><a href={"www.recollect.info"}>(www.recollect.info)</a></div>, "June ‘18"],
                [<ul>
                  <li>Developed a notes application with calculated design decisions granting easy scalability</li>
                </ul>, null],
                [<ul>
                  <li>Managed application level state with Redux and rendered front-end visuals with React</li>
                </ul>, null],
                [<ul>
                  <li>Handled back-end requests with Express and accessed a mLab database with Mongoose</li>
                </ul>, null],
                [<div><h4>Android Development</h4><a href={"www.github.com/veganova/Entity"}>(github.com/veganova/Entity)</a></div>, "July ‘17"],
                [<ul>
                  <li>Created an Android game with realistic physics, interesting mechanics and a unique UI</li>
                </ul>, null],
                [<ul>
                  <li>Learned how to use the Android SDK, design patterns, custom data structures, and Git</li>
                </ul>, null],
                [<h4>Music Desktop Application</h4>, "June ‘17"],
                [<ul>
                  <li>Created an application using Java and MIDI using object oriented design concepts</li>
                </ul>, null],
                [<ul>
                  <li>Designed features including: importing songs, play through, adding notes, and more</li>
                </ul>, null],
                [<h4>Competitions & Events</h4>, "2015 - 2017"],
                [<ul>
                  <li>Hackathons: Worked on projects in teams at HuskyHack3, LexHack and HackWitUs</li>
                </ul>, null],
                [<ul>
                  <li>MIT Battlecode: Programmed an AI in Java to fight against other AIs in a competition</li>
                </ul>, null],
              ]}/>
            </MyGrid>

          </MyGrid>)
        }}
        </Motion>
    )
  }
}

export default Resume;
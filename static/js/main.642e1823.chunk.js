(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports={background:"#ffffff",textLeft:"#E4E3E2",arrowRight:"#404040",arrowLeft:"#CECCCA",textRight:"#1C1C1C",textColor:"#454545",contentDateSpacing:.03,contentHeight:15,contentSpacing:5,leftPadding:.05,rightPadding:.1,rightArrowPadding:0,sectionSpacing:10,infoMargin:.3,headerBar:.1}},161:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(22),l=n.n(i),c=(n(67),n(6)),o=n(7),s=n(9),u=n(8),m=n(10),h=n(3),d=n(4),p=n(1);function g(){var e=Object(h.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  \n  text-align: center;\n  vertical-align: middle;\n  line-height: ","px;\n  \n  p {\n    color: ",";\n    display: inline;    \n    font-size: ","pt;\n    font-weight: 100;\n  }\n"]);return g=function(){return e},e}function f(){var e=Object(h.a)(["\n  margin-top: ","px;\n  position: relative;\n  overflow: hidden;\n  path {\n    fill: ",";\n  }\n"]);return f=function(){return e},e}var E=d.a.div(f(),p.sectionSpacing,p.arrowRight),v=d.a.div(g(),function(e){return e.height},p.textLeft,function(e){return.08*e.width-1}),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"rightArrow",value:function(e){var t=.165*this.props.width,n=.2*t,a=this.props.width*p.leftPadding,i=t+a,l=i*e,c=1.1*l;return r.a.createElement(E,null,r.a.createElement("svg",{height:n,width:c},r.a.createElement("path",{d:"M0 0 L ".concat(l," 0 L").concat(c," ").concat(n/2," L").concat(l," ").concat(n," L0 ").concat(n," Z")})),r.a.createElement(v,{scale:e,textLength:this.props.text.length,height:n,width:i,style:{marginLeft:a+(e-1)*i+"px"}},r.a.createElement("p",null,this.props.text)))}},{key:"render",value:function(){return this.rightArrow(this.props.scale)}}]),t}(a.Component),w=n(15),b=n.n(w),x=(n(71),n(2));function k(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: flex-end;\n  height: ","px;\n  align-items: center;\n      \n  path {\n    fill: ",";\n  }\n"]);return k=function(){return e},e}function j(){var e=Object(h.a)(["\n  display: inline-block;\n"]);return j=function(){return e},e}function O(){var e=Object(h.a)(["\n  word-break: break-all;\n  white-space: normal;\n  display: inline-block;\n  text-align: left;\n  width: ","%;\n  //flex: 7;\n  //position: relative;\n  padding-left: 3%;\n  overflow: hidden;\n  font-size: ","pt;\n"]);return O=function(){return e},e}function S(){var e=Object(h.a)(["\n  //font-size: 30pt;\n  text-overflow: clip;\n  display: inline-block;\n  overflow: hidden;\n  text-align: center;\n  margin-left: 2%;\n  flex-grow: 100;\n  font-size: ","pt;\n  div {\n    display: inline-block;\n    width: 100%;\n  }\n"]);return S=function(){return e},e}var C=d.a.div(S(),function(e){return 9+.02*e.width}),L=d.a.div(O(),100*(1-p.infoMargin),function(e){return 7+.005*e.width}),M=d.a.div(j()),N=d.a.div(k(),function(e){return e.height},p.Left),A=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).renderBar=function(e,t,n,a){var i=t-2*a,l=a*e;return i*=e,r.a.createElement("svg",{height:t,width:n},r.a.createElement("rect",{x:"0",y:l,width:"2",height:i,rx:"2",ry:"2"}))},n.state={start:!1,popText:!1},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({start:!0})}},{key:"renderSideTriangles",value:function(e,t){var n=t/3,a=n*e,i=5*n,l=t/3*e;return r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{style:{position:"absolute",left:0},height:t,width:i},r.a.createElement("path",{style:{opacity:.3},d:"M0 0 L0 ".concat(t," L").concat(a," 0 Z")}),r.a.createElement("path",{style:{opacity:.3},d:"M0 0 L0 ".concat(l," L").concat(i," 0 Z")})))}},{key:"render",value:function(){var e=this,t=p.headerBar*this.props.height,n=.11*t,a=.0425*t;return console.log("also here!"),r.a.createElement(x.Motion,{defaultStyle:{scale:0},style:{scale:Object(x.spring)(1,{stiffness:this.state.popText?35:0,damping:16})},onRest:function(){return e.props.startRest()}},function(i){return r.a.createElement(N,{height:t},e.renderSideTriangles(i.scale,t),r.a.createElement(C,{width:e.props.width},r.a.createElement("div",{style:{"margin-right":200*(i.scale-1)+"%"}},"Viraj Patil")),r.a.createElement(M,null,r.a.createElement(x.Motion,{defaultStyle:{scale:0},style:{scale:Object(x.spring)(1,{stiffness:e.state.start?80:0,damping:15})},onRest:function(){e.setState({popText:!0})}},function(r){return e.renderBar(r.scale,t,a,n)})),r.a.createElement(L,{width:e.props.width},r.a.createElement("div",{style:{"margin-left":200*(i.scale-1)+"%","padding-top":"0.09%"}},e.renderContactInfo())))})}},{key:"renderContactInfo",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"5 Sachem Street #3, Boston, MA, 02120 | (M) ",r.a.createElement("a",{href:"tel:+17812668093"},"781-266-8093")),r.a.createElement("div",null,r.a.createElement("b",null,"Available:"),"  January \u2013 June 2019"),r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:patil.vir@husky.neu.edu"},"patil.vir@husky.neu.edu")," |",r.a.createElement("a",{href:"https://www.github.com/veganova",target:"_blank",rel:"noopener noreferer"},"github.com/veganova")," |",r.a.createElement("a",{href:"https://www.linkedin.com/in/virajnpatil",target:"_blank",rel:"noopener noreferer"},"linkedin.com/in/virajnpatil")))}}]),t}(a.Component);function D(){var e=Object(h.a)(["\n  height: ","px;\n  width: ","px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  \n  line-height: ","px;;\n  padding-left : 12.5%;\n  color: ",";\n  font-size: ","pt;\n  font-weight: 600;\n"]);return D=function(){return e},e}function J(){var e=Object(h.a)(["\n  height: ","px;\n  position: relative;\n  overflow: hidden;\n  path {\n    fill: ",";\n  }\n"]);return J=function(){return e},e}var T=d.a.div(J(),p.contentHeight,p.arrowLeft),H=d.a.div(D(),p.contentHeight,function(e){return e.width},p.contentHeight,p.textRight,function(e){return.3+.07*e.width}),R=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={triggered:!1},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"leftArrow",value:function(e){var t=this.props.width*p.rightPadding,n=p.contentHeight,a=this.props.width*p.rightArrowPadding,i=t+a,l=1.1*i,c=i*e,o=1.1*c;return r.a.createElement(T,null,r.a.createElement("svg",{height:n,width:o},r.a.createElement("path",{d:"M".concat(l," 0 L ").concat(l-c," 0 L").concat(l-o," ").concat(n/2," L").concat(l-c," ").concat(n," L").concat(l," ").concat(n," Z")})),r.a.createElement(H,{scale:e,textLength:this.props.text.length,height:n,width:i,style:{marginLeft:1.2*(1-e)*i+a+"px",opacity:.2+.8*e}},this.props.text))}},{key:"render",value:function(){var e=this;return this.state.triggered?r.a.createElement(x.Motion,{defaultStyle:{scale:0},style:{scale:Object(x.spring)(1,{stiffness:95,damping:20})}},function(t){return r.a.createElement("div",null,e.leftArrow(t.scale))}):(this.props.scale>=this.props.trigger&&this.setState({triggered:!0}),r.a.createElement("div",null))}}]),t}(a.Component);function B(){var e=Object(h.a)(["\n  \n  padding-bottom: ","px;\n  \n  .textWrapper {\n    display: inline-block;\n    width: ","%;\n  }\n  \n  .spacing {\n    display: inline-block;\n     width: ","%;\n  }\n  .date {\n    transform: rotateX(0deg);\n    display: inline-block;\n    width: ","%;\n    float: right;\n    position: relative;\n    .alignDate {\n      right: 0;\n      position: absolute;\n      top:0;\n    }\n  }\n"]);return B=function(){return e},e}function I(){var e=Object(h.a)(["\n  color: ",";\n  padding-left: ","%;\n  h3, h4, p {\n    padding: 0;\n    display: inline;\n  }\n  \n  ul {\n    //display: inline;\n    padding: 0;\n    margin:0;\n    margin-left: 5%;\n    padding-bottom: ","px;\n  }\n"]);return I=function(){return e},e}var P=d.a.div(I(),p.textColor,100*p.leftPadding,p.contentSpacing/2),F=d.a.div(B(),p.contentSpacing,100*(1-p.rightPadding-p.contentDateSpacing),100*p.contentDateSpacing,100*p.rightPadding),W=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={resumeContent:n.props.resumeContent},n.first=!0,n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.first&&this.props.scale<.95?r.a.createElement(r.a.Fragment,null):(this.first=!1,r.a.createElement(x.StaggeredMotion,{defaultStyles:this.state.resumeContent.map(function(e){return{y:0,o:0}}),styles:function(e){return e.map(function(t,n){return 0===n?{y:Object(x.spring)(1,{stiffness:100,damping:20}),o:Object(x.spring)(1)}:{y:Object(x.spring)(e[n-1].y,{stiffness:700,damping:25}),o:Object(x.spring)(e[n-1].o)}})}},function(t){return r.a.createElement(P,null,t.map(function(t,n){var a={"margin-top":-1*n*p.contentHeight*(1-t.y)+"px",opacity:t.o};return r.a.createElement(F,{scale:t.y,key:n,style:a},r.a.createElement("div",{className:"textWrapper"},r.a.createElement("div",{className:"textContent"},e.state.resumeContent[n][0])),r.a.createElement("div",{className:"spacing"}),e.state.resumeContent[n][1]?r.a.createElement("div",{className:"date"},r.a.createElement("div",{className:"alignDate"},r.a.createElement(R,{scale:t.y,trigger:1,height:e.props.height,width:e.props.width,text:e.state.resumeContent[n][1]}))):null)}))}))}}]),t}(a.Component),Z=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"renderSideTriangles",value:function(e,t){var n=t/3.7,a=1.16*t,i=(t/=2)*e;return r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{style:{position:"absolute",right:0,bottom:0},height:t,width:a},r.a.createElement("path",{style:{opacity:.3},d:"M0 ".concat(t," L").concat(a," ").concat(t-i," L").concat(a," ").concat(t," Z")}),r.a.createElement("path",{style:{opacity:.3},d:"M".concat(n," ").concat(t," L").concat(a," ").concat(t-i," L").concat(a," ").concat(t," Z")}),r.a.createElement("path",{style:{opacity:.3},d:"M".concat(2*n," ").concat(t," L").concat(a," ").concat(t-i," L").concat(a," ").concat(t," Z")})))}},{key:"render",value:function(){var e=this,t=p.headerBar*this.props.height*1.2;return console.log("also here!"),r.a.createElement(x.Motion,{defaultStyle:{scale:0},style:{scale:Object(x.spring)(1,{stiffness:35,damping:16})}},function(n){return e.renderSideTriangles(n.scale,t)})}}]),t}(r.a.Component);function K(){var e=Object(h.a)(["\n  padding-bottom: ","px;\n  .innerKey {\n    display: inline-block;\n    vertical-align: top;\n    font-weight: 700;\n    width: 20%;\n    overflow-wrap: break-word;\n  }\n  \n  .innerValue {\n    display: inline-block;\n    width: 80%;\n  }\n"]);return K=function(){return e},e}function V(){var e=Object(h.a)(["\n  .key {\n    display: inline-block;\n    vertical-align: top;\n    text-decoration: underline;\n    width: ","%;\n    overflow-wrap: break-word;\n  }\n  \n  .value {\n    display: inline-block;\n    width: ","%;\n  }\n"]);return V=function(){return e},e}function z(){var e=Object(h.a)(['\n  font-family: "gothic";\n']);return z=function(){return e},e}var U=Object(d.a)(b.a)(z()),G=d.a.div(V(),100*p.infoMargin,100*(1-p.infoMargin)),Q=d.a.div(K(),.5*p.contentSpacing),_=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).getAllContent=function(e){return e||(e={y:0}),[r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{item:!0,xs:6},r.a.createElement("div",null,r.a.createElement(y,{scale:e.y,text:"Education",height:n.props.height,width:n.props.width}))),r.a.createElement(U,{item:!0,xs:6}),r.a.createElement(U,{item:!0,xs:12},r.a.createElement(W,{scale:e.y,height:n.props.height,width:n.props.width,resumeContent:[[r.a.createElement("h4",null,"Northeastern University, Boston, MA"),"2016 \u2013 present"],[r.a.createElement("p",null,"College of Computer and Information Science"),"Exp. 2020"],[r.a.createElement("i",null," Candidate for a Bachelor of Science in Computer Science (minor in Mathematics) "),null],[r.a.createElement(G,null,r.a.createElement("div",{className:"key"},"Related Courses"),r.a.createElement("div",{className:"value"},"Object-Oriented Design, Algorithms & Data Structures, Computer Systems, Database Design, Networks & Distributed Systems"))],[r.a.createElement(G,null,r.a.createElement("div",{className:"key"},"GPA"),r.a.createElement("div",{className:"value",style:{fontWeight:650}},"3.8/4"))],[r.a.createElement(G,null,r.a.createElement("div",{className:"key"},"Honors"),r.a.createElement("div",{className:"value"},"Dean's List"))],[r.a.createElement("h4",null,"Lexington High School, Lexington, MA"),"June, 2016"],[r.a.createElement(G,null,r.a.createElement("div",{className:"key"},"Activities & Honors"),r.a.createElement("div",{className:"value"},"National Honor Society, Math Tutor, Robotics, Animation Club"))]]}))),r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{item:!0,xs:6},r.a.createElement(y,{scale:e.y,text:"Technical Skills",height:n.props.height,width:n.props.width})),r.a.createElement(U,{item:!0,xs:6}),r.a.createElement(U,{item:!0,xs:12},r.a.createElement(W,{scale:e.y,height:n.props.height,width:n.props.width,resumeContent:[[r.a.createElement(G,null,r.a.createElement("div",{className:"key"},"Languages & Frameworks"),r.a.createElement("div",{className:"value"},r.a.createElement(Q,null,r.a.createElement("div",{className:"innerKey"},"Native"),r.a.createElement("div",{className:"innerValue"},"Java, JavaScript(ES6), HTML5, CSS3, React-Redux")),r.a.createElement(Q,null,r.a.createElement("div",{className:"innerKey"},"Frequenter"),r.a.createElement("div",{className:"innerValue"},"SQL, jQuery, NodeJS, ExpressJS, C, Racket")),r.a.createElement(Q,null,r.a.createElement("div",{className:"innerKey"},"Tourist"),r.a.createElement("div",{className:"innerValue"},"Python, Spring, MongoDB, C++, Bash, Scala"))))],[r.a.createElement(G,null,r.a.createElement("div",{className:"key"},"Systems"),r.a.createElement("div",{className:"value"},"Linux, Android, MacOS, Windows"))],[r.a.createElement(G,null,r.a.createElement("div",{className:"key"},"Tools"),r.a.createElement("div",{className:"value"},"IntelliJ, Android SDK, Git, npm, Maven, Webpack"))],[r.a.createElement(G,null,r.a.createElement("div",{className:"key"},"Other"),r.a.createElement("div",{className:"value"},"TDD w/ JUnit, Selenium, Bootstrap"))]]}))),r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{item:!0,xs:6},r.a.createElement(y,{scale:e.y,text:"Experience",height:n.props.height,width:n.props.width})),r.a.createElement(U,{item:!0,xs:6}),r.a.createElement(U,{item:!0,xs:12},r.a.createElement(W,{scale:e.y,height:n.props.height,width:n.props.width,resumeContent:[[r.a.createElement("h4",null,"SmarterTravel - A TripAdvisor company, Boston, MA | Software Developer Co-op"),"Jan. \u201818 \u2013 June \u201818"],[r.a.createElement("ul",null,r.a.createElement("li",null,"Implemented new functionality and fixed bugs across the full-stack for SmarterTravel's Search Engine Marketing (SEM) development team")),null],[r.a.createElement("ul",null,r.a.createElement("li",null,"Completed the first ever suite of Selenium integration tests for ST\u2019s SEM web application")),null],[r.a.createElement("ul",null,r.a.createElement("li",null,"Used a variety of technologies such as Spring, Struts, Vue, SQL, and the Java servlet stack")),null],[r.a.createElement("h4",null,"Ovitas, Burlington, MA | Quality Assurance Intern"),"July \u201815 \u2013 Aug. \u201815"],[r.a.createElement("ul",null,r.a.createElement("li",null,"Tested the ScienceOpen website and worked in a software development lifecycle")),null],[r.a.createElement("ul",null,r.a.createElement("li",null,"Detected and logged (60+) significant defects during my 2 month internship")),null]]}))),r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{item:!0,xs:6},r.a.createElement(y,{scale:e.y,text:"Projects",height:n.props.height,width:n.props.width})),r.a.createElement(U,{item:!0,xs:6}),r.a.createElement(U,{item:!0,xs:12},r.a.createElement(W,{scale:e.y,height:n.props.height,width:n.props.width,resumeContent:[[r.a.createElement("div",null,r.a.createElement("h4",null,"Note-taking Web Application"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.recollect.info"},"(www.recollect.info)")),"June \u201818"],[r.a.createElement("ul",null,r.a.createElement("li",null,"Developed a notes application with calculated design decisions granting easy scalability")),null],[r.a.createElement("ul",null,r.a.createElement("li",null,"Managed application level state with Redux and rendered front-end visuals with React")),null],[r.a.createElement("ul",null,r.a.createElement("li",null,"Handled back-end requests with Express and accessed a mLab database with Mongoose")),null],[r.a.createElement("div",null,r.a.createElement("h4",null,"Android Development"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.github.com/veganova/Entity"},"(github.com/veganova/Entity)")),"July \u201817"],[r.a.createElement("ul",null,r.a.createElement("li",null,"Created an Android game with realistic physics, interesting mechanics and a unique UI")),null],[r.a.createElement("ul",null,r.a.createElement("li",null,"Learned how to use the Android SDK, design patterns, custom data structures, and Git")),null],[r.a.createElement("h4",null,"Music Desktop Application"),"June \u201817"],[r.a.createElement("ul",null,r.a.createElement("li",null,"Created an application using Java and MIDI using object oriented design concepts")),null],[r.a.createElement("ul",null,r.a.createElement("li",null,"Designed features including: importing songs, play through, adding notes, and more")),null],[r.a.createElement("h4",null,"Competitions & Events"),"2015 - 2017"],[r.a.createElement("ul",null,r.a.createElement("li",null,"Hackathons: Worked on projects in teams at HuskyHack3, LexHack and HackWitUs")),null],[r.a.createElement("ul",null,r.a.createElement("li",null,"MIT Battlecode: Programmed an AI in Java to fight against other AIs in a competition")),null]]}))),r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{item:!0,xs:6},r.a.createElement(y,{scale:e.y,text:"Interests",height:n.props.height,width:n.props.width})),r.a.createElement(U,{item:!0,xs:6}),r.a.createElement(U,{item:!0,xs:12},r.a.createElement(W,{scale:e.y,height:n.props.height,width:n.props.width,resumeContent:[[r.a.createElement("div",null,"Graphical design, sailing, video games, Thai food, photography, spikeball, tennis"),null]]})))]},n.state={startRest:!1},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(U,{container:!0,style:{background:p.background}},r.a.createElement(U,{item:!0,xs:12},r.a.createElement(A,{height:this.props.height,width:this.props.width,startRest:function(){return e.setState({startRest:!0})}})),r.a.createElement("div",{style:{position:"relative","min-height":this.props.height+"px"}},this.state.startRest?r.a.createElement(x.StaggeredMotion,{defaultStyles:this.getAllContent().map(function(e){return{y:0,o:0}}),styles:function(e){return e.map(function(t,n){return 0===n?{y:Object(x.spring)(1,{stiffness:45,damping:6}),o:Object(x.spring)(1)}:{y:Object(x.spring)(e[n-1].y,{stiffness:65,damping:10}),o:Object(x.spring)(e[n-1].o)}})}},function(t){return r.a.createElement(r.a.Fragment,null,t.map(function(t,n){return function(t,n){return e.getAllContent(t)[n]}(t,n)}))}):r.a.createElement("div",null),r.a.createElement("div",{style:{position:"absolute",right:0,bottom:0}},r.a.createElement(Z,{height:this.props.height,width:this.props.width}))))}}]),t}(a.Component),q=n(60),X=n.n(q),$=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{container:!0,spacing:0,className:"fullHeight"},r.a.createElement(b.a,{item:!0,md:1,lg:3}),r.a.createElement(b.a,{item:!0,xs:12,md:10,lg:6,className:"resume-container",style:{backgroundColor:p.background}},r.a.createElement(X.a,null,function(e){var t=e.height,n=e.width;return r.a.createElement(_,{height:t,width:n})})),r.a.createElement(b.a,{item:!0,md:1,lg:3}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,t,n){e.exports=n(161)},67:function(e,t,n){},71:function(e,t,n){}},[[62,1,2]]]);
//# sourceMappingURL=main.642e1823.chunk.js.map
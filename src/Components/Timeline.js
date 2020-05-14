import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default class Timeline extends Component {
    render() {
        return (
        <div className="skills-roadmaps">
                   <div class="skills-roadmap">
                        <h1 data-aos="fade-up">Roadmap</h1>
                        <p data-aos="fade-up">We help you to build your career !</p>
                    </div>
                <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'white', color: '#7a7a7a' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: '#515bde', color: '#7a7a7a' }}>
                    <h3 className="vertical-timeline-element-title">Tools and Setup</h3>
                    <p>VSCode, Slack, Git,Github,Live-Server</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#515bde', color: '#7a7a7a' }}>
                    <h3 className="vertical-timeline-element-title">HTML5 / CSS3</h3>
                    <p>Get familiar with basic web technologies</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#515bde', color: '#7a7a7a' }}>
                    <h3 className="vertical-timeline-element-title">Git / Github</h3>
                    <p>Learn how to manage your projects using git.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'tomato', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'tomato', color: '#7a7a7a' }}>
                    <h3 className="vertical-timeline-element-title">Masterclass - 1</h3>
                    <p className="timeline-master">let's build together.</p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#515bde', color: '#7a7a7a' }}>
                    <h3 className="vertical-timeline-element-title">Javascript / ES6</h3>
                    <p>Introduction to javascript and OOP.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#515bde', color: '#7a7a7a' }}>
                    <h3 className="vertical-timeline-element-title">Introduction to ReactJS</h3>
                    <p>Learn the basics of reactJS.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#515bde', color: '#7a7a7a' }}>
                    <h3 className="vertical-timeline-element-title">RESTful Concepts</h3>
                    <p>HTTP, GET, POST, PUT, DELETE, PATCH.</p>
                </VerticalTimelineElement>

                
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'tomato', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'tomato', color: '#7a7a7a' }}>
                    <h3 className="vertical-timeline-element-title">Masterclass - 2</h3>
                    <p className="timeline-master">let's build together.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#515bde', color: '#7a7a7a' }}>
                    <h3 className="vertical-timeline-element-title">Build & Deploy</h3>
                    <p>Build with what you've learned so far and deploy.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#515bde', color: '#7a7a7a' }}>
                    <h3 className="vertical-timeline-element-title">Resume building & mock interviews</h3>
                    <p>Fix common problems in your resume.</p>
                </VerticalTimelineElement>

                </VerticalTimeline>

            </div>
            
        )
    }
}

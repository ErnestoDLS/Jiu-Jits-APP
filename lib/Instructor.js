import React from 'react'
import { Link } from 'react-router'
import TakeClass from '../lib/TakeClass'

export default React.createClass({
  getDefaultProps() {
    return {
      instructors: [
        {
          instructor__name: "Rodrigo Pinheiro",
          instructor__image: "rodbjj",
          id: 0,
          techniques: {
            title: "Attack",
            videos: {
              tech1: "/videos/RPBJJ Technique of the Week - Attacking the Turtle.mp4",
              tech2: "/videos/RPBJJ Technique of the Week - Leg Lasso Spider Guard Smash Pass.mp4"
            }
          }
        },
        {
          instructor__name: "Marcelo Garcia",
          instructor__image: "marcelo",
          id: 1,
          techniques: {
            title: "Side control",
            videos: {
              tech1: "/videos/Marcelo Garcia North South Choke Instructional.mp4",
              tech2: "videos/Marcelo Garcia Side Control Escape #2 - ELBOW PUSH.mp4"
            }
          }
        },
        {
          instructor__name: "Riba",
          instructor__image: "ribmar",
          id: 2,
          techniques: {
            title: "Taking the back",
            videos: {
              tech1: "/videos/Jiu Jitsu - Arm Lock da Guarda Fechada - Manuel Ribamar - BJJCLUB.mp4",
              tech2: "/videos/Jiu Jitsu - Arm Lock da Guarda Fechada - Manuel Ribamar - BJJCLUB.mp4"
            }
          }
        }
      ]
    }
  },
  componentWillMount() {
    this.setState(
      {
        currentInst: this.props.instructors[0]
      }
    )
  },
  onHandleClickChange(e) {
    this.setState(
      {
        currentInst: this.props.instructors[e.target.id]
      }
    )
    e.preventDefault();
  },
  render() {
    return(
      <div>
        <section>
          {this.props.instructors.map(function(instructor, i){
            return <h2 key={i} className="instructors__link">
              <Link id={instructor.id} onClick={this.onHandleClickChange} to={`/instructor/${instructor.instructor__name}`}>{instructor.instructor__image}</Link>
            </h2>
          },this)}
        </section>
        <TakeClass instructor={this.state.currentInst}/>
      </div>
    )
  }
});

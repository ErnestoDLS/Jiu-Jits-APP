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
            name: "Leg Lasso Spider Guard Smash Pass",
            videos: {
              tech1: "https://youtu.be/yF3_FsKMUYM?list=PLfmjHVojBYX2Kf2_HVyJNj9WJrK6y6vhD",
              tech2: "https://youtu.be/bql8UNTyDFY?list=PLfmjHVojBYX2Kf2_HVyJNj9WJrK6y6vhD"
            }
          }
        },
        {
          instructor__name: "Marcelo",
          instructor__image: "marcelo",
          id: 1,
          techniques: {
            name: "Passing the guard",
            videos: {
              tech1: "https://youtu.be/bDVO9kXu5Lc",
              tech2: "https://youtu.be/Lhk4EZl4jjE"
            }
          }
        },
        {
          instructor__name: "Riba",
          instructor__image: "ribmar",
          id: 2,
          techniques: {
            name: "Taking the back",
            videos: {
              tech1: "https://youtu.be/VWSgxQIy0Y4",
              tech2: "https://youtu.be/rwkC6NrW_1I"
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

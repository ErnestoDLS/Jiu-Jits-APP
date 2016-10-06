import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps() {
    instructors: [
      {
        instructor__name: "Rodrigo Pinheiro",
        instructor__image: "rodbjj",
        techniques: [
          name: "Leg Lasso Spider Guard Smash Pass",
          video: "https://www.youtube.com/watch?v=yF3_FsKMUYM"
        ]
      },
      {
        instructor__name: "Arnold",
        instructor__image: "arnold",
        techniques: [
          name: "Side Control Escape",
          video: "https://www.youtube.com/watch?v=bDVO9kXu5Lc"
        ]
      },
      {
        instructor__name: "Eric",
        instructor__image: "eric",
        techniques: [
          name: "De La Riva Sweep",
          video: "https://www.youtube.com/watch?v=ylXALtSRdxk"
        ]
      }
    ]
  },
  render() {
    return(
      <ul>
        {this.props.instructors.map(function(instructor, i){
          return <li key={i}>
            <Link to={`/Home/${instructor.instructor__image}/${instructor.instructor__name}/${instructor.techniques.name.video}`}>
              <img src={`./image/${instructor.instructor__image}.jpg`}/>
              <h2>{instructor.instructor__name}</h2>
            </Link>
          </li>
        })}
      </ul>
    )
  }
});

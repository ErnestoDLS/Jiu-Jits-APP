
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps() {
    return {
      instructors: [
        {
          instructor__name: "Rodrigo Pinheiro",
          instructor__image: "rodbjj",
          techniques: {
            name: "Leg Lasso Spider Guard Smash Pass",
            video: ""
          }
        },
        {
          instructor__name: "Thiago",
          instructor__image: "thiago",
          techniques: {
            name: "Passing the guard",
            video: ""
          }
        },
        {
          instructor__name: "Riba",
          instructor__image: "ribmar",
          techniques: {
            name: "Taking the back",
            video: ""
          }
        }
      ]
    }
  },
  render() {
    return(
      <div>
        <h1>Pick your instructor</h1>
          <ul className="instructor__li">
            {this.props.instructors.map(function(instructor, i){
              return <li key={i}>
                <Link to={`/Home/${instructor.instructor__name}/${instructor.instructor__image}/${instructor.techniques.video}`}>
                  <img src={`./image/${instructor.instructor__image}.jpg`}/>
                  <h2>{instructor.instructor__name}</h2>
                </Link>
              </li>
            })}
          </ul>
      </div>
    )
  }
});

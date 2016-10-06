import React from 'react'

export default React.createClass({
  getDefaultProps() {
    instructors: [
      {
        instructor__name: "Rodrigo Pinheiro",
        instructor__image: "rodbjj.jpg",
        techniques: [
          name: "Leg Lasso Spider Guard Smash Pass",
          video: "https://www.youtube.com/watch?v=yF3_FsKMUYM"
        ]
      },
      {
        instructor__name: "Arnold",
        instructor__image: "arnold.jpg",
        techniques: [
          name: "Side Control Escape",
          video: "https://www.youtube.com/watch?v=bDVO9kXu5Lc"
        ]
      },
      {
        instructor__name: "Eric",
        instructor__image: "eric.jpg",
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
            <img src={`./image/${instructor.instructor__image}.jpg`}/>
          </li>
        })}
      </ul>
    )
  }


});

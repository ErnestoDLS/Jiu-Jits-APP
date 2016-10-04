import React from 'react'

export default React.createClass({
  getDefaultProps(){
    return {
      rpbjj: {
        name: "Rodrigo Pinheiro",
        image: "image/rpnew.jpg",
        classes: [
          name: "Guard passing",
          length: 1:28,
          description: "How to pass the guard when in spider/lasso guard",
          videos: [
            {
              name: "Leg Lasso Spider Guard Smash Pass",
              url: "https://www.youtube.com/watch?v=yF3_FsKMUYM"
            },
            {
              name: "Attacks for turtle",
              length: 8:19,
              description: "Some attack options when oppenent is in turtle",
              videos: [
                {
                  name: "Attacking the Turtle",
                  url: "https://www.youtube.com/watch?v=bql8UNTyDFY"
                },
              ]
            }
          ]
        ]
      }
    }
    render() {
      return(
        <article>
          <h2>{this.props.params.id.name}</h2>
            <img src={this.props.params.id.image}></img>

        {this.props.[this.props.params.id].classes.map((clas) => {
          return <li>
            <h3>{clas.name}</h3>
            {clas.videos.map((video) => {
              return <h3>{video.name}</h3>
            })};
          </li>
        })
      }
        </article>
      );
    }
  }
});

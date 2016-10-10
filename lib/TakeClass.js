import React from 'react'
import ReactPlatyer from 'react-player'


export default React.createClass({
  render() {
    return(
      <div>
        <video id = "media-video" controls>
          <source src='.mp4' type='video/mp4'>
        </video>
      </div>
    )
  }
})

import React from 'react'


export default React.createClass({
  render() {
    return(
      <div>
        <h1>Take your pick</h1>
          <a className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/yF3_FsKMUYM" frameborder="0" allowfullscreen></iframe>
          </a>
          <div>
            <button className="next__btn">Next video</button>
          </div>
    </div>
    )
  }
})

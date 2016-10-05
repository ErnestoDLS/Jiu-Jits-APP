import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <div>
        <h1 className="heading__home">Home</h1>
          <form action=" ">
            <div>
              <input type="text" name="firstname" placeholder="First name"></input>
            </div>
            <div>
              <input type="text" name="lastname" placeholder="Last name"></input>
            </div>
            <div>
              <input type="submit" value="Submit"></input>
            </div>
          </form>
      </div>

    )
  }
})

import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <div>
        <h1 className="heading__home">Home</h1>
          <form action=" ">
            <input type="text" name="firstname" placeholder="First name"></input><br>
            </br><br>
            </br>
            <input type="text" name="lastname" placeholder="Last name"></input><br></br>
              <input type="submit" value="Submit"></input>
          </form>
      </div>

    )
  }
})

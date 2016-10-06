import React from 'react'

export default React.createClass({
  onSubmitHandler(e) {
    e.preventDefault()
    var usernameText = this.refs.username.value;
    var passwordText = this.refs.password.value;
    this.props.users.map((user) => {
      if(user.username === usernameText){
        if(user.password === passwordText){
          this.props.history.push(`/TakeClass/${user.ususername}`)
        }
      }
    })
  },
  getDefaultProps() {
    return {
      users: [
        {
          username: "ernesto",
          password: "bjj123"
        },
        {
          username: "arnold",
          password: "ilovealex4eva"
        }
      ]
    }
  },
  render() {
    return (
      <section>
        <form method="POST" action="#" onSubmit={this.onSubmitHandler}>
          <div>
             <input type="text" name="username" placeholder="User Name"></input>
           </div>
           <div>
             <input type="password" name="psw" placeholder="Password"></input>
           </div>
          <div>
             <input type="submit" value="Log In"></input>
          </div>
         </form>
      </section>
    )
  }
})

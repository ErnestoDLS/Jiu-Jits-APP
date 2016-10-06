import React from 'react'

export default React.createClass({
  onSubmitHandler(e) {
    e.preventDefault()
    var usernameText = this.refs.username.value;
    var passwordText = this.refs.password.value;
    this.props.users.map((user) => {
      if(user.username === usernameText){
        if(user.password === passwordText){
          this.props.history.push(`/TakeClass/${user.username}`)
        }
      }
    })
  },
  getDefaultProps() {
    return {
      users: [
        {
          username: "ernesto",
          password: "password"
        },
        {
          username: "arnold",
          password: "password2"
        }
      ]
    }
  },
  render() {
    return (
      <section>
        <h1>RP Bjj Team</h1>
        <form method="POST" action="#" onSubmit={this.onSubmitHandler}>
          <div>
             <input type="text" name="username" placeholder="User Name" ref="username" autoComplete="off"></input>
           </div>
           <div>
             <input type="password" name="psw" placeholder="Password" ref="password"></input>
           </div>
          <div>
             <input type="submit" value="Log In"></input>
          </div>
         </form>
      </section>
    )
  }
})

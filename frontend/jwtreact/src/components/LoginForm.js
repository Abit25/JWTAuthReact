import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <div className='container'>
        <h3>Log In</h3>
      <form onSubmit={e => this.props.handle_login(e, this.state)}>
        {/* <h4>Log In</h4> */}


  {/* <div className="form-group">
    <label htmlFor="exampleInputEmail1">Username</label>
    <input value={this.state.username} name='username'
    onChange={this.handle_change} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"></input>

  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input value={this.state.password} name='password'
    onChange={this.handle_change} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>

  <input type="submit" className="btn btn-primary">Submit</input> */}


        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handle_change}
          className='form-control'
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handle_change}
          className='form-control'
        />
        <input type="submit" className='btn btn-primary' />
      </form>
    </div>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};

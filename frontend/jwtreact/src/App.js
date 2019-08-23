import React, { Component } from 'react';
import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {

    console.log('In DidMount 1');

    if (this.state.logged_in) {

            fetch('http://localhost:8000/auth/users/me', {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
              },

            })
              .then(res => res.json())
              .then(json => {
                console.log('In DidMount');

                this.setState({

                  displayed_form: '',
                  username: json.username
                });
              });

    }
  }

  Update() {

    console.log('In componentDidUpdate ');

    if (this.state.logged_in) {

            fetch('http://localhost:8000/auth/users/me', {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
              },

            })
              .then(res => res.json())
              .then(json => {
                console.log('In DidMount');

                this.setState({

                  displayed_form: '',
                  username: json.username
                });
              });

    }
  }


  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        console.log('IN login',json.access);
        localStorage.setItem('token', json.access);
        this.setState({
          logged_in: true,
          displayed_form: '',


        });
        this.Update();
      });
      // fetch('http://localhost:8000/auth/users/me/', {
      //   method: 'GET',
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem('token')}`,
      //     'Content-Type': 'application/json'
      //   },
      //
      // })
      //   .then(res => res.json())
      //   .then(json => {
      //     console.log('Still in login',json,localStorage.getItem('token'));
      //
      //     this.setState({
      //
      //       displayed_form: '',
      //       username: json.username
      //     });
      //   });



  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/auth/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        console.log('In Signup',json,data);
        // localStorage.setItem('token', json.access);
        // this.handle_login();
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username,
        });
      });


  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }

    return (
      <div className="App">
        <Nav
          logged_in={this.state.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
        />
        <div className='form'>
        {form}
        </div>
        <div className='Main'>
        <h3>
          {this.state.logged_in
            ? `Hello, ${this.state.username}`
            : 'Please Login or Signup'}
        </h3>
      </div>
      </div>
    );
  }
}

export default App;

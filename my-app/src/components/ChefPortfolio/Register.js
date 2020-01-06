import React, { Component } from 'react';
import {axiosWithAuth} from '../axiosAuthenticate/axiosWithAuth';
import { Link }from 'react-router-dom';
import './Register.css';
const initialUser = {
  username: '',
  password: '',
}

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { ...initialUser },
      message: ''
    }
  }

  inputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ user: { ...this.state.user, [name]: value } })
  }

  submitHandler = (event) => {
    event.preventDefault();
    axiosWithAuth()
    .post(`http://localhost:3000/register`, this.state.user)
      .then((res) => {
        // if (res.status === 201) {
        //   this.setState({
        //     message: 'Registration Successful',
        //     user: { ...initialUser },
        //   })
        //   this.props.history.push('/')
        // } else {
        //   throw new Error();
        // }
        localStorage.setItem('jwt', res.data.token)
        this.props.history.push('/login')
      })
      .catch(err => {
        this.setState({
          message: 'Registration failed',
          user: { ...initialUser }
        })
      })
  }

  render() {
    return (
      <div className='registerPage'>
          <div>
        <form className= 'form' onSubmit={this.submitHandler}>
          <section>
            <h5 className='formTitle'> Share Your Favorites</h5>
            <p>Sign up to share your own favorite recipes</p>
            <div>
              <img src={require('../../Images/facebook.png')} alt='fb' width='40'/>
              <img src={require('../../Images/search.png')} alt='search' width='40'/>
              <img src={require('../../Images/twitter.png')} alt='tw' width='40'/>
              <img src={require('../../Images/yahoo-icon.png')} alt='yahoo'width='40' />

            </div>
          </section>

          <input
            className='Register-Input'
            type='text'
            id='firstname'
            name='firstname'
            placeholder='First Name'
            value={this.state.user.username}
            onChange={this.inputHandler}
          />

          <input
            className='Register-Input'
            type='text'
            id='lastname'
            name='lastname'
            placeholder='Last Name'
            value={this.state.user.username}
            onChange={this.inputHandler}
          />

          <input
            className='Register-Input'
            type='text'
            id='username'
            name='username'
            placeholder='Username'
            value={this.state.user.username}
            onChange={this.inputHandler}
          />

          <input
            className='Register-Input'
            type='text'
            id='password'
            name='password'
            placeholder='Password'
            value={this.state.user.password}
            onChange={this.inputHandler}
          />
          
          <input
            className='Register-Input'
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={this.state.user.email}
            onChange={this.inputHandler}
          />

          <input
            className='Register-Input'
            type='text'
            id='location'
            name='location'
            placeholder='City, State'
            value={this.state.user.username}
            onChange={this.inputHandler}
          />
          <button className="register-btn" type='submit'>Sign Up</button>

          <div className='registerFooter'>
            <p>By signing up you agree to ch0w.now.sh's <Link to='/TermsAndUse'><span>Terms of Use</span></Link> and <Link to='/PrivacyPolicy'><span>Privacy Policy</span></Link></p>
          </div>
          <div className='registerFooter'>Already have an account? <Link to='/login'><span>Log In</span></Link></div>
        </form>
        {this.state.message
          ? (<h4>{this.state.message}</h4>)
          : undefined
        }
        </div>
      </div>
    )
  }
} 

export default Register;
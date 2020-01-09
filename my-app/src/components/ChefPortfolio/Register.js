import React, { useState } from 'react';
import {axiosWithAuth} from '../axiosAuthenticate/axiosWithAuth';
import { Link }from 'react-router-dom';
import './Register.css';
import NavBarSignin from '../NavBars/NavBarSignin';
// const initialUser = {
//   first_name: '',
//   last_name: '',
//   username: '',
//   password: '',
//   location: ''
// }

// class Register extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: { ...initialUser },
//       message: ''
//     }
//   }

//   inputHandler = (event) => {
//     const { name, value } = event.target;
//     this.setState({ user: { ...this.state.user, [name]: value } })
//   }

  // submitHandler = (event) => {
  //   event.preventDefault();
  //   axiosWithAuth()
  //   .post(`https://chef-portfolio-2.herokuapp.com/api/auth/register`, this.state.user)
  //     .then((res) => {
  //       localStorage.setItem('jwt', res.data.token)
  //       this.props.history.push('/login')
  //     })
  //     .catch(err => {
  //       this.setState({
  //         message: 'Sorry try registering again',
  //         user: { ...initialUser }
  //       })
  //     })
  // }

  const Register = props => {
    const [newUser, setNewUser] = useState({
      first_name: '',
        last_name: '',
        username: '',
        password: '',
        location: ''
    });

    const handleChanges = e => {
      setNewUser({...newUser, [e.target.name]: e.target.value});
    };

    const submitForm = e =>{
      e.preventDefault();
      axiosWithAuth()
      .post('https://chef-portfolio-2.herokuapp.com/api/auth/register', newUser)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/login');
      })
      .catch(err => {
        console.log(err)
      })
      setNewUser('');
    };
  
    return (
      <>
      <NavBarSignin />
      <div className='registerPage'>
          <div>
        <form className= 'form' onSubmit={submitForm}>
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
            id='first_name'
            name='first_name'
            placeholder='First Name'
            // value={this.state.user.first_name}
            onChange={handleChanges}
          />

          <input
            className='Register-Input'
            type='text'
            id='last_name'
            name='last_name'
            placeholder='Last Name'
            // value={this.state.user.last_name}
            onChange={handleChanges}
          />

          <input
            className='Register-Input'
            type='text'
            id='username'
            name='username'
            placeholder='Username'
            // value={this.state.user.username}
            onChange={handleChanges}
          />

          <input
            className='Register-Input'
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            // value={this.state.user.password}
            onChange={handleChanges}
          />
          
          <input
            className='Register-Input'
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            // value={this.state.user.email}
            onChange={handleChanges}
          />

          <input
            className='Register-Input'
            type="text"
            id="location"
            name="location"
            placeholder="City, State"
            // value={this.state.user.location}
            onChange={handleChanges}
          />
          <button className="register-btn" type='submit' >Sign Up</button>

          <div className='registerFooter'>
            <p>By signing up you agree to ch0w.now.sh's <Link to='/TermsAndUse'><span>Terms of Use</span></Link> and <Link to='/PrivacyPolicy'><span>Privacy Policy</span></Link></p>
          </div>
          <p className='registerFooter'>Already have an account?<Link to='/login'><span> Log In </span></Link></p>
        </form>
        {/* {this.state.message
          ? (<h4>{this.state.message}</h4>)
          : undefined
        } */}
        </div>
      </div>
      </>
    )
  
} 

export default Register;
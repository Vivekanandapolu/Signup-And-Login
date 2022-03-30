import React,{useState} from 'react'
import '../App.css'

const Signup = () => {
  const [data, setData] = useState({
    txt: '',
    email: '',
    pswd: ''
  });
  const { txt, pswd, email } = data;
  const ChangeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = e => {
    e.preventDefault();
    console.log(data);
  }
  return (
    <div className='main'>
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className='signup'>
        <form onSubmit={submitHandler}>
          <label for="chk" aria-hidden="true">Sign up</label>
          <input type="text" name='txt' placeholder='Username' required="" value={txt} onChange={ ChangeHandler}/>
          <input type="email" name='email' placeholder='Email' required="" value={email} onChange={ ChangeHandler}/>
          <input type="password" name='pswd' placeholder='Password' required="" value={pswd} onChange={ ChangeHandler}/>
          <button>Sign up</button>
        </form>
      </div>
      <div className='login'>
        <form onSubmit={submitHandler}>
          <label for="chk" aria-hidden="true">Login</label><br />
          <input type="email" name='email' placeholder='Email' required="" value={email} onChange={ ChangeHandler}/>
          <input type="password" name='pswd' placeholder='Password' required="" value={pswd} onChange={ ChangeHandler}/>
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
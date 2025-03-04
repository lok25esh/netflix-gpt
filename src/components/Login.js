import React from 'react';
import Header from './Header';
import { useState } from 'react';
const Login = () => {
const[toggle,setToggle] = useState(true);
function handleForm(){
    setToggle(!toggle);
}
  return (
    <div >
      <Header/>
      <div className='absolute opacity-80'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/US-en-20250224-TRIFECTA-perspective_ebbccc78-aa40-42c9-bcf2-986dc9885540_large.jpg'
      alt='backgrond-img'/>
      </div>
      <form className='w-3/12 absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white'>
      <h1 className='font-bold text-xl py-4 '>{toggle?<h1>Sign in</h1>:<h1>Sign up</h1>}</h1>
      {!toggle &&  <input type='text' placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700' />}
    <input type='text' placeholder='Email Address' className='p-2 my-2 w-full bg-gray-700' />
    <input type='password' placeholder='password' className='p-2 my-2 w-full bg-gray-700'/>
    <button className=' rounded-lg p-3 my-4 bg-red-500 w-full'>{toggle?<h1>Sign in</h1>:<h1>Sign up</h1>}</button>
    <div className='w-full'> <p className='font-bold text-white '> {toggle ?<p>New User?</p>:<p>Already a user ?</p>} <span className='text-red-500  cursor-pointer ' onClick={handleForm}>{toggle?<h1>Sign up</h1>:<h1>Sign in</h1>}</span></p></div>
   
  </form>
    </div>
    

  );
};

export default Login;

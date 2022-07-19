import React, { useState } from 'react';
import Signin from './Signin';
import Signup from './Signup';

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <>
      {!index ? <Signin /> : <Signup />}
      <div onClick={toggleIndex}>
        {!index ? <p className='100 text-center mt-2'>New user? Click here</p> : <p className='w-100 text-center mt-2'>Already have an acount?</p>}
      </div>
    </>
  );
};

export default Auth;
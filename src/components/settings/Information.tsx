
import { authContext } from 'context/AuthContext';
import React, { useContext } from 'react'



function Information() {
  const [auth] = useContext(authContext);
 
  return (
    <div className="text-center font-bold text-black dark:text-white">
      <h1>{auth.name}</h1>
      <h2>{auth.email}</h2>
    </div>
  );
}

export default Information
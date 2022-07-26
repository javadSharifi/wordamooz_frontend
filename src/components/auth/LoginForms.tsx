import React from 'react';
import { Button, Input } from './form';

function LoginForms() {
  return (
    <>
      <Input name="email" type="email" value="email" className="w-80" />
      <Input
        name="password"
        className=" w-80"
        type="password"
        value="password"
      />
      <Button className="px-24  lg:mt-10">Login</Button>
    </>
  );
}

export default LoginForms;

import React from 'react';
import { Button, Input } from './form';

function RegisterForms() {
  return (
    <>
      <Input name="name" className=" w-80" type="name" value="name" />
      <Input name="email" className=" w-80" type="email" value="email" />
      <Input
        name="password"
        className="w-80"
        type="password"
        value="password"
      />
      <Button className="px-24 lg:mt-10">Register</Button>
    </>
  );
}

export default RegisterForms;

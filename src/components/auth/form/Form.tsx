import React from 'react';
import { Form as FormikForm } from 'formik';
const Form = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <FormikForm className={`   h-full w-full    gap-x-2 ${className} `}>
      {children}
    </FormikForm>
  );
};

export default Form;

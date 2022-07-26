import React from 'react';
import { ErrorMessage, Field } from 'formik';

function FieldInput({
  value,
  type,
  className,
  name,
  as,
}: {
  value: string;
  type: string;
  className: string;
  name: string;
  as?: string;
}) {
  return (
    <div className={`form-control ${className} `}>
      <label className="label">
        <span className="label-text font-bold">{name}</span>
      </label>
      <Field
        as={as}
        type={type}
        placeholder={value}
        name={name}
        className={` input  input-bordered h-14 min-h-[3.5rem] w-full border-transparent dark:border-2 dark:border-gray-500  dark:bg-transparent dark:shadow-none  `}
      />
      <ErrorMessage name={name} component="p" className="text-red-600" />
    </div>
  );
}

export default FieldInput;

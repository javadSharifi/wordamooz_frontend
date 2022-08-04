import React, { useContext } from 'react';
import { ErrorMessage, Field } from 'formik';
import { fontSizeContext } from 'context/FontSizeContext';

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
    const { font: size } = useContext(fontSizeContext);
  return (
    <div className={`form-control ${className} `}>
      <label className="label">
        <span className={`label-text text-${size}  font-bold`}>{name}</span>
      </label>
      <Field
        as={as}
        type={type}
        placeholder={value}
        name={name}
        className={` input text-${size}  input-bordered h-14 min-h-[3.5rem] w-full border-transparent dark:border-2 dark:border-gray-500  dark:bg-transparent dark:shadow-none  `}
      />
      <ErrorMessage name={name} component="p" className="text-red-600" />
    </div>
  );
}

export default FieldInput;

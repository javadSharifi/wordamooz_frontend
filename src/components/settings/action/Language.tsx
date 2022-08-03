import React from 'react'

function Language() {
  return (
    <select className="select select-info w-24 max-w-xs bg-transparent dark:text-sky-500">
      <option value={'en'} >
        English
      </option>
      <option value={'pr'}>Persian </option>
    </select>
  );
}

export default Language
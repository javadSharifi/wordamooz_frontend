import React from 'react';

function BtnNavigation({ Icon, onClick }: { Icon: any; onClick?: any }) {
  return (
    <button onClick={onClick} className="btnNavigation ">
      <Icon className="" />
    </button>
  );
}

export default BtnNavigation;

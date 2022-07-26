import React from 'react';

function BtnNavigation({ Icon, onClick }: { Icon: any; onClick?: any }) {
  return (
    <button onClick={onClick} className="BtnNavigation ">
      <Icon />
    </button>
  );
}

export default BtnNavigation;

import React from 'react';

function CartButton({ href, Icon }: { href: string; Icon: any }) {
  return (
    <a target="_blank" href={href} className="card-btn" rel="noreferrer">
      <Icon className="w-3/5 transition-all  duration-200" />
    </a>
  );
}

export default CartButton;

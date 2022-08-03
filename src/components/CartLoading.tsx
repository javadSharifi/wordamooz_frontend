import React from 'react';

function CartLoading() {
  const cart = [];

  for (let i = 0; i < 6; i++) {
    cart.push(
      <div key={i} className="card">
        <div className="  center  group  relative   h-fit animate-pulse  ">
          <div className="  mt-2  aspect-square h-52 w-[95%] select-none rounded-3xl  bg-slate-400/30  object-cover   object-center   " />
          <div className=" py-2 pr-1 font-bold  ">
            <div className="h-9 w-52 rounded-xl bg-slate-400/30  "></div>
            <div className="mt-2 h-9 w-64 rounded-xl  bg-slate-400/30 "></div>
          </div>
        </div>
      </div>
    );
  }

  return <>{cart}</>;
}

export default CartLoading;

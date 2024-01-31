import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
const  amount  = useSelector((store) => store.cart.amount);

  return (
    <nav>
      <div className='nav-center flex justify-evenly gap-8 text-black'>
        <h3>redux toolkit</h3>
        <div className='nav-container'>
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

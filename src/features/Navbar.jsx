import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { post } = useSelector((state) => state.cart);

  return (
    <nav>
      <div className='nav-center'>
        <h3>redux toolkit</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>{post}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

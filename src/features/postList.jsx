import { useSelector } from 'redux';

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);
console.log("one");
  return (
    <nav>
      <div className='nav-center'>
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
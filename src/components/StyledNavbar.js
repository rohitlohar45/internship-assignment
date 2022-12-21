import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (

    <div class="ui clearing segment">
      <h2 class="ui left floated header">Shop</h2>
    </div>
    // <div className="ui fixed menu">
    //   <div className="ui container center">
    //     <h2>FakeShop</h2>
    //     <h3 className='ui right floated'><NavLink
    //     to='/products'
    //     className={({ isActive }) => (isActive ? 'link active' : 'link')}
    //   >
    //     Home
    //   </NavLink></h3>
    //   </div>
    // </div>
  );
};
export default Navbar;

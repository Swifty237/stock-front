import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarContext } from '../utils/SidebarContext';

const Sidebar = () => {

  const { toggle, setToggle } = useContext(SidebarContext)

  useEffect(() => {
    $("li a").each(function () {
      if ($(this).hasClass("active")) {
        $(this).parent("li").addClass("active");
      }
    });
  }, [])

  return (
    <nav className={`${toggle ? "sidebar" : "sidebar-hidden"}`} id='side_nav'>
      <div className='header-box px-2 pt-3 pb-4 d-flex flex-column align-items-center'>
        <h1 className='fs-4'>
          <span className='bg-white text-dark rounded sahdow px-2'>GS</span>

          {toggle ? <span className='text-white ms-2'>Gestion de stock</span> : <></>}
        </h1>

        {toggle ?
          <button className='btn btn-dark' onClick={() => setToggle(!toggle)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-bar-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z" />
            </svg>
          </button>
          :
          <button className='btn btn-dark' onClick={() => setToggle(!toggle)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-bar-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z" />
            </svg>
          </button>
        }
      </div>

      {toggle ?
        <ul className='list-unstyled'>
          <li>
            <NavLink to="/" className="text-decoration-none px-3 py-2 d-block">Ventes</NavLink>
          </li>
          <li>
            <NavLink to="/commandes" className="text-decoration-none px-3 py-2 d-block">Commandes</NavLink>
          </li>
          <li>
            <NavLink to="/stocks" className="text-decoration-none px-3 py-2 d-block">Stocks</NavLink>
          </li>
          <li >
            <NavLink to="/livraisons" className="text-decoration-none px-3 py-2 d-block">Livraisons</NavLink>
          </li>
          <li>
            <NavLink to="/clients" className="text-decoration-none px-3 py-2 d-block">Clients</NavLink>
          </li>

          <li>
            <NavLink to="/categories" className="text-decoration-none px-3 py-2 d-block">Catégories</NavLink>
          </li>
        </ul>
        :
        <ul className='list-unstyled'>
          <li>
            <NavLink to="/" className="text-decoration-none px-3 py-2 d-block">
              Ve
            </NavLink>
          </li>
          <li>
            <NavLink to="/commandes" className="text-decoration-none px-3 py-2 d-block">
              Co
            </NavLink>
          </li>
          <li>
            <NavLink to="/stocks" className="text-decoration-none px-3 py-2 d-block">
              St
            </NavLink>
          </li>
          <li>
            <NavLink to="/livraisons" className="text-decoration-none px-3 py-2 d-block">
              Li
            </NavLink>
          </li>
          <li>
            <NavLink to="/clients" className="text-decoration-none px-3 py-2 d-block">
              Cl
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories" className="text-decoration-none px-3 py-2 d-block">
              Ca
            </NavLink>
          </li>
        </ul>
      }

      <hr className='h-color mx-2' />
    </nav>
  );
}

export default Sidebar;

import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { NavbarUl } from "./styled";
import { startLogout } from "../../../store/auth";

const Component = () => {
    const { user } = useAppSelector( (state ) => state.auth);
    const dispatch = useAppDispatch();
    console.log(user);

    const logout = () => {
        console.log('hola');
        dispatch(startLogout());
      }
  return (
    <div className="navbar mb-4 px-4 navbar-custom ">
    <span className="navbar-brand">
      <i className="fas fa-align-left"></i>
      &nbsp;
      { user }
    </span>
    <div className="">
      <NavbarUl className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/panel" className="nav-link">
           Panel
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/todo" className="nav-link">
            Todo List
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/timer" className="nav-link">
            Timer
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/git-profile" className="nav-link">
            Git Profile
          </NavLink>
        </li>
        <button className="btn btn-outline-danger"
          onClick={logout}
        >
          <i className="fas fa-sign-out-alt"></i>
          &nbsp; 
          <span>Salir</span>
        </button>
      </NavbarUl>
    </div>
  </div>
  );
};

export { Component as Navbar };
export default Component;

import { checkingCookie, login, logout, showMessage } from "."
import { loginWithUserPassword } from "../../auth/providers";
import Cookies from 'js-cookie';



export const startLogin = (user, password) => {
    return async(dispatch) => {
        const result = await loginWithUserPassword(user, password);

        if( !result.ok ) return dispatch(showMessage(result));

        dispatch(login(result));
        Cookies.set('myCookie', 'hasAccess', { expires: 7 });
    }
}

export const checkingAuthentication = () => {
    const valueCookie = Cookies.get('myCookie');
  
    if (valueCookie === 'hasAccess') {
      return async (dispatch) => {
        dispatch(checkingCookie());
      };
    } else {
      // Si no tienes que ejecutar el thunk, puedes simplemente devolver null o undefined
      return null;
    }
  };

export const startLogout = () => {

  return (dispatch) => {
    dispatch(logout());
  }
}

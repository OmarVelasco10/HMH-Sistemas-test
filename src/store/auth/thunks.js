import { checkingCookie, login, logout } from "."
import { loginWithUserPassword } from "../../auth/providers";
import Cookies from 'js-cookie';



export const startLogin = (user, password) => {
    return async(dispatch) => {
        const result = await loginWithUserPassword(user, password);
        console.log(result);

        if( !result.ok ) return dispatch(logout(result));

        dispatch(login(result));
        Cookies.set('myCookie', 'hasAccess', { expires: 7 });
    }
}

export const checkingAuthentication = () => {
    const valueCookie = Cookies.get('myCookie');
    console.log(valueCookie);
  
    if (valueCookie === 'hasAccess') {
      console.log('hola1');
      return async (dispatch) => {
        console.log('hola');
        dispatch(checkingCookie());
      };
    } else {
      // Si no tienes que ejecutar el thunk, puedes simplemente devolver null o undefined
      return null;
    }
  };

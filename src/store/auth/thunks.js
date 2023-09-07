import { checkingCookie, login, logout } from "."
import { loginWithUserPassword } from "../../auth/providers";
import Cookies from 'js-cookie';

export const checkingAutentication = ( ) => {

    const valueCookie = Cookies.get('myCookie');
    console.log(valueCookie);

    if( valueCookie === 'hasAccess') {
        return (dispatch) => {
            console.log('hola');
            dispatch(checkingCookie());
        }
    } else return 

   
}

export const startLogin = (user, password) => {
    return async(dispatch) => {
        const result = await loginWithUserPassword(user, password);
        console.log(result);

        if( !result.ok ) return dispatch(logout(result));

        dispatch(login(result));
        Cookies.set('myCookie', 'hasAccess', { expires: 7 });


    }
}
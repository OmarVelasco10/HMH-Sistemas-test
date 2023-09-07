import AuthApi from "../apis/authAPI";

export const loginWithUserPassword = async(user, passwordUser) => {

    try {
        const {data} = await AuthApi.get();
        console.log(data);
        const { userName, password } = data;

        if(userName === user && password === passwordUser) {
            return {
                ok: true,
                user: userName,
                password
            }
        } else {
            return {
                ok: false,
                errorMessage: 'Las credenciales no coinciden'
            }
        }
        
    } catch (error) {
        console.log(error);
        
    }
}
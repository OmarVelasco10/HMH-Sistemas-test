import GitApi from "../apis/gitApi";

export const getGitHubProfile = async (user) => {
    try {
        console.log(GitApi);
        const {data} = await GitApi.get(user);

        if(data) {
            return {
                ok: true,
                data
            }
        }
        
       
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            errorMessage: 'Usuario no encontrado'
        }
    }
}
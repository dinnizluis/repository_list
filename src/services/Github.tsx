const axios = require('axios').default;
const baseUrl = `https://api.github.com/users/`;
async function getUserInfo(username: string) {
    const config = { url: `${baseUrl}${username}` };
    let retorno = '';
    
    try {
        const res = await axios(config);

        retorno = (JSON.stringify(res.data));
        return retorno;
    }
    catch (res) {
        retorno = (JSON.stringify(res));
        return retorno;
    }
}

async function getUserRepos(username: string) {
    const config = { url: `${baseUrl}${username}/repos` };
    let retorno = '';
    
    try {
        const res = await axios(config);

        retorno = (JSON.stringify(res.data));
        return retorno;
    }
    catch (res) {
        retorno = (JSON.stringify(res));
        return retorno;
    }
}

export {getUserInfo, getUserRepos};
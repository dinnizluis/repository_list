const axios = require('axios').default;

async function getUserInfo(username: string) {
    const config = { url: `https://api.github.com/users/${username}` };
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
    const config = { url: `https://api.github.com/userss/${username}/repos` };
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
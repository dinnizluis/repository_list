const axios = require('axios').default;
const baseUrl = `https://api.github.com/users/`;

function getStatusCode(err) {
    let code = 'status code ';
    let statusTxt = err.search(code);
    statusTxt = err.substring(statusTxt + code.length, (code.length + statusTxt + 3));
    const statusCode = parseInt(statusTxt);
    return statusCode;
}

async function getUserInfo(username: string) {
    const config = { url: `${baseUrl}${username}` };
    let retorno = {status: 0, value: '' };
    
    try {
        const res = await axios(config);

        retorno.value = (JSON.stringify(res.data));
        retorno.status = 200;
        return retorno;
    }
    catch (res) {
        retorno.value = (JSON.stringify(res));
        retorno.status = getStatusCode(retorno.value);
        throw retorno;
    }
}

async function getUserRepos(username: string) {
    const config = { url: `${baseUrl}${username}/repos` };
    let retorno = {status: 0, value: '' };
    
    try {
        const res = await axios(config);

        retorno.value = (JSON.stringify(res.data));
        retorno.status = 200;
        console.log('retorno ', retorno.value);
        return retorno;
    }
    catch (res) {
        retorno.value = (JSON.stringify(res));
        retorno.status = getStatusCode(retorno.value);
        return retorno;
    }
}

export {getUserInfo, getUserRepos};
const axios = require('axios').default;
const baseUrl = `https://api.github.com/users/`;

function dynamicsort(property,order) {
    var sort_order = 1;
    if(order === "desc"){
        sort_order = -1;
    }
    return function (a, b){
        // a should come before b in the sorted order
        if(a[property] < b[property]){
                return -1 * sort_order;
        // a should come after b in the sorted order
        }else if(a[property] > b[property]){
                return 1 * sort_order;
        // a and b are the same
        }else{
                return 0 * sort_order;
        }
    }
}

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
        return retorno;
    }
    catch (res) {
        retorno.value = (JSON.stringify(res));
        retorno.status = getStatusCode(retorno.value);
        throw retorno;
    }
}

async function getUserReposSortedByStars(username: string) {
    try {
        let ret = await getUserRepos(username);
        let sorted = JSON.parse(ret.value);
        sorted = sorted.sort((dynamicsort("stargazers_count", "desc")));
        ret.value = JSON.stringify(sorted);
        console.log('sorted = ', sorted);
        return ret;
    }
    catch (res){
        throw res;
    }

}

export {getUserInfo, getUserRepos, getUserReposSortedByStars};
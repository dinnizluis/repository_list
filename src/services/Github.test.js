
describe("Github API", function() {
    var GithubService = require('./Github');
    var userInfo;
    var repos;
    var sortedRepos;

    beforeEach(function() {
        userInfo = {status: Number, value: String};
        repos = {status: Number, value: String};
        sortedRepos = {status: Number, value: String};
    });

    it("deve trazer os dados do usuário dinnizluis", async function() {
        userInfo = await GithubService.getUserInfo('dinnizluis');
        expect(userInfo.status).toEqual(200);
    });

    it("deve listar os repositórios do usuário dinnizluis", async function() {
        repos = await GithubService.getUserRepos('dinnizluis');
        expect(repos.status).toEqual(200);
    });

    it("deve retornar um array de repositórios ordenado pela contagem de estrelas", async function() {
        sortedRepos = await GithubService.getUserReposSortedByStars('dinnizluis');
        let stagazers_count = [];
        sortedRepos = JSON.parse(sortedRepos.value);
        sortedRepos.map(() => stagazers_count.push(sortedRepos.stagazers_count));
        expect(isSortedDesc(stagazers_count)).toEqual(true);
    });

    function isSortedDesc(arr) {
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] < arr[i+1]){
                return false;
            }
        }
        return true;
    }

});
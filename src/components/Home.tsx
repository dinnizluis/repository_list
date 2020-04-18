import React, { useState, useEffect } from 'react';
import { getUserRepos } from '../services/Github';

const Home  = () => {
    const [retornoAPI, setRetornoAPI] = useState('');
    const [erroChamada, setErroChamada] = useState('');

    useEffect( () => {
        console.log('Iniciando aplicação......');
        console.log('** Teste de chamada à API **');
        getUserRepos('dinnizluis')
            .then((res) => {console.log('res', res); setRetornoAPI(res)})
            .catch((err) => {console.log('err ', err); setErroChamada(err) });
    }, []);

    return(
        <div>
            Home Page
            {retornoAPI !== null && (
                <div>
                    {retornoAPI}
                </div>
            )}
            {erroChamada !== null && (
                <div>
                    {erroChamada}
                </div>
            )}
        </div>
    );
}

export default Home;
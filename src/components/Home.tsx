import React, { useState, useEffect } from 'react';
import { getUserRepos } from '../services/Github';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles =  makeStyles({
    githubSearch: {
        width: '415px',
        height: '81px',
        fontFamily: 'Monaco',
        fontSize: '60px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#000000',
        margin: 0,
    },
    githubSearchTextStyle: {
        width: '415px',
        height: '81px',
        fontFamily: 'Raleway',
        fontWeight: 200,
        fontStyle: 'italic',
        margin: 0,
        fontSize: '60px',
        color: '#000000',
        alignSelf: 'flex-start',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        height: '81px',
        paddingTop: '244px',
    },
});

const Home  = () => {
    const [retornoAPI, setRetornoAPI] = useState('');
    const [erroChamada, setErroChamada] = useState('');
    const classes = useStyles();

    useEffect( () => {
        console.log('Iniciando aplicação......');
        console.log('** Teste de chamada à API **');
        getUserRepos('dinnizluis')
            .then((res) => {console.log('res', res); setRetornoAPI(res)})
            .catch((err) => {console.log('err ', err); setErroChamada(err) });
    }, []);

    return(
        <div>
            {/* Home Page */}
            <div className={classes.titleContainer}>
                <label>
                    <span className={classes.githubSearch}> Github </span>
                    <span className={classes.githubSearchTextStyle}> Search</span>
                </label>
            </div>
            {/* <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" />
            {retornoAPI !== null && (
                <div>
                    {retornoAPI}
                </div>
            )}
            {erroChamada !== null && (
                <div>
                    {erroChamada}
                </div>
            )} */}
        </div>
    );
}

export default Home;
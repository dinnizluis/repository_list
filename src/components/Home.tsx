import React, { useState, useEffect } from 'react';
import { getUserInfo } from '../services/Github';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import * as ROUTES from '../constants/routes';

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
    inputSearch: { 
        width: '650px', 
        height: '50px',
        backgroundColor: 'white',
        margin: 0,
    },
    searchButton: { 
        width: '100px', 
        height: '55px',
        borderRadius: '2px',
        backgroundColor: '#ac53f2',
        color: 'white',
    },
    searchIcon: {
        width:'30px',
        hright: '30.1px',
    },
});

const Home  = (props) => {
    const [retornoAPI, setRetornoAPI] = useState<{status: any, value: any}>();
    const [username, setUserName] = useState<string>('');
    const classes = useStyles();

    useEffect(() => {
        setRetornoAPI(undefined);
    }, []);

    const handleInputChange = () => event => {
        setUserName(event.target.value);
    }

    const searchUser = async () => {
        try {
            let user = await getUserInfo(username);
            setRetornoAPI(user);
        }
        catch (err) {
            setRetornoAPI(err);
        }
    }

    const handleClick = async () => {
        await searchUser();
    }

    useEffect(() => {
        console.log('retorno api : ', retornoAPI);
        if(retornoAPI !== undefined  && retornoAPI.status === 200) {
            props.history.push(ROUTES.RESULT + username);
        }
        else if(retornoAPI !== undefined  && retornoAPI.status !== 200){
            props.history.push(ROUTES.NOT_FOUND + username); 
        }
    }, [retornoAPI, username, props.history]);

    return(
        <div id='search-page-container'>
            <div id='title' className={classes.titleContainer}>
                <label>
                    <span className={classes.githubSearch}> Github </span>
                    <span className={classes.githubSearchTextStyle}> Search</span>
                </label>
            </div>
            <div id='search-field'>
                <TextField 
                    variant='outlined'
                    className={classes.inputSearch}
                    value={username}
                    onChange={handleInputChange()}
                >
                </TextField>
                <Button 
                    variant='contained'
                    className={classes.searchButton}
                    onClick={() => handleClick()}
                >
                    <SearchIcon
                        className={classes.searchIcon}
                    ></SearchIcon>
                </Button>
            </div>
        </div>
    );
}

export default Home;
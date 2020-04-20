import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import UserNotFound from './UserNotFound';
import * as ROUTES from '../constants/routes';
import { getUserInfo, getUserRepos } from '../services/Github';
import ResultDetails from './ResultDetails';

const useStyles = makeStyles({
    container: {
        flexDirection: 'row',
        // marginLeft: '35px',
        width: '100%',
    },
    bodyContainer: {
        paddingTop: '209px',
    },
    githubSearch: {
        flex: 4,
        width: '280px',
        height: '50px',
        fontFamily: 'Monaco',
        fontSize: '40px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#000000',
        alignSelf: 'flex-start',
        // marginLeft: '25px',
    },
    githubSearchTextStyle: {
        flex: 6,
        width: '280',
        height: '50px',
        fontFamily: 'Raleway',
        fontWeight: 200,
        fontStyle: 'italic',
        fontSize: '40px',
        color: '#000000',
        marginRight: '90px',
    },
    titleContainer: {
        alignSelf: 'flex-start',
        width: '100%',
        paddingTop: '35px',
        backgroudColor: 'red',
    },
    inputText: {
        fontFamily: 'Raleway',
        fontSize: '20px',
        fontWeight: 300,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#5c5c5c',
    },
    inputSearch: { 
        width: '650px', 
        height: '50px',
        backgroundColor: 'white',
        margin: 0,
        // paddingTop: '35px',
    },
    searchButton: { 
        width: '100px', 
        height: '55px',
        borderRadius: '2px',
        backgroundColor: '#ac53f2',
        color: 'white',
        marginBottom: 20,
    },
    searchIcon: {
        width:'30px',
        hright: '30.1px',
    },
});

const Result  = (props) => {
    const [username, setUsername] = useState<string>('');
    const [notFound, setNotFound] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [userInfo, setUserinfo] = useState<{status: any, value: any}>();
    const [userRepos, setUserrepos] = useState<{status: any, value: any}>();
    const classes = useStyles();

    const getData = async () => {
        console.log('getting data : ', username);
        try  {
            let info = await getUserInfo(username);
            let repos = await getUserRepos(username);
            setUserinfo(info);
            setUserrepos(repos);
            setNotFound(false);
            setLoaded(true);
            const fullPath = ROUTES.RESULT + username;
            console.log('fullpath : ', fullPath);
            props.history.push(fullPath);
        } catch {
            setNotFound(true);
            setLoaded(true);
            const fullPath = ROUTES.RESULT + username + ROUTES.NOT_FOUND;
            console.log('fullpath : ', fullPath);
            props.history.push(fullPath);
        }
    }

    const handleInputChange = () => (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setUsername(event.target.value);
    }

    const handleClick = async () => {
        getData();  
    }

    useEffect(() => {
        if(username.length > 0){
            console.log('username changed : ', username);
            getData();
        }
    }, [username]);

    useEffect(() => {
        console.log('Ao construir o componente');
        let user: string = props.history.location.pathname.toString();
        user = user.substring(17);
        setUsername(user);
    }, [])

    return(
        <div id='result-page-container' className={classes.container}>
            <div id='header' className={classes.titleContainer}>
                <label>
                    <span className={classes.githubSearch}> Github </span>
                    <span className={classes.githubSearchTextStyle}> Search</span>
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
                </label>
            </div>
            {notFound && loaded &&(
            <div className={classes.bodyContainer}>
                <UserNotFound />
            </div>
            )}
            {!notFound && loaded &&(
                <ResultDetails commonProps={{info: userInfo, repos: userRepos}}/>
            )}
            {!loaded &&(
                <span>loading</span>
            )}
        </div>
    );
}

export default Result;
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import UserNotFound from './UserNotFound';
import * as ROUTES from '../constants/routes';
import { getUserInfo, getUserRepos } from '../services/Github';
import ResultDetails from './ResultDetails';
import Loader from 'react-loader-spinner';

const useStyles = makeStyles({
    container: {
        flexDirection: 'row',
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
        try  {
            let info = await getUserInfo(username);
            let repos = await getUserRepos(username);
            setUserinfo(info);
            setUserrepos(repos);
            setNotFound(false);
            setLoaded(true);
            const fullPath = ROUTES.RESULT + username;
            props.history.push(fullPath);
        } catch {
            setNotFound(true);
            setLoaded(true);
            const fullPath = ROUTES.RESULT + username + ROUTES.NOT_FOUND;
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
            getData();
        }
    }, [username]);

    useEffect(() => {
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
                        inputProps={{
                            style: {fontSize: '18px', fontFamily:  'Raleway', color: '#5c5c5c', fontWeight: 300,},
                        }}
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
                <div className={classes.bodyContainer}>
                <Loader
                    type="Oval"
                    color="#ac53f2"
                    height={100}
                    width={100}
                />
            </div>
            )}
        </div>
    );
}

export default Result;
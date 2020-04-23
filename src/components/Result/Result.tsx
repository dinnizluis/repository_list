import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UserNotFound from '../UserNotFound/UserNotFound';
import * as ROUTES from '../../constants/routes';
import { getUserInfo, getUserReposSortedByStars } from '../../services/Github';
import ResultDetails from '../ResultDetails/ResultDetails';
import Loader from 'react-loader-spinner';
import Search from '../../Icons/Search';
import theme from '../../theme';

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
        fontFamily: theme.Fonts.monaco,
        fontSize: '40px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: theme.Colors.black,
        alignSelf: 'flex-start',
    },
    githubSearchTextStyle: {
        flex: 6,
        width: '280',
        height: '50px',
        fontFamily: theme.Fonts.raleway,
        fontWeight: 200,
        fontStyle: 'italic',
        fontSize: '40px',
        color: theme.Colors.black,
        marginRight: '90px',
    },
    titleContainer: {
        alignSelf: 'flex-start',
        width: '100%',
        paddingTop: '35px',
    },
    inputText: {
        fontFamily: theme.Fonts.raleway,
        fontSize: '20px',
        fontWeight: 300,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: theme.Colors.gray,
    },
    inputSearch: { 
        width: '650px', 
        height: '50px',
        backgroundColor: theme.Colors.white,
        margin: 0,
        color: 'secondary',
    },
    searchButton: { 
        width: '100px', 
        height: '55px',
        borderRadius: '2px',
        backgroundColor: theme.Colors.lightPurple,
        color: theme.Colors.white,
        marginBottom: 20,
    },
    searchIcon: {
        width:'38px',
        hright: '38px',
    },
});

const Result  = (props) => {
    const getUsername = () => {
        let location = props.history.location.pathname.toString();
        if(location.includes(ROUTES.NOT_FOUND)) {
            return(location.substring(ROUTES.RESULT.length, location.match(ROUTES.NOT_FOUND).index));
        }
        else {
            return(location.substring(ROUTES.RESULT.length));
        }
    }
    const [username, setUsername] = useState<string>(getUsername());
    const [notFound, setNotFound] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [userInfo, setUserinfo] = useState<{status: any, value: any}>();
    const [userRepos, setUserrepos] = useState<{status: any, value: any}>();
    const classes = useStyles();

    useEffect(() => {
       setUsername(getUsername());
    }, [props.history.location.pathname]);

    const handleInputChange = () => (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setUsername(event.target.value);
    }

    const handleUsername = async () => {
        async function getData() {
            if(username.length > 0) {
                try  {
                    let info = await getUserInfo(username);
                    let repos = await getUserReposSortedByStars(username);
                    setUserinfo(info);
                    setUserrepos(repos);
                    setNotFound(false);
                    setLoaded(true);
                    const fullPath = ROUTES.RESULT + username;
                    props.history.push(fullPath);
                } catch (err) {
                    setNotFound(true);
                    setLoaded(true);
                    const fullPath = ROUTES.RESULT + username + ROUTES.NOT_FOUND;
                    props.history.push(fullPath);
                }
            }
        }
        
        getData();
    }   

    useEffect(() => {
        handleUsername();
    }, []);

    return(
        <div id='result-page-container' className={classes.container}>
            <div id='header' className={classes.titleContainer}>
                <label >
                    <label onClick={() => props.history.push('/')}>
                        <span className={classes.githubSearch}> Github </span>
                        <span className={classes.githubSearchTextStyle}> Search</span>
                    </label>
                    <TextField 
                        variant='outlined'
                        className={classes.inputSearch}
                        value={username}
                        onChange={handleInputChange()}
                        inputProps={{
                            style: {fontSize: '18px', fontFamily:  theme.Fonts.raleway, color: theme.Colors.gray, fontWeight: 300,},
                        }}
                    >
                    </TextField>
                    <Button 
                        variant='contained'
                        className={classes.searchButton}
                        onClick={() => handleUsername()}
                    >
                        <Search
                            className={classes.searchIcon}
                        ></Search>
                    </Button>
                </label>
            </div>
            {!loaded &&(
                <div className={classes.bodyContainer}>
                    <Loader
                        type="Oval"
                        color={theme.Colors.lightPurple}
                        height={100}
                        width={100}
                    />
                </div>
            )}
            {notFound && loaded &&(
            <div className={classes.bodyContainer}>
                <UserNotFound />
            </div>
            )}
            {!notFound && loaded &&(
                <ResultDetails commonProps={{info: userInfo, repos: userRepos}}/>
            )}
        </div>
    );
}

export default Result;
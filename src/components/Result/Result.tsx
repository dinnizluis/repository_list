import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UserNotFound from '../UserNotFound/UserNotFound';
import * as ROUTES from '../../constants/routes';
import { getUserInfo, getUserRepos } from '../../services/Github';
import ResultDetails from '../ResultDetails/ResultDetails';
import Loader from 'react-loader-spinner';
import Search from '../../Icons/Search';

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
        color: 'secondary',
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
        width:'38px',
        hright: '38px',
    },
});

const Result  = (props) => {
    const [username, setUsername] = useState<string>(props.history.location.pathname.toString().substring(17));
    const [notFound, setNotFound] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [userInfo, setUserinfo] = useState<{status: any, value: any}>();
    const [userRepos, setUserrepos] = useState<{status: any, value: any}>();
    const classes = useStyles();

    

    const handleInputChange = () => (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setUsername(event.target.value);
    }

    const handleClick = async () => {
        if(username.length > 0) {
            try  {
                console.log("hi");
                let info = await getUserInfo(username);
                let repos = await getUserRepos(username);
                setUserinfo(info);
                setUserrepos(repos);
                setNotFound(false);
                setLoaded(true);
                // const fullPath = ROUTES.RESULT + username;
                // props.history.push(fullPath);
            } catch {
                console.log("request failed");
                setNotFound(true);
                setLoaded(true);
                // const fullPath = ROUTES.RESULT + username + ROUTES.NOT_FOUND;
                // props.history.push(fullPath);
            }
        }
    }

    // useEffect(() => {
    //     if(username.length > 0){
    //         getData();
    //     }
    // }, [username]);

    useEffect(() => {

        async function getData() {
            if(username.length > 0) {
                try  {
                    console.log("hi");
                    let info = await getUserInfo(username);
                    let repos = await getUserRepos(username);
                    setUserinfo(info);
                    setUserrepos(repos);
                    setNotFound(false);
                    setLoaded(true);
                    const fullPath = ROUTES.RESULT + username;
                    props.history.push(fullPath);
                } catch {
                    console.log("request failed");
                    setNotFound(true);
                    setLoaded(true);
                    // const fullPath = ROUTES.RESULT + username + ROUTES.NOT_FOUND;
                    // props.history.push(fullPath);
                }
            }
        }
        
        console.log('username: ', username);
        console.log("getting data");
        getData();
    }, [username]);

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
                        color="#ac53f2"
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
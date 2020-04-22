import React from 'react';
import Img from 'react-image';
import { List, ListItem, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Organization from '../../Icons/Organization';
import Location from '../../Icons/Location';
import Star from '../../Icons/Star';
import Repositories from '../../Icons/Repositories';
import Followers from '../../Icons/Followers';
import theme from '../../theme';

const useStyles = makeStyles({
    container: { 
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        padding: 30,
    },
    leftSide: {
        display: 'flex',
        flexDirection: 'column',
        flex: 2,
        alignSelf: 'flex-start',
        backgroundColor: theme.Colors.white,
        height: '90%',
        marginLeft: 65,
    },
    infoItem: {
        display: 'flex',
        height: '30px',
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    infoIcon: {
        display: 'flex',
        alignSelf: 'flex-start',
        width: '30px',
        height: '30px',
    },
    infoText: {
        display: 'flex',
        fontFamily: theme.Fonts.raleway,
        fontWeight: 300,
        fontSize: '20px',
        color: '#5c5c5c',
        marginLeft: 2,
    },
    avatar: {
        display: 'flex',
        width: '280px',
        height: '280px',
        borderRadius: '2px',
        boxShadow: theme.Colors.boxShadow,
        padding: 5,
    },
    name: {
        display: 'flex',
        fontFamily: theme.Fonts.raleway,
        fontWeight: 300,
        fontSize: '35px',
        marginLeft: 2,
        color: theme.Colors.black,
        paddingBottom: 3,
    },
    infoSection: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '33px',
    },
    repoList: {
        display: 'flex',
        flex: 6,
        alignSelf: 'flex-start',
        backgroundColor: theme.Colors.white,
        marginLeft: 95,
    },
    labelItem: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '15px',
        marginBottom: '15px',
    },
    labelItemText: {
        display: 'flex',
        fontSize: '20px',
        fontFamily: theme.Fonts.raleway,
        color: theme.Colors.gray,
        fontWeight: 300,
        marginLeft: 5,
    },
    titleItem: {
        display: 'flex',
        fontFamily: theme.Fonts.raleway,
        fontSize: '35px',
        color: theme.Colors.lightPurple,
        fontWeight: 'normal',
    },
    subtitleItem: {
        display: 'flex',
        fontFamily: theme.Fonts.raleway,
        fontSize: '20px',
        color: theme.Colors.black,
        fontWeight: 300,
    },
    msg: {
        width: '315px',
        height: '41px',
        fontFamily: theme.Fonts.raleway,
        fontSize: '40px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: theme.Colors.lightPurple,
        paggingTop: '209px',
    },
});

const ResultDetails  = (props) => {
    const [info, setInfo] = React.useState(JSON.parse(props.commonProps.info.value));
    const [repos, setRepos] = React.useState(JSON.parse(props.commonProps.repos.value));
    const [loaded, setLoaded] = React.useState(false);
    const classes = useStyles();

    React.useEffect(() => {
        if(info !== undefined && repos !== undefined) {
            setLoaded(true);
        }
        else {
            setLoaded(false);
        }
    }, []);

    React.useEffect(() => {
        async function updateProps() {
            await setInfo(JSON.parse(props.commonProps.info.value));
            await setRepos(JSON.parse(props.commonProps.repos.value));
        }
        updateProps();
    }, [props.commonProps]);

    function ListRepos() {
        return(
            <List>
            {
                repos.map( (repo) => 
                    <ListItem key={repo.id}>
                        <div>
                            <div>
                                <div className={classes.titleItem}>{repo.name}</div>
                                <div className={classes.subtitleItem}>{repo.description}</div>
                            </div>
                            <div className={classes.labelItem}>
                                <Star />
                                <div className={classes.labelItemText}>{repo.stargazers_count}</div> 
                            </div>
                        </div> 
                    </ListItem>
                )
            }
            </List>
        )
    }

    const getStargazersCount = () => {
        let sum: number = 0;
        repos.map((repo) => sum = sum + repo.stargazers_count);
        return sum;
    };

    return(
        <div>
            {!loaded && (
                <div>
                    <span className={classes.msg}>Failed to get data</span>
                </div>
            )}
            {loaded && (
                <div id="user-info-container">
                    <label className={classes.container}>
                        <div className={classes.leftSide}>
                            <Img 
                                className={classes.avatar}
                                src={info.avatar_url}
                            />
                            <div className={classes.infoSection}>
                                <div className={classes.infoItem}>
                                    <span className={classes.name}> {info.name} </span>
                                </div>
                                <div className={classes.infoItem}>
                                    <span className={classes.infoText}>{info.login}</span>
                                </div>
                            </div>
                            <div className={classes.infoItem}>
                                <Organization className={classes.infoIcon}/>
                                <span className={classes.infoText}>{info.company}</span>
                            </div>
                            <div className={classes.infoItem}>
                                <Location className={classes.infoIcon}/>
                                <span className={classes.infoText}>{info.location}</span>
                            </div>
                            <div className={classes.infoItem}>
                                <Star className={classes.infoIcon}/>
                                <span className={classes.infoText}>{getStargazersCount()}</span>
                            </div>
                            <div className={classes.infoItem}>
                                <Repositories className={classes.infoIcon}/>
                                <span className={classes.infoText}>{info.public_repos}</span>
                            </div>
                            <div className={classes.infoItem}>
                                <Followers className={classes.infoIcon}/>
                                <span className={classes.infoText}>{info.followers}</span>
                            </div>
                        </div>
                        <div className={classes.repoList}>
                            <List> { ListRepos() } </List>
                        </div>
                    </label>
                </div>
            )}
        </div>
    );
}

export default ResultDetails;
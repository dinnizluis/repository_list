import React from 'react';
import Img from 'react-image'
import Loader from 'react-loader-spinner';
import { Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Organization from '../../Icons/Organization';
import Location from '../../Icons/Location';
import Star from '../../Icons/Star';
import Repositories from '../../Icons/Repositories';
import Followers from '../../Icons/Followers';

const useStyles = makeStyles({
    container: { 
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        // backgroundColor: 'purple',
        padding: 30,
    },
    leftSide: {
        display: 'flex',
        flexDirection: 'column',
        flex: 2,
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        height: '90%',
        borderColor: 'red',
        borderRadius: 10,
        borderWidth: 5,
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
        fontFamily: 'Raleway',
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
        boxShadow: '0 0 4px NaNpx var(--black-40)',
        padding: 5,
    },
    name: {
        display: 'flex',
        fontFamily: 'Raleway',
        fontWeight: 300,
        fontSize: '35px',
        marginLeft: 2,
        color: '#000000',
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
        backgroundColor: 'white',
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
        fontFamily: 'Raleway',
        color: '#5c5c5c',
        fontWeight: 300,
        marginLeft: 5,
    },
    titleItem: {
        display: 'flex',
        fontFamily: 'Raleway',
        fontSize: '35px',
        color: '#ac53f2',
        fontWeight: 'normal',
    },
    subtitleItem: {
        display: 'flex',
        fontFamily: 'Raleway',
        fontSize: '20px',
        color: '#000000',
        fontWeight: 300,
    }, 
});

interface GithubUser {
    login: string,
    id: number,
    node_id: string, 
    avatar_url: string,
    gravatar_id: number,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean,
    name: string,
    company: string,
    blog: string,
    location: string,
    email: string,
    hireable: boolean,
    bio: string,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: string,
    updated_at: string,     
}

interface GithubRepo {

}

const ResultDetails  = (props) => {
    const [info, setIfno] = React.useState<GithubUser>();
    const [repos, setRepos] = React.useState<{}>();
    const [loaded, setLoaded] = React.useState(false);
    const classes = useStyles();

    React.useEffect(() => {
        async function load () {
            // let state = props.commonProps.info.value;
            // state = JSON.parse(state);
            // await setIfno(state);
            // state = props.commonProps.repos.value;
            // state = JSON.parse(state);
            // await setRepos(state);
            // console.log(state);
        }
        load();
    }, []);

    React.useEffect(() => {
        setLoaded(true);
    }, [info, repos]);

    const handleClick = () => {
        console.log('Info : ', info);
        console.log('Repos : ', repos);
    }

    function generate(element) {
        return [0, 1, 2].map((value) =>
            React.cloneElement(element, {
            key: value,
            }),
        );
    }

    return(
        <div>
            {/* {!loaded && (
                <div>
                    <Loader
                        type="Oval"
                        color="#ac53f2"
                        height={100}
                        width={100}
                    />
                </div>
            )}
            {loaded && ( */}
                <div >
                    <label className={classes.container}>
                        <div className={classes.leftSide}>
                            <Img 
                                className={classes.avatar}
                                src="data:image/jpeg;base64,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" 
                            />
                            <div className={classes.infoSection}>
                                <div className={classes.infoItem}>
                                    <span className={classes.name}> Darth Vader </span>
                                </div>
                                <div className={classes.infoItem}>
                                    <span className={classes.infoText}>anakinskywalker</span>
                                </div>
                            </div>
                            <div className={classes.infoItem}>
                                <Organization className={classes.infoIcon}/>
                                <span className={classes.infoText}>The Galatic Empire</span>
                            </div>
                            <div className={classes.infoItem}>
                                <Location className={classes.infoIcon}/>
                                <span className={classes.infoText}>Tatooine</span>
                            </div>
                            <div className={classes.infoItem}>
                                <Star className={classes.infoIcon}/>
                                <span className={classes.infoText}>1.000.000</span>
                            </div>
                            <div className={classes.infoItem}>
                                <Repositories className={classes.infoIcon}/>
                                <span className={classes.infoText}>4</span>
                            </div>
                            <div className={classes.infoItem}>
                                <Followers className={classes.infoIcon}/>
                                <span className={classes.infoText}>9.999.999</span>
                            </div>
                        </div>
                        <div className={classes.repoList}>
                            <List>
                            {generate(
                                <ListItem>
                                    <div>
                                        <div>
                                            <div className={classes.titleItem}>Death Start</div>
                                            <div className={classes.subtitleItem}>The most powerful weapon in the universe</div>
                                        </div>
                                        <div className={classes.labelItem}>
                                            <Star />
                                            <div className={classes.labelItemText}>954</div> 
                                        </div>
                                    </div> 
                                </ListItem>,
                            )}
                            </List>
                        </div>
                    </label>
                </div>
            {/* )} */}
        </div>
    );
}

export default ResultDetails;
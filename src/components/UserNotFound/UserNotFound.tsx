import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    notFound: {
        width: '315px',
        height: '41px',
        fontFamily: 'Raleway',
        fontSize: '40px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#ac53f2',
    }
});

const UserNotFound  = (props) => {
    const classes = useStyles();
    return(
        <div id='not-found-page-container'>
            <span className={classes.notFound}> User not found :( </span>
        </div>
    );
}

export default UserNotFound;
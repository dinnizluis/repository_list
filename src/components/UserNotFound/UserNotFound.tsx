import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles({
    notFound: {
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
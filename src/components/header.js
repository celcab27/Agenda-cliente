import {AppBar, Toolbar, Typography, Button, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    container: {
        width:'95%',
        display:'flex',
        justifyContent:'space-between'
    },
    button: {
        margin: '1rem'
    }
}));

const Header = () => {
    const classes = useStyles();
    return(
        <AppBar position="static">
            <Toolbar className={classes.container}>
                <Typography variant="h6">
                    AGENDA
                </Typography>
                <div>
                    <Button variant="contained" color="secondary" className={classes.button}>Login</Button>
                    <Button variant="contained" color="secondary">Sign Up</Button>
                </div>
            </Toolbar>
        </AppBar>
     )
}

export default Header;
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  handleOpen
} from "@material-ui/core";
import SignIn from "./signin";

const useStyles = makeStyles(() => ({
  container: {
    width: "95%",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    margin: "1rem",
  },
  containerButton: {
    display: 'flex',
    gap: '1rem'
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.container}>
        <Typography variant="h6">AGENDA</Typography>
        <div className={classes.containerButton}>
          <SignIn></SignIn>
          <Button variant="contained" color="secondary">
            Sign Up
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

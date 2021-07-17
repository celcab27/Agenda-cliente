import { Button, Modal, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    margin: "100px",
  },
  modalBody: {
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    maxHeight: "200px",
    paddingTop: "0.5rem",
    alignItems: "center",
    flexDirection: "column",
    paddingLeft: "8rem",
    paddingRight: "8rem",
  },
  texFieldsContainer: {
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    width: "100%",
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    justifySelf: 'flex-end'
  }
}));

const SignIn = () => {
  const [open, setOpen] = useState();
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Sign in
      </Button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.modalBody}>
          <h2>INICIA SESIÓN:</h2>
          <div className={classes.texFieldsContainer}>
            <TextField
              className={classes.textField}
              placeholder="Mail"
            ></TextField>
            <TextField
              className={classes.textField}
              placeholder="Contraseña"
            ></TextField>
          </div>
          <div className={classes.buttonContainer}>
            <Button variant="contained">Cerrar</Button>
            <Button variant="contained" color="secondary">Ingresar</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SignIn;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from "../../components/table/table";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Main = () => {

  const classes = useStyles();

  return (
    <div className="main">
        <header></header>
        <div>
            <h1>Todos</h1>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Table/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    </div>
  );
}

export default Main;
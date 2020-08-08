import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function getModalStyle() {
  return {
    outline: `none`,
    maxHeight: `580px`,
    maxWidth: '60vw',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflowY: 'auto'
  };
}

const useStyles = makeStyles((theme) => ({
    radioContainer: {
        flexWrap: 'nowrap',
        flexDirection: 'row',
        '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        },
    },
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: '15px',
  },
  textField:{
    display: 'block',
    width: '81%',
  },
}));

export default function AddTodo({onAddTodo, todos}) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [statut, setStatut] = React.useState('todo');

  const index = todos.length - 1;

  const [inputs, setInputs] = useState({
    id: index >= 0 ? todos[index].id : 0,
    title: '',
    description: '',
    statut: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    const id = inputs.id + 1;
    const title = inputs.title;
    const description = inputs.description;
    onAddTodo({ id, title, description, statut});
    setInputs({
      id : id,
      title: '',
      description: '',
      statut: '',
    });
  };

  const handleInputChange = event => {
    event.persist();
    setStatut(event.target.value);
    const newInput = {
      ...inputs,
      [event.target.name]: event.target.value,
    };
    setInputs(newInput);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <form>
            To Do
            <TextField 
              className={classes.textField} 
              type="text"
              htmlFor="title"
              name="title"
              onChange={handleInputChange}
              value={inputs.title}
              label="Title" 
            />
            <TextField 
              className={classes.textField} 
              type="text"
              htmlFor="description"
              name="description"
              onChange={handleInputChange}
              value={inputs.description} 
              label="Description" 
            />
            <RadioGroup 
              className={classes.radioContainer} 
              aria-label="statut" 
              name="statut" 
              value={statut} 
              onChange={handleInputChange}>
                <FormControlLabel 
                  value="todo"
                  name="statut"
                  control={<Radio />} 
                  label="To Do" 
                />
                <FormControlLabel 
                  value="inprogress"
                  name="statut"
                  control={<Radio />} 
                  label="In Progress" 
                />
                <FormControlLabel 
                  value="done"
                  name="statut"
                  control={<Radio />} 
                  label="Done"
                />
            </RadioGroup>
            <Button variant="contained" color="primary">
                Cancel
            </Button>
            <Button 
              variant="contained" 
              color="primary"
              onClick={handleSubmit}
            >
                Add
            </Button>
        </form>
    </div>
  );

  return (
    <div>
      <AddIcon onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
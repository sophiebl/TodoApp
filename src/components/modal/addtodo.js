import React, {useState} from 'react';
import {makeStyles, withStyles } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

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
    console.log(todos)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [value, setValue] = React.useState('female');

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  console.log({todos});
  console.log(todos.length);
  const index = todos.length - 1;
  console.log(index);

  const [inputs, setInputs] = useState({
    id: index >= 0 ? todos[index].id : 0,
    title: '',
    description: '',
    // statut: '',
  });

  console.log({inputs})
  
  const handleSubmit = event => {
    console.log()
    event.preventDefault();
    console.log(inputs.id);
    const id = inputs.id + 1;
    const title = inputs.title;
    console.log(title);
    const description = inputs.description;
    onAddTodo({ id, title, description});
    setInputs({
      id : id,
      title: '',
      description: '',
      statut: '',
    });
    // handleClose();
  };

  const handleInputChange = event => {
    event.persist();
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);
    const newInput = {
      ...inputs,
      [event.target.name]: event.target.value,
    };
    console.log({newInput});
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
            {/* <RadioGroup 
              className={classes.radioContainer} 
              aria-label="statut" 
              name="statut" 
              value="" 
              onChange={handleInputChange}>
                <FormControlLabel 
                  // onChange={handleInputChange}
                  value={todo} 
                  name="todo"
                  control={<Radio />} 
                  label="To Do" 
                />
                <FormControlLabel 
                  // onChange={handleInputChange}
                  // value={input.statut} 
                  // name="status"
                  value={inprogress} 
                  name="inprogress"
                  control={<Radio />} 
                  label="In Progress" 
                />
                <FormControlLabel 
                  // onChange={handleInputChange}
                  // value={inputs.statut} 
                  // name="status"
                  value={done} 
                  name="done"
                  control={<Radio />} 
                  label="Done"
                />
            </RadioGroup> */}
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
      {/* <div className="button-modal-container"> */}
        {/* <button type="button" className="hidden-button" onClick={handleOpen}> */}
          <AddIcon onClick={handleOpen}/>
        {/* </button> */}
     {/* </div> */}
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


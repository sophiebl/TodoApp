import React, {useState} from 'react';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddTodo from '../modal/addtodo';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
  }));


const Table = () => {

    const classes = useStyles();

    const [todos, setTodos] = useState([
        { id: 1, title: "Woman Pearcoat", description: "Lorem ipsum dolor sit amet", statut: "todo"},
        { id: 2, title: "Woman Pearcoat", description: "Lorem ipsum dolor sit amet", statut: "inprogress"},
        { id: 3, title: "Woman Pearcoat", description: "Lorem ipsum dolor sit amet", statut: "done"},
    ])

    const handleAdd = todo => {
        const updatedTodos = [...todos];
        updatedTodos.push(todo);

        setTodos(updatedTodos);
    }

    const handleDelete = id => {
        const updatedTodos = [...todos];
        const index = updatedTodos.findIndex(todo => todo.id === id);

        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);

    }

  return (
    <div>
        <div className="header-table">
            <div>
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    className={classes.input}
                    placeholder="Search by title or descprtion"
                    inputProps={{ 'aria-label': 'Search by title or descprtion' }}
                />
                <IconButton className={classes.iconButton} aria-label="search">
                    <AddTodo onAddTodo={handleAdd} todos={todos}/>
                </IconButton>
            </div>
            <div>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button>All</Button>
                    <Button>To do</Button>
                    <Button>In Progress</Button>
                    <Button>Done</Button>
                </ButtonGroup>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                    <th>STATUS</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => 
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.description}</td>
                        <td>{todo.statut}</td>
                        <td>
                            <IconButton 
                                className={classes.iconButton} 
                                aria-label="delete"
                                onClick={() => handleDelete(todo.id) }
                            >
                                <DeleteOutlineIcon />
                            </IconButton>
                        </td>
                    </tr> 
                )}
            </tbody>
        </table>
    </div>
  );
}

export default Table;
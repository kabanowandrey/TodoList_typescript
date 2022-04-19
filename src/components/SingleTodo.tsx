import { useState } from "react";
import { Todo } from "../model"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import TodoList from "./TodoList";

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditeTodo] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
        );
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

const handleEdit = (e: React.FormEvent, id: number) => {

    setTodos(todos.map((todo) => (
        todo.id === id?{...todo, todo:editTodo} : todo
    )));
    setEdit(false);
};

    return (
        <form onSubmit={(e) => handleEdit(e, todo.id)}>
            {edit ? (
                <input value={editTodo} onChange={(e) => setEditeTodo(e.target.value)}/>
            ) : todo.isDone ? (
                <s className="todos_single_text">{todo.todo}</s>
            ) : (
                <span className="todos_single_text">{todo.todo}</span>
            )}

            <div>
                <span className="icon" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }}>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo
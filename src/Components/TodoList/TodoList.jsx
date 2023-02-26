import React, { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
const TodoList = ({ todos, onDelete, onComplete, onUpdate }) => {
    const [edit, setEdit] = useState({ id: null, title: "", status: false });
    const handleOnEdit = (editInput) => {
        onUpdate(edit.id, editInput);
        setEdit({ id: null, title: "", status: false });
    };
    return (
        <div className="flex flex-col gap-3">
            {!edit.id ? (
                todos
                    .sort((a, b) => a.id - b.id)
                    .map((item) => (
                        <Todo
                            key={item.id}
                            item={item}
                            onDelete={() => onDelete(item.id)}
                            onComplete={() => onComplete(item.id)}
                            onEdit={() => setEdit(item)}
                        />
                    ))
            ) : (
                <TodoForm submitTodos={handleOnEdit} edit={edit} />
            )}
        </div>
    );
};

export default TodoList;

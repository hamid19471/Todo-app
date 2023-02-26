import React from "react";
import Todo from "../Todo/Todo";
const TodoList = ({ todos, onDelete, onComplete }) => {
    return (
        <div className="flex flex-col gap-3">
            {todos
                .sort((a, b) => a.id - b.id)
                .map((item) => (
                    <Todo
                        key={item.id}
                        item={item}
                        onDelete={() => onDelete(item.id)}
                        onComplete={() => onComplete(item.id)}
                    />
                ))}
        </div>
    );
};

export default TodoList;

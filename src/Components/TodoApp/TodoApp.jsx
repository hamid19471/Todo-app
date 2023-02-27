import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const handleDeleteTodo = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id));
    };
    const handleAddNewTodo = (input) => {
        const newTodo = {
            id: Math.floor(Math.random() * 100),
            title: input,
            status: false,
        };
        setTodos([...todos, newTodo]);
    };
    const handleCompleteTodo = (id) => {
        const toggleStatus = todos.map((item) =>
            item.id === id ? { ...item, status: !item.status } : item,
        );
        setTodos(toggleStatus);
    };
    const handleUpdateTodo = (id, input) => {
        const editTitle = todos.map((item) =>
            item.id === id ? { ...item, title: input } : item,
        );
        setTodos(editTitle);
    };

    return (
        <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col items-center gap-2 mb-10">
                <h1 className="font-bold text-5xl text-slate-100">
                    Todo Application
                </h1>
                <span className="font-light text-sm uppercase text-slate-300">
                    manage task and todo application
                </span>
            </div>
            <div className="border-4 p-4 border-blue-600 rounded-xl ">
                <TodoForm submitTodos={handleAddNewTodo} />
            </div>
            <div>
                <NavBar
                    remainingTodo={
                        todos.filter((item) => item.status == false).length
                    }
                />
            </div>
            <TodoList
                todos={todos}
                onDelete={handleDeleteTodo}
                onComplete={handleCompleteTodo}
                onUpdate={handleUpdateTodo}
            />
        </div>
    );
};

export default TodoApp;

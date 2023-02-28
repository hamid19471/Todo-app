import React from "react";

const NavBar = ({
    remainingTodo,
    filteringTodo,
    todoStatus,
    setTodoStatus,
}) => {
    const handleFilterTodos = (event) => {
        setTodoStatus(event.target.value);
        filteringTodo(event.target.value);
    };
    return (
        <div className="text-white">
            <div className="flex gap-3 ">
                <h2>There is</h2>
                <span className="bg-violet-500 p-1 flex items-center justify-center w-6 h-6 rounded-full">
                    {remainingTodo}
                </span>
                Task Remaining
            </div>
            <div>
                <select
                    value={todoStatus}
                    onChange={handleFilterTodos}
                    className="w-full mt-3 p-2 text-slate-900 bg-violet-400 rounded-lg font-bold"
                >
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncompleted">Uncompleted</option>
                </select>
            </div>
        </div>
    );
};

export default NavBar;

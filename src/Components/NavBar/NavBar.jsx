import React from "react";

const NavBar = ({ remainingTodo }) => {
    return (
        <div className="text-white">
            <div className="flex gap-3 ">
                <h2>There is</h2>
                <span className="bg-violet-500 p-1 flex items-center justify-center w-6 h-6 rounded-full">
                    {remainingTodo}
                </span>
                Task Remaining
            </div>
        </div>
    );
};

export default NavBar;

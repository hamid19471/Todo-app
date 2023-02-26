import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
const Todo = ({ item, onDelete, onComplete, onEdit }) => {
    return (
        <div className="flex text-white font-semibold text-lg border-2 p-3 rounded-lg border-violet-500 items-center justify-between gap-72">
            <p
                onClick={onComplete}
                className={
                    item.status
                        ? "cursor-pointer opacity-30 line-through"
                        : "cursor-pointer opacity-100"
                }
            >
                {item.title}
            </p>
            <div className="flex gap-4">
                <button
                    onClick={onEdit}
                    className={
                        item.status
                            ? "hidden"
                            : "bg-violet-500 p-3 rounded-lg shadow-lg shadow-violet-900 hover:shadow-none hover:scale-105 duration-300"
                    }
                >
                    <PencilSquareIcon className="h-6 w-6" />
                </button>
                <button
                    className="bg-red-500 p-3 rounded-lg shadow-lg shadow-violet-900 hover:shadow-none hover:scale-105 duration-300"
                    onClick={onDelete}
                >
                    <TrashIcon className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
};

export default Todo;

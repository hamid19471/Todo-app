import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/solid";

const TodoForm = ({ submitTodos, edit }) => {
    const [input, setInput] = useState(edit ? edit.title : "");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        submitTodos(input);
        setInput("");
    };

    const handleChangeInput = (e) => {
        setInput(e.target.value);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="flex items-cente justify-center gap-5">
                <input
                    className="outline-none border-none p-2 placeholder:text-sm rounded-lg"
                    type="text"
                    value={input}
                    onChange={handleChangeInput}
                    placeholder={edit ? "Update Todo ..." : "Add Todo ..."}
                    autoFocus
                    required
                />
                {edit ? (
                    <>
                        <button
                            type="submit"
                            className="text-white bg-violet-500 py-2 px-2 cursor-pointer rounded-lg hover:scale-105 divide-neutral-500 transition-all"
                        >
                            <CheckIcon className="h-6 w-6 text-slate-100 " />
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            type="submit"
                            className="text-white bg-violet-500 py-2 px-2 cursor-pointer rounded-lg hover:scale-105 divide-neutral-500 transition-all"
                        >
                            <PlusIcon className="h-6 w-6 text-slate-100 " />
                        </button>
                    </>
                )}
            </div>
        </form>
    );
};

export default TodoForm;

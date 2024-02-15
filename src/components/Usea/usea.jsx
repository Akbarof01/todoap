import React from "react";

function Usea({ task, handleMarkAsDone, handleDeleteTask }) {
  return (
    <li className={`flex justify-between ${task.done ? "" : ""}`}>
      <div className="flex gap-4 items-center">
        <span>
          <svg
            className="w-[28px] cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgb(208, 72, 72)"
            onClick={handleMarkAsDone}
          >
            <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5Z"></path>
          </svg>
        </span>
        <span>{task.content}</span>
        <span className="px-8 py-1 rounded-lg text-xl text-white bg-[#e04a4a]">
          {task.category}
        </span>
      </div>
      <svg className="w-[28px] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" onClick={handleDeleteTask}>
        <path fill="#fb5656" d="M1.41 1.13L0 2.54l4.39 4.39l2.21 4.66l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h7.46l1.38 1.38A1.997 1.997 0 0 0 17 22c.67 0 1.26-.33 1.62-.84L21.46 24l1.41-1.41zM7 15l1.1-2h2.36l2 2z"/><path fill="#fb5656" d="M18.31 6H9.12l4.99 5h1.44z" opacity="0.3"/><path fill="#fb5656" d="M20 4H7.12l2 2h9.19l-2.76 5h-1.44l1.94 1.94c.54-.14.99-.49 1.25-.97l3.58-6.49C21.25 4.82 20.76 4 20 4M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2"/></svg>
    </li>
  );
}

export default Usea;

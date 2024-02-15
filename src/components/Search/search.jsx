import React from "react";

function Search({ value, onChange, placeholder, onClick }) {
  return (
    <div className="relative">
      <input
        className="w-[678px] placeholder-slate-400 bg-slate-200 px-4 py-2 text-xl rounded-r-[50px]"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <button
        className="flex items-start pt-1 w-16 justify-center h-[44px] absolute bg-[#EA5959] right-0 bottom-0 rounded-[82px]"
        onClick={onClick}
      >
        <svg className="mt-1.5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><mask id="lineMdPersonSearchFilled0"><g fill-opacity="0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><g fill="#fff" stroke="#fff"><path stroke-dasharray="20" stroke-dashoffset="20" d="M10 5C11.66 5 13 6.34 13 8C13 9.65685 11.6569 11 10 11C8.3431 11 7 9.65685 7 8C7 6.34315 8.3431 5 10 5z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"/></path><path stroke-dasharray="36" stroke-dashoffset="36" d="M10 15C14 15 17 17 17 18V19H3V18C3 17 6 15 10 15z" opacity="0"><set attributeName="opacity" begin="0.5s" to="1"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="36;0"/></path><animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"/></g><circle cx="16" cy="16" r="6"><animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.15s" values="0;1"/></circle><path fill="#fff" stroke="#fff" stroke-dasharray="30" stroke-dashoffset="30" d="M16 19C14.34 19 13 17.66 13 16C13 14.34 14.34 13 16 13C 17.66 13 19 14.34 19 16C19 17.66 17.66 19 16 19v4z" transform="rotate(-45 16 16)"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.4s" values="30;0"/><animate fill="freeze" attributeName="fill-opacity" begin="1.9s" dur="0.4s" values="0;1"/></path></g></mask><rect width="24" height="24" fill="#ffffff" mask="url(#lineMdPersonSearchFilled0)"/></svg>
      </button>
    </div>
  );
}

export default Search;

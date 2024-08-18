function SelectElement({title, options}) {

  return (
    <div className="p-2 pl-0">
      <p className="uppercase font-semibold font-inter text-sm tracking-wider mb-1">{title}</p>
      <div>
        <select 
          className="bg-black border border-gray-500 rounded-md font-inter py-2 px-3 pr-8 w-[170px] outline-none custom-select"
          defaultValue={options[0]} 
        >
          {options.map((value) =>(<option key={value} value={value}>{value}</option>))}
        </select>
      </div>
    </div>
  );
}

export default SelectElement;

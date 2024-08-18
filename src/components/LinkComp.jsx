function LinkComp({Icon, name}) {
  return (
    <>
      <a className="flex items-center py-1 pl-1 text-gray-400 font-medium hover:text-white duration-[250ms] cursor-pointer"><Icon className="mr-2 text-lg"/> {name}</a>
    </>
  )
}

export default LinkComp;

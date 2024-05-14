const Navbar = ({ onSave, onRestore }) => {
  return (
    <>
      <div className="p-2 flex justify-end">
        <button
          className=" m-2 bg-white border border-indigo-700 text-indigo-700 font-bold py-2 px-4 rounded"
          onClick={onRestore}
        >
          restore flow
        </button>
        <button
          className=" m-2 bg-white border border-indigo-700 text-indigo-700 font-bold py-2 px-4 rounded"
          onClick={onSave}
        >
          save flow
        </button>
      </div>
    </>
  );
};
export default Navbar;

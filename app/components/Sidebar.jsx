const SideBar = ({ nodeName, setNodeName, selectedNode, setSelectedNodes }) => {
  const handleInputChange = (event) => {
    setNodeName(event.target.value);
  };
  const onDragStart = (event) => {
    event.dataTransfer.setData("application/reactflow", "textnode");
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <aside className="w-64">
      {selectedNode ? (
        <>
          <div className="flex flex-col items-center border-y p-2  mb-3">
            Message
          </div>
          <div className="p-3">
            <textarea
              type="text"
              className="w-full pt-2 px-3 pb-3 text-gray-700 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-indigo-600"
              value={nodeName}
              onChange={handleInputChange}
            />
          </div>
        </>
      ) : (
        <div className="p-3">
          <div
            className="border border-indigo-600 w-32 h-20 cursor-move rounded-lg text-center flex justify-center"
            draggable
            onDragStart={(event) => onDragStart(event)}
          >
            Message
          </div>
        </div>
      )}
    </aside>
  );
};

export default SideBar;

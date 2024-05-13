"use client";
import ReactFlow, { useNodesState, useEdgesState } from "reactflow";
import { useState, useRef, useMemo, useCallback, useEffect } from "react";
import TextNode from "./components/TextNode";
import "reactflow/dist/style.css";
import SideBar from "./components/Sidebar";
import Navbar from "./components/NavBar";

const initialNodes = [
  {
    id: "1",
    type: "textnode",
    data: { label: "input nodes" },
    position: { x: 250, y: 5 },
  },
];

export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [nodeName, setNodeName] = useState("");
  const reactFlowWrapper = useRef(null);
  let id = 0;
  const getId = () => `created_node_${id++}`;
  const nodeTypes = useMemo(
    () => ({
      textnode: TextNode,
    }),
    []
  );
  useEffect(() => {
    if (selectedNodes.length > 0) {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === selectedNodes[0]?.id) {
            node.data = {
              ...node.data,
              label: nodeName,
            };
          }
          return node;
        })
      );
    } else {
      setNodeName("");
    }
  }, [nodeName, selectedNodes]);
  const onNodeClick = useCallback((e, node) => {
    console.log(node);
    setSelectedNodes([node]);
    setNodeName(node.data.label);
    setNodes((nodes) =>
      nodes.map((n) => ({
        ...n,
        selected: n.id === node.id,
      }))
    );
  }, []);
  console.log(nodes, selectedNodes);
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);
  const onDrop = useCallback((event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");

    if (typeof type === "undefined" || !type) {
      return;
    }

    const position = {
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    };
    const newNode = {
      id: getId(),
      type,
      position,
      data: { label: `${type}` },
    };
    setNodes((nds) => nds.concat(newNode));
  }, []);

  return (
    <div>
      <nav className="bg-slate-100 h-16">
        <Navbar />
      </nav>
      <main className="flex min-h-screen flex-row  justify-between">
        <div style={{ width: "100vw", height: "100vh" }} ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            onNodeClick={onNodeClick}
            onDragOver={onDragOver}
            onDrop={onDrop}
          />
        </div>
        <div className="border">
          <SideBar
            nodeName={nodeName}
            setNodeName={setNodeName}
            selectedNode={selectedNodes[0]}
            setSelectedNodes={setSelectedNodes}
          />
        </div>
      </main>
    </div>
  );
}

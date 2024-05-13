"use client";
import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
} from "reactflow";
import { useState, useRef } from "react";

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
  const reactFlowWrapper = useRef(null);

  return (
    <div>
      <nav className="bg-slate-100 h-16">
        <Navbar />
      </nav>
      <main className="flex min-h-screen flex-row  justify-between">
        <div style={{ width: "100vw", height: "100vh" }} ref={reactFlowWrapper}>
          <ReactFlow nodes={nodes} edges={edges}>
            <MiniMap />
            <Background />
            <Controls />
          </ReactFlow>
        </div>
        <div className="border">
          <SideBar />
        </div>
      </main>
    </div>
  );
}

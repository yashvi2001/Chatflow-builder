"use client"
import ReactFlow , {Controls , Background , MiniMap}from "reactflow";

import 'reactflow/dist/style.css';
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between">
      <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} >
        <MiniMap/>
        <Background/>
        <Controls/>
        </ReactFlow>
    </div>
    </main>
  );
}

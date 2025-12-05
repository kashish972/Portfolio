"use client";

import ExecutionLog from "../components/ExecutionLog";
import NodeSettings from "../components/NodeSettings";
import Toolbar from "../components/Toolbar";
import WorkflowCanvas from "../components/WorkflowCanvas";


export default function WorkflowPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white pt-20 overflow-hidden max-w-[100vw] overflow-x-hidden">
      <Toolbar />
      <WorkflowCanvas />
      <NodeSettings />
      <ExecutionLog />
    </div>
  );
}

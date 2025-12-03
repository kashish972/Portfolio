"use client";

import ExecutionLog from "../components/ExecutionLog";
import NodeSettings from "../components/NodeSettings";
import Toolbar from "../components/Toolbar";
import WorkflowCanvas from "../components/WorkflowCanvas";


export default function WorkflowPage() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Toolbar />
      <WorkflowCanvas />
      <NodeSettings />
      <ExecutionLog />
    </div>
  );
}

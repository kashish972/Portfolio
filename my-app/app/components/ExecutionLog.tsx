"use client";

import { useWorkflowStore } from "../store/workflowStore";


export default function ExecutionLog() {
  const logs = useWorkflowStore((s) => s.logs);

  return (
    <div className="relative w-full md:absolute md:bottom-0 md:left-48 md:right-72 h-48 p-3 bg-gray-950 border-t border-gray-700 overflow-y-auto shrink-0">
      <h3 className="font-bold mb-1">Execution Log</h3>

      {logs.map((l, i) => (
        <p key={i} className="text-sm text-gray-300">
          {l}
        </p>
      ))}
    </div>
  );
}

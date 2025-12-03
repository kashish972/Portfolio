"use client";

import { useWorkflowStore } from "../store/workflowStore";


export default function ExecutionLog() {
  const logs = useWorkflowStore((s) => s.logs);

  return (
    <div className="absolute bottom-0 left-48 right-72 h-50 p-3 bg-gray-950 border-t border-gray-700 overflow-y-auto">
      <h3 className="font-bold mb-1">Execution Log</h3>

      {logs.map((l, i) => (
        <p key={i} className="text-sm text-gray-300">
          {l}
        </p>
      ))}
    </div>
  );
}

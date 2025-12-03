"use client";

import { useWorkflowStore } from "../store/workflowStore";


export default function NodeSettings() {
  const selectedNode = useWorkflowStore((s) => s.selectedNode);
  const updateNode = useWorkflowStore((s) => s.updateNode);

  if (!selectedNode)
    return (
      <div className="w-72 p-4 bg-gray-800 border-l border-gray-700">
        <p className="text-gray-400">Select a node to edit</p>
      </div>
    );

  return (
    <div className="w-72 p-4 bg-gray-800 border-l border-gray-700">
      <h2 className="font-bold mb-4">Node Settings</h2>

      <label className="text-sm">Label</label>
      <input
        className="w-full p-2 mb-4 bg-gray-700 rounded"
        value={selectedNode.data.label}
        onChange={(e) =>
          updateNode(selectedNode.id, { label: e.target.value })
        }
      />

      <p className="text-gray-400 text-sm">Type: {selectedNode.type}</p>
    </div>
  );
}

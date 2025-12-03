import { useWorkflowStore } from "../store/workflowStore";

export default function Toolbar() {
  const addNode = useWorkflowStore((state) => state.addNode);
  const runFlow = useWorkflowStore((state) => state.runFlow);

  return (
    <div className="w-48 p-4 mt-20 pt-6 bg-gray-800 border-r border-gray-700">
      <h2 className="font-bold mb-4 text-white">Nodes</h2>

      <button onClick={() => addNode("Event")} className="w-full mb-3 bg-purple-600 p-2 rounded text-white">
        + Event Node
      </button>

      <button onClick={() => addNode("API")} className="w-full mb-3 bg-blue-600 p-2 rounded text-white">
        + API Node
      </button>

      <button onClick={() => addNode("Human")} className="w-full mb-3 bg-green-600 p-2 rounded text-white">
        + Human Node
      </button>

      <button onClick={runFlow} className="w-full mt-6 bg-red-600 p-2 rounded font-semibold text-white">
        ▶ Run Workflow
      </button>
    </div>
  );
}

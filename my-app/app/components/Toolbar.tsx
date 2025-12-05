import { useWorkflowStore } from "../store/workflowStore";

export default function Toolbar() {
  const addNode = useWorkflowStore((state) => state.addNode);
  const runFlow = useWorkflowStore((state) => state.runFlow);

  return (
    <div className="w-full md:w-48 p-4 bg-gray-800 border-b md:border-b-0 md:border-r border-gray-700 flex flex-row md:flex-col gap-3 shrink-0 overflow-x-auto md:overflow-visible items-center md:items-stretch no-scrollbar">
      <h2 className="font-bold mb-0 md:mb-4 text-white hidden md:block">Nodes</h2>

      <button onClick={() => addNode("Event")} className="whitespace-nowrap md:w-full bg-purple-600 p-2 rounded text-white text-sm md:text-base">
        + Event Node
      </button>

      <button onClick={() => addNode("API")} className="whitespace-nowrap md:w-full bg-blue-600 p-2 rounded text-white text-sm md:text-base">
        + API Node
      </button>

      <button onClick={() => addNode("Human")} className="whitespace-nowrap md:w-full bg-green-600 p-2 rounded text-white text-sm md:text-base">
        + Human Node
      </button>

      <button onClick={runFlow} className="whitespace-nowrap md:w-full md:mt-6 bg-red-600 p-2 rounded font-semibold text-white text-sm md:text-base ml-auto md:ml-0">
        ▶ Run Workflow
      </button>
    </div>
  );
}

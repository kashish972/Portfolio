/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { nanoid } from "nanoid";
import { Node, Edge } from "reactflow";

type WorkflowStore = {
  nodes: Node[];
  edges: Edge[];
  selectedNode: Node | null;

  logs: string[];
  addLog: (log: string) => void;
  clearLogs: () => void;

  setNodes: (updater: any) => void;
  setEdges: (updater: any) => void;

  setSelectedNode: (node: Node | null) => void;
  addNode: (type: string) => void;
  updateNode: (id: string, data: any) => void;

  runFlow: () => void;
};

export const useWorkflowStore = create<WorkflowStore>((set, get) => ({
  nodes: [],
  edges: [],
  selectedNode: null,

  logs: [],
  addLog: (log) =>
    set((state) => ({ logs: [...state.logs, log] })),
  clearLogs: () => set({ logs: [] }),

  setNodes: (updater) =>
    set((state) => ({
      nodes: typeof updater === "function" ? updater(state.nodes) : updater,
    })),

  setEdges: (updater) =>
    set((state) => ({
      edges: typeof updater === "function" ? updater(state.edges) : updater,
    })),

  setSelectedNode: (node) => set({ selectedNode: node }),

  addNode: (type) =>
  set((state) => ({
    nodes: [
      ...state.nodes,
      {
        id: nanoid(),
        type,
        position: {
          x: Math.random() * 400,
          y: Math.random() * 300,
        },
        data: { 
          label: `${type.toUpperCase()} Node`,
          type, // optional, but useful
        },
      },
    ],
  })),


  updateNode: (id, newData) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === id
          ? { ...node, data: { ...node.data, ...newData } }
          : node
      ),
      selectedNode:
        state.selectedNode?.id === id
          ? {
              ...state.selectedNode,
              data: { ...state.selectedNode.data, ...newData },
            }
          : state.selectedNode,
    })),

 runFlow: () => {
  const { nodes, edges, addLog, clearLogs } = get();

  clearLogs();
  addLog("🚀 Workflow started...");
  addLog(`Nodes: ${nodes.length}`);
  addLog(`Edges: ${edges.length}`);

  nodes.forEach((n) => {
    addLog(`Executing node → ${n.data?.label ?? "Unnamed Node"}`);
  });

  addLog("✅ Workflow completed");
},

}));

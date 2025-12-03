/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ReactFlow, {
  Background,
  Controls,
  addEdge,
  MiniMap,
  Edge,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
} from "reactflow";
import "reactflow/dist/style.css";
import { useWorkflowStore } from "../store/workflowStore";
import DefaultNode from "./DefaultNode";

export default function WorkflowCanvas() {
  const nodeTypes = {
    human: DefaultNode,
    api: DefaultNode,
    event: DefaultNode,
  };

  const { nodes, edges, setNodes, setEdges, setSelectedNode } =
    useWorkflowStore();

  return (
    <div className="flex-1 h-[650px] mt-20 border border-gray-200 rounded">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={(changes) =>
          setNodes((nds: Node<any>[]) => applyNodeChanges(changes, nds))
        }
        onEdgesChange={(changes) =>
          setEdges((eds: Edge<any>[]) => applyEdgeChanges(changes, eds))
        }
        onConnect={(params) =>
          setEdges((eds: Edge[]) => addEdge(params, eds))
        }
        onNodeClick={(event, node) => setSelectedNode(node)}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
}

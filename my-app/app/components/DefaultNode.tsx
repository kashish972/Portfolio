"use client";

import { NodeProps } from "reactflow";

export default function DefaultNode({ data }: NodeProps) {
  return (
    <div className="px-3 py-2 bg-white rounded shadow border">
      <p className="font-bold text-sm">
        {data?.label ?? "Unnamed Node"}
      </p>
    </div>
  );
}

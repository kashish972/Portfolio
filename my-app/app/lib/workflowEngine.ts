// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function runWorkflow(nodes: any[], edges: any[], pushLog: (arg0: string) => void) {
  let current = nodes[0];
  if (!current) {
    pushLog("❌ No nodes to run!");
    return;
  }

  pushLog("🚀 Starting workflow...");

  while (current) {
    pushLog(`▶ Executing: ${current.data.label}`);
    await new Promise((res) => setTimeout(res, 700));

    const nextEdge = edges.find((e) => e.source === current.id);
    if (!nextEdge) break;

    current = nodes.find((n) => n.id === nextEdge.target);
  }

  pushLog("✅ Workflow Completed!");
}

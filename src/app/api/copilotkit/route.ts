import {
  CopilotRuntime,
  ExperimentalEmptyAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { LlamaIndexAgent } from "@ag-ui/llamaindex";

import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
 
  const agentUrl = process.env.AGENT_URL ?? process.env.LLAMAINDEX_AGENT_URL ?? "http://127.0.0.1:9000/run";

  // Avoid cross-package type conflicts on Vercel by loosening the type here.
  const agents: any = {
    sample_agent: new LlamaIndexAgent({
      url: agentUrl,
    }),
  };

  const runtime = new CopilotRuntime({
    agents,
  })

  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter: new ExperimentalEmptyAdapter(),
    endpoint: `/api/copilotkit`,
  });

  return handleRequest(request);
}

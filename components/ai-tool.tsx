"use client"

import type { AiToolConfig } from "@/lib/ai-tools"
import { AiTextTool } from "@/components/ai/ai-text-tool"
import { AiImageTool } from "@/components/ai/ai-image-tool"
import { AiChatTool } from "@/components/ai/ai-chat-tool"

export function AiTool({ tool }: { tool: AiToolConfig }) {
  if (tool.engine === "image") return <AiImageTool />
  if (tool.engine === "chat") return <AiChatTool />
  return <AiTextTool tool={tool} />
}

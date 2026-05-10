"use client";

import { createContext, useContext, type ReactNode } from "react";

const AssistantThinkingContext = createContext<string | null>(null);

export function AssistantThinkingProvider({
  value,
  children,
}: {
  value: string | null;
  children: ReactNode;
}) {
  return (
    <AssistantThinkingContext.Provider value={value}>
      {children}
    </AssistantThinkingContext.Provider>
  );
}

/** 无 Provider 时为 null；用于在助手气泡内展示流式「思考 / 步骤」文案 */
export function useAssistantThinkingOptional(): string | null {
  return useContext(AssistantThinkingContext);
}

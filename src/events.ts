export type ModelEventType =
  | { type: 'llm_start'; data: LLMStartEvent }
  | { type: 'llm_content'; data: LLMContentEvent }
  | { type: 'llm_stop'; data: LLMFinishEvent }
  | { type: 'tool_start'; data: ToolStartEvent }
  | { type: 'tool_result'; data: ToolResultEvent }
  | { type: 'model_error'; data: string }
  | { type: 'unknown_error'; data: string };

export interface ChatCompletionChunk {
  id: string;
  created: number;
  model: string;
  object: string;
  choices: ChatCompletionChunkChoice[];
  usage?: ModelUsage;
}

export interface ChatCompletionDelta {
  role?: string;
  content?: string;
  tool_calls?: ToolCall[];
}

export interface ToolCall {
  id: string;
  type: string;
  function: FunctionCall;
}
export interface FunctionCall {
  name: string;
  arguments: string;
}
export interface ChatCompletionChunkChoice {
  delta: ChatCompletionDelta,
  index: number

  finish_reason?: string
  logprobs?: any
}

export interface ModelUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  cost: number
}

export interface LLMContentEvent {
  content: string;
}

export interface LLMStartEvent {
  provider_name: string;
  model_name: string;
  input: string;
}

export interface LLMFinishEvent {
  provider_name: string;
  model_name: string;
  output?: string;
  usage?: ModelUsage;
  finish_reason: ModelFinishReason;
  tool_calls: ModelToolCall[];
}

export interface ModelToolCall {
  tool_id: string;
  tool_name: string;
  input: string;
}

export enum ModelFinishReason {
  Stop = 'stop',
  StopSequence = 'stop_sequence',
  Length = 'length',
  ToolCalls = 'tool_calls',
  ContentFilter = 'content_filter',
  Guardrail = 'guardrail',
  Other = 'other'
}

export interface ToolStartEvent {
  tool_id: string;
  tool_name: string;
  input: string;
}

export interface ToolResultEvent {
  tool_id: string;
  tool_name: string;
  is_error: boolean;
  output: string;
}

export interface ModelToolResult {
  tool_id: string;
  tool_name: string;
  output: string;
  is_error: boolean;
}

import React from "react";
import { ChatMessage, MessageWithId } from "../../dto/ChatMessage";
import { Upload, Download } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { formatCost } from "../../utils/formatCost";

interface MessageMetricsProps {
  message?: ChatMessage | MessageWithId;
  className?: string;
}

export const MessageMetrics: React.FC<MessageMetricsProps> = ({
  message,
  className = "",
}) => {
  if (!message) return null;

  const metrics = message.metrics?.sort(
    (a, b) => (a.start_time_us || 0) - (b.start_time_us || 0),
  );
  if (!metrics || metrics.length === 0) return null;

  const usage = metrics[metrics.length - 1].usage;
  const ttft = metrics[metrics.length - 1].ttft;
  const cost = metrics[metrics.length - 1].cost;
  const duration = metrics[metrics.length - 1].duration;
  // Only show metrics if at least one value exists
  if (!usage && !ttft && !duration && !cost) return null;

  // Helper function to format milliseconds to seconds
  const formatToSeconds = (microseconds: number) => {
    const seconds = microseconds / 1000000;
    return seconds < 1 ? `${seconds.toFixed(2)}s` : `${seconds.toFixed(1)}s`;
  };
  const formatToMilliseconds = (microseconds: number) => {
    const milliseconds = microseconds / 1000;
    return milliseconds < 1
      ? `${milliseconds.toFixed(2)}ms`
      : `${milliseconds.toFixed(1)}ms`;
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={`flex items-center gap-3 text-xs text-neutral-500 cursor-help ${className}`}
          >
            {ttft !== undefined && (
              <div className="flex items-center gap-1">
                <span>TTFT:</span>
                <span>{formatToSeconds(ttft)}</span>
              </div>
            )}

            {duration !== undefined && (
              <div className="flex items-center gap-1">
                <span>Duration:</span>
                <span>{formatToSeconds(duration)}</span>
              </div>
            )}
            {cost && (
              <div className="flex gap-1 items-center">
                <span>Cost:</span>
                <span>{formatCost(cost)}</span>
              </div>
            )}

            {usage && (
              <div className="flex items-center gap-2">
                {usage.input_tokens && (
                  <div className="flex gap-1 items-center">
                    <Upload className="h-3 w-3" />
                    <span>{usage.input_tokens}</span>
                  </div>
                )}
                {usage.output_tokens && (
                  <div className="flex gap-1 items-center">
                    <Download className="h-3 w-3" />
                    <span>{usage.output_tokens}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <div className="space-y-2 py-1">
            <div className="font-semibold text-sm border-b border-neutral-700 pb-1 mb-2">
              Performance Metrics
            </div>

            {(ttft !== undefined || duration !== undefined) && (
              <div className="space-y-1">
                <div className="text-xs font-medium text-neutral-400">
                  Timing
                </div>
                {ttft !== undefined && (
                  <div className="flex justify-between items-center gap-8">
                    <span className="text-xs text-neutral-500">
                      Time to First Token:
                    </span>
                    <span className="text-xs font-mono">
                      {formatToMilliseconds(ttft)}
                    </span>
                  </div>
                )}
                {duration !== undefined && (
                  <div className="flex justify-between items-center gap-8">
                    <span className="text-xs text-neutral-500">
                      Total Duration:
                    </span>
                    <span className="text-xs font-mono">
                      {formatToMilliseconds(duration)}
                    </span>
                  </div>
                )}
              </div>
            )}
            {cost && (
              <div className="flex justify-between items-center gap-8">
                <span className="text-xs text-neutral-500">Cost:</span>
                <span className="text-xs font-mono">{formatCost(cost, 6)}</span>
              </div>
            )}
            {usage && (
              <div className="space-y-1 pt-1">
                <div className="text-xs font-medium text-neutral-400">
                  Token Usage
                </div>
                {usage.input_tokens && (
                  <div className="flex justify-between items-center gap-8">
                    <span className="text-xs text-neutral-500">Input:</span>
                    <span className="text-xs font-mono">
                      {usage.input_tokens.toLocaleString()}
                    </span>
                  </div>
                )}
                {usage.output_tokens && (
                  <div className="flex justify-between items-center gap-8">
                    <span className="text-xs text-neutral-500">Output:</span>
                    <span className="text-xs font-mono">
                      {usage.output_tokens.toLocaleString()}
                    </span>
                  </div>
                )}
                {usage.total_tokens && (
                  <div className="flex justify-between items-center gap-8 pt-1 border-t border-neutral-800">
                    <span className="text-xs text-neutral-500 font-medium">
                      Total:
                    </span>
                    <span className="text-xs font-mono font-medium">
                      {usage.total_tokens.toLocaleString()}
                    </span>
                  </div>
                )}
                {usage.is_cache_used && (
                  <div className="flex items-center gap-1 pt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-500">
                      Cache hit - faster response
                    </span>
                  </div>
                )}
              </div>
            )}

            {!ttft && !duration && !usage && (
              <div className="text-xs text-neutral-500 italic">
                No metrics available
              </div>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

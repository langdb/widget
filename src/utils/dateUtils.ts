/**
 * Format a date string to a readable time format
 * @param dateString ISO date string to format
 * @returns Formatted time string (e.g., "2:30 PM" or "Jun 26, 2:30 PM")
 */
import { formatDistanceToNow, differenceInMinutes } from "date-fns";

export const formatMessageTime = (dateString?: string): string => {
  if (!dateString) return "";

  // Convert format "2025-09-29 14:11:50.395000" to ISO format
  // Replace space with 'T' and ensure proper format
  const isoString = dateString.replace(" ", "T");

  // Parse as UTC time (assuming input is UTC)
  const date = new Date(isoString + "Z");
  if (isNaN(date.getTime())) return "";

  const now = new Date();
  const minutesAgo = differenceInMinutes(now, date);

  // For recent traces (< 60 minutes), show relative time
  if (minutesAgo < 60) {
    return formatDistanceToNow(date, { addSuffix: true });
  }
  // For traces from today, show time only
  if (now.toDateString() === date.toDateString()) {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  }

  return date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
};

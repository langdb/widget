/**
 * Format a date string to a readable time format
 * @param dateString ISO date string to format
 * @returns Formatted time string (e.g., "2:30 PM" or "Jun 26, 2:30 PM")
 */
export const formatMessageTime = (dateString?: string): string => {
  if (!dateString) return "";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";

  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();

  // Format: hours:minutes AM/PM
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  // If not today, add month and day
  if (!isToday) {
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  return date.toLocaleString("en-US", timeOptions);
};

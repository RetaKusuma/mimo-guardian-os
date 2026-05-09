export const runtimeLogs = [
  "[10:24:11] [Planner Agent] Intent detected: optimize_device",
  "[10:24:11] [Planner Agent] Decomposed into 7 subtasks",
  "[10:24:12] [Device Agent] Scanning storage, RAM, temperature",
  "[10:24:13] [Battery Agent] Detected 3 background drain sources",
  "[10:24:14] [Notification Agent] Prioritized 43 unread alerts",
  "[10:24:15] [Memory Agent] Matched usage pattern: travel + gaming",
  "[10:24:16] [Search Agent] Found duplicate videos: 4.8 GB",
  "[10:24:17] [Validator Agent] Safety check approved",
  "[10:24:18] [Automation Agent] Executing cleanup + power profile",
  "[10:24:20] [System] Guardian optimization completed in 1.92s"
];

export const metrics = [
  { name: "Battery Health", value: "94", suffix: "/100", trend: "+12%" },
  { name: "Storage Saved", value: "4.8", suffix: "GB", trend: "+2.1GB" },
  { name: "Notifications", value: "43", suffix: "summarized", trend: "92% priority" },
  { name: "Agents Active", value: "7", suffix: "online", trend: "safe" }
];

export const insights = [
  "Instagram used 23% background battery in 6h.",
  "4.8GB duplicate video cluster detected.",
  "Gaming mode recommended from 8–10 PM.",
  "Smart charging should pause at 80% overnight."
];

export const chartData = [
  { day: "Mon", score: 72, battery: 68 },
  { day: "Tue", score: 78, battery: 72 },
  { day: "Wed", score: 83, battery: 75 },
  { day: "Thu", score: 81, battery: 77 },
  { day: "Fri", score: 88, battery: 82 },
  { day: "Sat", score: 91, battery: 85 },
  { day: "Sun", score: 94, battery: 89 }
];

import time

logs = [
    "[Planner Agent] Intent detected: optimize_device",
    "[Planner Agent] Decomposed into 7 subtasks",
    "[Device Agent] Scanning storage, RAM, and thermal state",
    "[Battery Agent] Detected 3 background drain sources",
    "[Notification Agent] Prioritized 43 unread alerts",
    "[Memory Agent] Matched usage pattern: travel + gaming",
    "[Search Agent] Found duplicate videos: 4.8 GB",
    "[Validator Agent] Safety check approved",
    "[Automation Agent] Executing cleanup + power profile",
    "[System] Guardian optimization completed in 1.92s"
]

for line in logs:
    print(line)
    time.sleep(0.2)

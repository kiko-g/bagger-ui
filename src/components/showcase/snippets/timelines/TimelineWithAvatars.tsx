"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Activity = {
  id: string
  time: string
  user: {
    name: string
    avatar?: string
  }
  action: string
  target?: string
}

const activities: Activity[] = [
  {
    id: "1",
    time: "08:02",
    user: { name: "Alex Morgan", avatar: "https://i.pravatar.cc/100?img=12" },
    action: "commented on",
    target: "Issue #1349",
  },
  {
    id: "2",
    time: "10:44",
    user: { name: "Taylor Swift", avatar: "https://i.pravatar.cc/100?img=32" },
    action: "opened",
    target: "PR #245 Fix checkout flow",
  },
  {
    id: "3",
    time: "13:21",
    user: { name: "Jordan Lee", avatar: "https://i.pravatar.cc/100?img=5" },
    action: "assigned",
    target: "Issue #1351",
  },
]

export function TimelineWithAvatars() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="border-muted absolute top-0 left-[21px] h-full border-l" aria-hidden />
      <ul className="space-y-6">
        {activities.map((item) => (
          <li key={item.id} className="relative flex gap-4 pl-16">
            <div className="absolute top-0 left-0">
              <Avatar className="ring-background size-11 ring-2">
                <AvatarImage src={item.user.avatar} alt={item.user.name} />
                <AvatarFallback>
                  {item.user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="min-w-16 pt-1">
              <span className="text-muted-foreground text-xs tabular-nums">{item.time}</span>
            </div>
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium">{item.user.name}</span> {item.action}
                {item.target ? <span className="ml-1 font-medium">{item.target}</span> : null}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TimelineWithAvatars

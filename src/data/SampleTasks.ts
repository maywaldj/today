import type { Task } from "@/types/task"

export const sampleTasks: Task[] = [
    { 
        id: "1",
        title: "Buy Milk",
        completed: false,
        createdAt: "2026-05-01T08:00:00Z"
    },

    {
        id: "2",
        title: "Go for a walk",
        completed: true,
        createdAt: "2026-05-01T08:00:00Z"

    },

    {
        id: "3",
        title: "take the bins out",
        completed: false,
        dueDate: "2026-05-03T",
        createdAt: "2026-05-01T08:00:00Z"
    },

    {
        id: "4",
        title: "finish puzzle",
        completed: false,
        dueDate: "2026-04-25T",
        createdAt: "2026-05-01T08:00:00Z"
    },

    {
        id: "5",
        title: "code project",
        completed: false,
        dueDate: "2026-05-12T",
        createdAt: "2026-05-01T08:00:00Z"
    },

    {
        id: "6",
        title: "dashboard design",
        completed: false,
        dueDate: "2026-04-25T",
        notes: "map dashboard with ui panel",
        createdAt: "2026-05-01T08:00:00Z"
    },
]

"use client"

import { useState } from "react"
import { Plus, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"

type Task = {
  id: number
  title: string
  status: "todo" | "in-progress" | "done"
  project: string
}

export default function TaskManagement() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Design new landing page", status: "in-progress", project: "Website Redesign" },
    { id: 2, title: "Implement user authentication", status: "todo", project: "Mobile App" },
    { id: 3, title: "Write API documentation", status: "done", project: "Backend Services" },
  ])
  const [newTask, setNewTask] = useState("")
  const [newTaskProject, setNewTaskProject] = useState("")

  const addTask = () => {
    if (newTask && newTaskProject) {
      setTasks([
        ...tasks,
        { id: Date.now(), title: newTask, status: "todo", project: newTaskProject },
      ])
      setNewTask("")
      setNewTaskProject("")
    }
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const updateTaskStatus = (id: number, status: "todo" | "in-progress" | "done") => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status } : task)))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 pt-3">Task Management</h2>
      <div className="flex gap-4 mb-4 pb-5">
        <div className="flex-1">
          <Label htmlFor="new-task">New Task</Label>
          <Input
            id="new-task"
            placeholder="Enter new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="new-task-project">Project</Label>
          <Input
            id="new-task-project"
            placeholder="Enter project name"
            value={newTaskProject}
            onChange={(e) => setNewTaskProject(e.target.value)}
          />
        </div>
        <Button onClick={addTask} className="mt-auto">
          <Plus className="mr-2 h-4 w-4" /> Add Task
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Done</TableHead>
            <TableHead>Task</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>
                <Checkbox
                  checked={task.status === "done"}
                  onCheckedChange={(checked) => {
                    updateTaskStatus(task.id, checked ? "done" : "todo")
                  }}
                />
              </TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.project}</TableCell>
              <TableCell>
                <Select
                  value={task.status}
                  onValueChange={(value: "todo" | "in-progress" | "done") => updateTaskStatus(task.id, value)}
                >
                  <SelectTrigger className="w-[130px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todo">To Do</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="done">Done</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Button variant="destructive" size="icon" onClick={() => deleteTask(task.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}


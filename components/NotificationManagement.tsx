"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Notification = {
  id: number
  title: string
  message: string
}

export default function NotificationManagement() {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, title: "System Update", message: "The system will be down for maintenance on Saturday." },
    { id: 2, title: "New Feature", message: "Check out our new reporting dashboard!" },
  ])
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")

  const addNotification = () => {
    if (title && message) {
      setNotifications([...notifications, { id: Date.now(), title, message }])
      setTitle("")
      setMessage("")
    }
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 pt-3">Notification Management</h2>
      <div className="mb-4 pb-5">
        <Input
          placeholder="Notification Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-2"
        />
        <Textarea
          placeholder="Notification Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mb-2"
        />
        <Button onClick={addNotification}>Add Notification</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notifications.map((notification) => (
            <TableRow key={notification.id}>
              <TableCell>{notification.title}</TableCell>
              <TableCell>{notification.message}</TableCell>
              <TableCell>
                <Button variant="destructive" onClick={() => deleteNotification(notification.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}


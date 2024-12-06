"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Query = {
  id: number
  clientName: string
  queryText: string
  status: "Open" | "In Progress" | "Resolved"
}

export default function QueryManagement() {
  const [queries] = useState<Query[]>([
    { id: 1, clientName: "Client 1", queryText: "How do I reset my password?", status: "Open" },
    { id: 2, clientName: "Client 2", queryText: "I can't access the reporting dashboard.", status: "In Progress" },
    { id: 3, clientName: "Client 3", queryText: "Where can I find the user guide?", status: "Resolved" },
  ])

  const [selectedQuery, setSelectedQuery] = useState<Query | null>(null)
  const [solution, setSolution] = useState("")

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Query Management</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead>Query</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {queries.map((query) => (
            <TableRow key={query.id}>
              <TableCell>{query.clientName}</TableCell>
              <TableCell>{query.queryText}</TableCell>
              <TableCell>{query.status}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" onClick={() => setSelectedQuery(query)}>View Details</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Query Details</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <p><strong>Client:</strong> {selectedQuery?.clientName}</p>
                      <p><strong>Query:</strong> {selectedQuery?.queryText}</p>
                      <p><strong>Status:</strong> {selectedQuery?.status}</p>
                      <Textarea
                        placeholder="Enter solution..."
                        value={solution}
                        onChange={(e) => setSolution(e.target.value)}
                        className="mt-4"
                      />
                      <Button className="mt-2">Save Solution</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}


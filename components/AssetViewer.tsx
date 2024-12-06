"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Asset = {
  id: number
  name: string
  type: string
  size: string
  uploadDate: string
}

export default function AssetViewer() {
  const [assets] = useState<Asset[]>([
    { id: 1, name: "logo.png", type: "Image", size: "2.5 MB", uploadDate: "2023-06-01" },
    { id: 2, name: "report.pdf", type: "Document", size: "1.2 MB", uploadDate: "2023-06-02" },
    { id: 3, name: "presentation.pptx", type: "Presentation", size: "5.7 MB", uploadDate: "2023-06-03" },
  ])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Asset Viewer</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Upload Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.map((asset) => (
            <TableRow key={asset.id}>
              <TableCell>{asset.name}</TableCell>
              <TableCell>{asset.type}</TableCell>
              <TableCell>{asset.size}</TableCell>
              <TableCell>{asset.uploadDate}</TableCell>
              <TableCell>
                <Button variant="outline">View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}


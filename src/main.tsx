import React from "react"
import { createRoot } from "react-dom/client"
import { DataTable } from "./DataTable"
createRoot(document.getElementById("root")!).render(<DataTable rows={[{ id: "1", name: "Ada Lovelace", email: "ada@example.test" }, { id: "2", name: "Grace Hopper", email: "grace@example.test" }]} />)

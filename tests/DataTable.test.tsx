import { describe, expect, it } from "vitest"
import "@testing-library/jest-dom/vitest"
import { fireEvent, render, screen, within } from "@testing-library/react"
import { DataTable } from "../src/DataTable"
const rows = [{ id: "1", name: "Grace Hopper", email: "grace@example.test" }, { id: "2", name: "Ada Lovelace", email: "ada@example.test" }]
describe("DataTable", () => {
  it("sorts names and filters rows", () => {
    render(<DataTable rows={rows} />)
    const table = screen.getByRole("table")
    expect(within(table).getAllByRole("row")[1]).toHaveTextContent("Ada Lovelace")
    fireEvent.click(screen.getByRole("button", { name: "Email" }))
    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "grace" } })
    expect(within(table).getAllByRole("row")).toHaveLength(2)
    expect(table).toHaveTextContent("Grace Hopper")
    expect(table).not.toHaveTextContent("Ada Lovelace")
  })
})

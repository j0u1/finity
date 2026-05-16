import { test, expect } from "bun:test"
import { createMachine } from "./index"

test("начальное состояние", () => {
  const m = createMachine({ initial: 'red', transitions: { red: 'yellow' } })
  expect(m.current).toBe('red')
  expect(m.next()).toBe('yellow')
  expect(m.can('green')).toBe(false)
})
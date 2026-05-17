import { test, expect } from "bun:test"
import { createMachine } from "./index"

test("initial state", () => {
  const m = createMachine({ initial: 'red', transitions: { red: 'yellow' } })
  expect(m.current).toBe('red')
})

test("moveTo() changes state", () => {
  const m = createMachine({ initial: 'red', transitions: { red: 'yellow' } })
  expect(m.moveTo('yellow')).toBe('yellow')
})

test("canChangeTo() returns true if transition is possible", () => {
  const m = createMachine({ initial: 'red', transitions: { red: 'yellow' } })
  expect(m.canChangeTo('yellow')).toBe(true)
})

test("canChangeTo() returns false if transition is not possible", () => {
  const m = createMachine({ initial: 'red', transitions: { red: 'yellow' } })
  expect(m.canChangeTo('green')).toBe(false)
})

test("moveTo() throws if no transition exists", () => {
  const m = createMachine({ initial: 'red', transitions: {} })
  expect(() => m.moveTo('yellow')).toThrow('No transition from "red"')
})
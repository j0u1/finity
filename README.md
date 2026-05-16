# @j0u1/finity

[![npm](https://img.shields.io/npm/v/@j0u1/finity)](https://www.npmjs.com/package/@j0u1/finity)
[![wakatime](https://wakatime.com/badge/user/42e0f82b-2688-4a48-85af-5eedd1812f70/project/7cf65f9a-042d-4ed8-ac25-717b8b4ff28b.svg)](https://wakatime.com/badge/user/42e0f82b-2688-4a48-85af-5eedd1812f70/project/7cf65f9a-042d-4ed8-ac25-717b8b4ff28b)

Lightweight finite state machine (FSM) library for TypeScript.

## Install

```bash
bun add @j0u1/finity
# or
npm install @j0u1/finity
```

## Usage

```ts
import { createMachine } from "@j0u1/finity"

const traffic = createMachine({
  initial: "red",
  transitions: {
    red: "yellow",
    yellow: "green",
    green: "yellow",
  },
})

traffic.current   // "red"
traffic.next()    // "yellow"
traffic.current   // "yellow"
traffic.can("green")  // true
traffic.can("red")    // false
```

## API

### `createMachine(config)`

Creates a new state machine.

| Parameter | Type | Description |
|---|---|---|
| `config.initial` | `string` | Initial state |
| `config.transitions` | `Record<string, string>` | Map of state transitions |

Returns an object with:

- **`current`** — current state
- **`next()`** — transitions to the next state, returns new state. Throws if no transition exists.
- **`can(state)`** — returns `true` if transition to given state is possible from current state
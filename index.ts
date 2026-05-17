interface ConfigType {
  initial: string,
  transitions: Record<string, string | string[]>
}

class FinityError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'FinityError'
  }
}

export function createMachine(config: ConfigType) {
  return {
    current: config.initial,
    transitions: config.transitions,

    moveTo(state: string) {
      const available = this.transitions[this.current]
      const states = Array.isArray(available) ? available : [available]
      if (!states.includes(state)) throw new FinityError(`No transition from "${this.current}" to "${state}"`)
      return this.current = state
    },
    canChangeTo(state: string) {
      const available = this.transitions[this.current]
      const states = Array.isArray(available) ? available : [available]
      return states.includes(state)
    }
  }
}

interface ConfigType {
  initial: string,
  transitions: Record<string, string>
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

    next() {
      const nextState = this.transitions[this.current]
      if (!nextState) throw new FinityError(`No transition from "${this.current}"`)
      return this.current = nextState
    },
    canChangeTo(state: string) {
      return this.transitions[this.current] === state
    }
  }
}

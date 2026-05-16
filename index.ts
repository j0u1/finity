interface ConfigType {
  initial: string,
  transitions: Record<string, string>
}

export function createMachine(config: ConfigType) {
  return {
    current: config.initial,
    transitions: config.transitions,

    next() {
      const nextState = this.transitions[this.current]
      if (!nextState) throw new Error(`No transition from "${this.current}"`)
      return this.current = nextState
    },
    can(state: string) {
      return this.transitions[this.current] === state
    }
  }
}

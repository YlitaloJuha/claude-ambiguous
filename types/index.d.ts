export type Flag = {
  /** What is unclear in the prompt. */
  unclear: string
  /** The fast model's best reading of it, from the conversation so far. */
  reading: string
}

declare module 'claude-code' {
  interface PluginState {
    ambiguous: {
      flag: Flag | null
      /** A reading waiting for the running turn's next tool result. */
      pendingReading: string | null
    }
  }
}

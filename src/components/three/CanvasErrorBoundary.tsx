import { Component, type ReactNode } from "react"

type Props = {
  fallback: ReactNode
  children: ReactNode
}
type State = { hasError: boolean }

/** Catches render/mount failures from the lazy-loaded 3D canvas and swaps in the static fallback. */
export class CanvasErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: unknown) {
    console.error("ArchitecturalCanvas render error", error)
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children
  }
}

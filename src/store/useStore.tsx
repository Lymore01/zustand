/* eslint-disable @typescript-eslint/no-unused-vars */
import create, {SetState} from "zustand";

interface State {
  count: number;
}

interface Actions {
  increment: () => void;
  decrement: () => void;
}

const useStore = create<State & Actions>((set: SetState<State>) => ({
  count: 0,
  increment: () => set((state: { count: number; }) => ({ count: state.count + 1 })),
  decrement: () => set((state: { count: number; }) => ({ count: state.count - 1 })),
}));

export default useStore;

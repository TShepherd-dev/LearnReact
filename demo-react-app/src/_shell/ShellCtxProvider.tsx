import { createContext, useReducer, useContext, type ReactNode } from 'react';

type ShellState = {
  header: boolean;
  showSideMenu: boolean;
  isSearchOpen: boolean;
  isMobileMenuOpen: boolean;
};

type ShellAction =
  | { type: 'showHeader' }
  | { type: 'setSideMenu'; show: boolean }
  | { type: 'toggleSearch'; open: boolean };

const initialShellState = {
  header: true,
  showSideMenu: false,
  isSearchOpen: false,
  isMobileMenuOpen: false,
};

const ShellCtx = createContext<ShellState | null>(null);
const ShellDispatchCtx = createContext<React.Dispatch<ShellAction> | null>(null);

function shellReducer(state: ShellState, action: ShellAction):ShellState {
  switch (action.type) {
    case 'showHeader': return { ...state, header: true };
    case 'setSideMenu': return { ...state, showSideMenu: action.show };
    case 'toggleSearch': return { ...state, isSearchOpen: action.open, isMobileMenuOpen: false };
    default: throw Error('Unknown action');
  }
}

export function ShellCtxProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(
    shellReducer, initialShellState);
  return (
    <ShellCtx value={state}>
      <ShellDispatchCtx value={dispatch}>
        {children}
      </ShellDispatchCtx>
    </ShellCtx>
  );
}
export const useShell = () => useContext(ShellCtx);
export const useShellDispatch = () => useContext(ShellDispatchCtx);
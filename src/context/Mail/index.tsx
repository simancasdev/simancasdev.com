import {IMailContext, ReducerAction, ReducerState} from "./types";
import {
  useMemo,
  useContext,
  useReducer,
  useCallback,
  createContext,
} from "react";

const MailContext = createContext<IMailContext>({
  isOpen: false,
  toggle: () => undefined,
});

export const useMail = () => useContext(MailContext);

export const MailProvider = ({children}: Readonly<{children: JSX.Element}>) => {
  const [state, dispatch] = useReducer(
    (state: ReducerState, action: ReducerAction): ReducerState => {
      switch (action.type) {
        case "toggle":
          return {
            isOpen: !state.isOpen,
          };

        default:
          return state;
      }
    },
    {isOpen: false}
  );

  const toggle = useCallback(() => {
    dispatch({type: "toggle"});
  }, []);

  const value = useMemo(() => ({...state, toggle}), [state]);
  return <MailContext.Provider value={value}>{children}</MailContext.Provider>;
};

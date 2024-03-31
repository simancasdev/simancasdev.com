export type ReducerState = {
  isOpen: boolean;
};

export type ContextFns = {
  toggle: () => void;
};

export type IMailContext = ReducerState & ContextFns;

/***********************************
 * Actions
 ***********************************/
export type ToggleMailAction = {
  type: "toggle";
};

export type ReducerAction = ToggleMailAction;

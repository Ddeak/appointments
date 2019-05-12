type StateType = {
  name: string;
  owner: string;
  breed: string;
  loading: boolean;
};

type ActionType = {
  type: string;
  payload: any;
};

export const initialReducerState = {
  name: "",
  owner: "",
  breed: "",
  loading: false
};

export const ActionTypes: { [key: string]: string } = {
  UpdateName: "@Pet/UpdateName",
  UpdateOwner: "@Pet/UpdateOwner",
  UpdateBreed: "@Pet/UpdateBreed",
  SetState: "@Pet/SetState",
  UpdateLoading: "@Pet/UpdateLoading"
};

export const Actions = {
  setName: (name: string) => ({
    type: ActionTypes.UpdateName,
    payload: name
  }),
  setOwner: (owner: string) => ({
    type: ActionTypes.UpdateOwner,
    payload: owner
  }),
  setBreed: (breed: string) => ({
    type: ActionTypes.UpdateBreed,
    payload: breed
  }),
  setState: (state: StateType) => ({
    type: ActionTypes.SetState,
    payload: state
  }),
  setLoading: (loading: boolean) => ({
    type: ActionTypes.UpdateLoading,
    payload: loading
  })
};

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.UpdateName:
      return { ...state, name: action.payload };
    case ActionTypes.UpdateOwner:
      return { ...state, owner: action.payload };
    case ActionTypes.UpdateBreed:
      return { ...state, breed: action.payload };
    case ActionTypes.UpdateLoading:
      return { ...state, loading: action.payload };
    case ActionTypes.SetState:
      return { ...action.payload };
    default:
      throw new Error();
  }
};

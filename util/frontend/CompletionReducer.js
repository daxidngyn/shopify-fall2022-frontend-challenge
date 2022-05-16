export const completionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_COMPLETION":
      return [
        ...state,
        {
          id: action.completion.id,
          createdAt: action.completion.createdAt,
          prompt: action.completion.prompt,
          answer: action.completion.answer,
          engine: action.completion.engine,
        },
      ];
    case "REMOVE_COMPLETION":
      return state.filter((completion) => completion.id !== action.id);
    case "CLEAR_COMPLETIONS":
      return [];
    default:
      return state;
  }
};

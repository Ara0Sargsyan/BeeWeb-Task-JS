import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blocks: [],
};

export const TextBlocksSlice = createSlice({
  name: "TextBlocks",
  initialState,
  reducers: {
    createTextBlock(state, action) {
      state.blocks = [
        ...state.blocks,
        {
          id: state.blocks.length
            ? Math.max(...state.blocks.map((e) => +e.id)) + 1
            : 1,
          value: action.payload,
        },
      ];
    },
    deleteTextBlock(state, action) {
      state.blocks = state.blocks.filter(
        (block) => block.id !== action.payload
      );
    },
  },
  extraReducers: {},
});

export default TextBlocksSlice.reducer;
export const { deleteTextBlock, createTextBlock } = TextBlocksSlice.actions;

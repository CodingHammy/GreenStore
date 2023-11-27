import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plantsReviews: {},
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const { plantId, rating, comment, name, email } = action.payload;
      if (state.plantsReviews[plantId]) {
        state.plantsReviews[plantId].push({
          rating,
          comment,
          name,
          email,
        });
      } else {
        state.plantsReviews[plantId] = [
          {
            rating,
            comment,
            name,
            email,
          },
        ];
      }
    },
  },
});

export const { addComment } = reviewSlice.actions;

export default reviewSlice.reducer;

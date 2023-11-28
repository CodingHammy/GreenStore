import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plantsReviews: {},
};

// plantsReviews = {plantId:{userCommentandDetails:{rating:'',comment:'',name:'',email:''}, totalRating:[]}}

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const { plantId, rating, comment, name, email } = action.payload;

      const totalRating = state.plantsReviews[plantId]
        ? state.plantsReviews[plantId].reduce(
            (total, review) => total + review.rating,
            0
          ) + rating
        : rating;

      if (state.plantsReviews[plantId]) {
        totalRating,
          state.plantsReviews[plantId].push({
            rating,
            comment,
            name,
            email,
          });
      } else {
        state.plantsReviews[plantId] = [
          totalRating,
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

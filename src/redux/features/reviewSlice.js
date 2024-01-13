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

export const selectRatingsForPlant = (state, plantId) => {
  const plantReviews = state.review.plantsReviews[plantId];

  if (plantReviews && plantReviews.length > 0) {
    const sum = plantReviews.reduce(
      (total, review) => total + parseInt(review.rating),
      0
    );
    const average = sum / plantReviews.length;
    return Math.round(average);
  }

  return 0;
};

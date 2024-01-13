"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const {
        uid,
        email,
        givenName,
        familyName,
        country,
        street,
        flat,
        city,
        county,
        postcode,
        phoneNumber,
        password,
      } = action.payload;
      const emailUsed = state.users.find((item) => item.email === email);
      if (!emailUsed) {
        state.users.push({
          uid,
          email,
          givenName,
          familyName,
          country,
          street,
          flat,
          city,
          county,
          postcode,
          phoneNumber,
          password,
        });
      }
    },
    signIn: (state, action) => {
      const { email, password } = action.payload;
      const emailUsed = state.users.find((item) => item.email === email);
      if (emailUsed) {
        if (emailUsed.password === password) {
          alert("logged in twice");
        }
      } else {
        alert("email doesnt exist");
      }
    },
  },
});

export const { addUser, signIn } = authSlice.actions;

export default authSlice.reducer;

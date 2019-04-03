import * as React from "react";
import { Action } from "./";

export const getPosts: Action = async ({ state, effects }) => {
  state.isLoadingPosts = true;
  state.posts = await effects.request(
    "https://jsonplaceholder.typicode.com/posts"
  );
  state.isLoadingPosts = false;
};

export const changeShowCount: Action<React.ChangeEvent<HTMLSelectElement>> = (
  { state },
  event
) => {
  state.showCount = event.currentTarget.value;
};

export const changeShowCountTo: Action<React.MouseEvent<HTMLButtonElement>> = (
  { state },
  event
) => {
  state.showCount = event.currentTarget.value;
};

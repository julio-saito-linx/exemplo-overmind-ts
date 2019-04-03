import { Derive } from "overmind";

export type Post = {
  id: string;
  title: string;
  body: string;
};

export type State = {
  isLoadingPosts: boolean;
  showCount: string;
  posts: Post[];
  filteredPosts: Derive<State, Post[]>;
};

export const state: State = {
  isLoadingPosts: true,
  showCount: "10",
  posts: [],
  filteredPosts: state => state.posts.slice(0, Number(state.showCount))
};

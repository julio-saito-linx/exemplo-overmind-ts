import { derived } from 'overmind';

export type Post = {
  id: string;
  title: string;
  body: string;
};

export type State = {
  isLoadingPosts: boolean;
  showCount: string;
  posts: Post[];
  filteredPosts: Post[];
};

export const state: State = {
  isLoadingPosts: true,
  showCount: '10',
  posts: [],
  filteredPosts: derived((currentState: State) => currentState.posts.slice(0, Number(currentState.showCount))),
};

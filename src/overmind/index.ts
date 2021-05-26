import { Overmind, IConfig, IAction } from 'overmind';
import { createHook } from 'overmind-react';
import { state } from './state';
import * as actions from './actions';
import * as effects from './effects';

const config = {
  state,
  actions,
  effects
};

export type Config = IConfig<typeof config>;

export type Action<Input = void> = IAction<Config, Input>;

export const overmind = new Overmind(config);

export const useOvermind = createHook<typeof config>();

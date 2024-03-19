import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    squaredCount(state) {
      return state.count * state.count;
    },
  },
  actions: {
    increment() {
      console.log('증가');
      this.count++;
    },

    decrement() {
      console.log('감소');
      this.count--;
    },
  },
});

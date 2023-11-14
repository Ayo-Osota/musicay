import { defineStore } from "pinia";

export const useSidenavStore = defineStore('sidenav', {
    state: () => ({
        isOpen: false,
    }),
    actions: {
        close() {
            this.isOpen = false;
        },
        open() {
            this.isOpen = true;
        },
        toggle() {
            this.isOpen = !this.isOpen;
        }
    },
    getters: {
        hiddenClass(state) {
            return state.isOpen ? 'translate-x-0' : '-translate-x-full';
        }
    }
});
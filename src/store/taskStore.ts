import { writable } from "svelte/store";

type Task = {
    task: string,
    done: boolean
}

export const tasks = writable<Task[]>([]);

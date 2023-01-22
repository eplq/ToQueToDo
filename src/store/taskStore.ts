import { writable } from "svelte/store";

type Task = {
    task: string,
    done: boolean
}

export const tasks = writable<Task[]>(JSON.parse(localStorage.getItem('tasks') || "[]"));

tasks.subscribe(tasks => localStorage.setItem('tasks', JSON.stringify(tasks)))

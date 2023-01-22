<script lang="ts">
    import { tasks } from "../store/taskStore";

    export let task: string;
    export let done: boolean;
    export let index: number;

    function remove() {
        tasks.update(tasks => tasks.filter((item, arrayIndex) => arrayIndex !== index))
    }
</script>

<div class="text-neutral-200 text-lg h-12 border-b mt-2 flex items-center justify-between px-4">
    <span class:done class="flex-grow">{index + 1}. {task}</span>
    <button class="mr-10 border rounded-full h-8 aspect-square hover:bg-red-800 hover:border-red-800 active:opacity-50" on:click={remove}>&cross;</button>
    <input bind:checked={done} type="checkbox">
</div>

<style>
    .done {
        @apply line-through text-cyan-700;
    }
</style>

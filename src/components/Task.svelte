<script lang="ts">
    export let task: string;
    export let done: boolean;
    export let index: number;
</script>

<div class="text-neutral-200 text- text-lg h-12 border-b mt-2 flex items-center justify-between px-4">
    <span class:done>{index + 1}. {task}</span>
    <input bind:checked={done} type="checkbox">
</div>

<style>
    .done {
        @apply line-through text-cyan-700;
    }
</style>

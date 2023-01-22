<script lang="ts">
    import { tasks } from "./taskStore";

    let task = "";

    function addTask() {
        if (task)
            tasks.update(($taskList) => [
                ...$taskList,
                {
                    task: task,
                    done: false,
                },
            ]);
    }
</script>

<div class="mt-8 flex">
    <input
        type="text"
        placeholder="¿Qué tenemos que hacer?"
        class="w-auto flex-grow bg-transparent border border-neutral-200 rounded pl-2 text-neutral-200 focus:border-green-700 outline-none overflow-auto"
        bind:value={task}
    />
    <button
        class="ml-4 text-lg border border-neutral-200 rounded px-4 py-1 text-neutral-200 hover:from-red-500 hover:to-orange-500 hover:bg-gradient-to-tr hover:border-transparent active:opacity-75" on:click={addTask}
        >Save</button
    >
</div>

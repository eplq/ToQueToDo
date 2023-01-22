<script lang="ts">
    import { tasks } from "../store/taskStore";
    import Task from "./Task.svelte";
</script>

<ul class="flex flex-col">
    {#each $tasks as task, index}
        <li>
            <Task {...task} index={index} />
        </li>
    {:else}
        <li>
            <p class="text-center text-2xl text-amber-400">No hay tareas, ¡apunta una!</p>
        </li>
    {/each}
</ul>

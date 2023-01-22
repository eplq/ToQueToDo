<script lang="ts">
    import { tasks } from "../store/taskStore";
    import Task from "./Task.svelte";
</script>

<ul class="flex flex-col">
    {#each $tasks as task, index}
        <li>
            <Task {...task} index={index} />
        </li>
    {/each}
</ul>

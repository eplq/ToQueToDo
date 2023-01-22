<script lang="ts">
    import AddTodo from "./components/AddTodo.svelte";
    import TaskList from "./components/TaskList.svelte";
</script>

<div class="h-screen bg-gradient-to-tr from-neutral-900 to-orange-900 flex flex-col items-center py-5">
    <div class="w-11/12 md:w-4/6 lg:w-2/6 p-3 h-full flex flex-col">
        <h1 class="text-center font-bold text-5xl mt-4 bg-gradient-to-r bg-clip-text text-transparent from-neutral-500 to-neutral-300">To Qué To Do</h1>
        <AddTodo />
        <div class="flex-grow my-4 overflow-y-auto">
            <TaskList />
        </div>
    </div>
</div>

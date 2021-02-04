<template>
    <div class="menu">
        <topmenu></topmenu>
        <LeftMenu>1111111111</LeftMenu>
    </div>

</template>

<script>
    import topmenu from "./topmenu";
    import LeftMenu from "./leftmenu";
    export default {
        name: "index",
        components: {
            topmenu,
            LeftMenu
        },
    }
</script>

<style scoped>
</style>
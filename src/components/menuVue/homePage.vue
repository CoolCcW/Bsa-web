<template>
    <div>
        欢迎{{uname}}
    </div>
</template>

<script>
    export default {
        name: "homePage",
        data() {
            return {
                uname:JSON.parse(sessionStorage.getItem('user')).name
            }
        },
    }
</script>

<style >
</style>
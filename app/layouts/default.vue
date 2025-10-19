<script setup lang="ts">
import AppFooter from '~/component/AppFooter.vue';
import AppHeader from '~/component/AppHeader.vue';
import Navbar from '~/component/Navbar.vue';

</script>
a
<template> 
    <AppHeader/> 
    <Navbar/>
    <slot />
    <AppFooter/> 
</template>

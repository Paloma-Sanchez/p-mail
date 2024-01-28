<script setup>
    import {useSideBarStore} from '../../stores/sideBarStore';
    const sideBarStore = useSideBarStore();

    const displayUnarchived = () => {
        sideBarStore.selectUnarchived();
    }

    const displayStarred = () => {
        sideBarStore.selectStarred();
    }

    const displayArchived = () => {
        sideBarStore.selectArchived();
    }

</script>

<template>
    <div class="w-1/4 display:block">
        <ul class="font-body text-center text-2xl ">
            <NuxtLink to="/">
                <li 
                    class="pb-8 pt-8 pl-10 pr-10 hover:bg-orange-100 hover:text-orange-500"
                    @click="displayUnarchived"
                >
                    Inbox
                </li>
                <li
                    class="pb-8 pt-8 pl-10 pr-10 hover:bg-orange-100 hover:text-orange-500"
                    @click="displayStarred"
                >
                    Starred
                </li>
                <li
                    class="pb-8 pt-8 pl-10 pr-10 hover:bg-orange-100 hover:text-orange-500"
                    @click="displayArchived"
                >
                    Archived
                </li>
            </NuxtLink>
        </ul>
    </div>
</template>
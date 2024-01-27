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
        <ul class="font-body text-center text-2xl pt-8">
            <NuxtLink to="/">
                <li 
                    class="pb-10"
                    @click="displayUnarchived"
                >
                    Inbox
                </li>
                <li
                    class="pb-10"
                    @click="displayStarred"
                >
                    Starred
                </li>
                <li
                    @click="displayArchived"
                >
                    Archived
                </li>
            </NuxtLink>
        </ul>
    </div>
</template>
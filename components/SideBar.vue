<script setup>
    import StarFull from '../assets/svg/KidStarSharp.svg';
    import Inbox from '../assets/svg/InboxLinear.svg';
    import Archive from '../assets/svg/ArchiveFill.svg'
    import {useSideBarStore} from '../../stores/sideBarStore';
    import {useMailListStore} from '../../stores/mailListStore';
    const sideBarStore = useSideBarStore();
    const emailListStore = useMailListStore();
    const currentFilter = computed(()=>emailListStore.currentFilter); 

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
    <div class="w-1/3 display:block">
        <ul class="font-body text-center text-2xl ">
                <li 
                    :class="[
                            'pb-8', 
                            'pt-8', 
                            'pl-10', 
                            'pr-10',
                            'hover:bg-orange-100',
                            'hover:text-orange-500',
                            'fill-white',
                            {
                                'text-orange-600':currentFilter==='inbox',
                                'font-semibold':currentFilter==='inbox'
                            }
                            ]"
                    @click="displayUnarchived"
                >
                <NuxtLink to="/" class="flex items-center">
                    <Inbox class="mr-2"/>
                    Inbox
                </NuxtLink>
                </li>
                <li
                :class="[
                    'pb-8', 
                    'pt-8', 
                    'pl-10', 
                    'pr-10',
                    'hover:bg-orange-100',
                    'hover:text-orange-500',
                    {
                        'fill-orange-600':currentFilter==='starred',
                        'text-orange-600':currentFilter==='starred',
                        'font-semibold':currentFilter==='starred'
                    }
                    ]"
                    @click="displayStarred"
                >
                <NuxtLink to="/" class="flex items-cente">
                    <StarFull class="mr-2"/>
                    Starred
                </NuxtLink>
                </li>
                <li
                    :class="[
                        'pb-8', 
                        'pt-8', 
                        'pl-10', 
                        'pr-10',
                        'hover:bg-orange-100',
                        'hover:text-orange-500',
                        {
                            'fill-orange-600':currentFilter==='archived',
                            'text-orange-600':currentFilter==='archived',
                            'font-semibold':currentFilter==='archived'
                        }
                        ]"
                    @click="displayArchived"
                >
                <NuxtLink to="/" class="flex items-center">
                    <Archive class="mr-2"/>
                    Archived
                </NuxtLink>
                </li>
        </ul>
    </div>
</template>
<style scoped>
.nuxt-link-active{
    color: aqua;
}
</style>
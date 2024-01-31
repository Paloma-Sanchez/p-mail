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
    <div class="max-w-[203px] display:block pl-8">
        <ul class="[font-body text-center text-2xl ]">
                <li 
                    :class="[
                            'pb-8', 
                            'pt-8', 
                            'pl-10', 
                            'pr-10',
                            'tablet:pl-2',
                            'tablet:pr-0',
                            'hover:bg-orange-100',
                            'hover:text-orange-500',
                            'hover:stroke-orange-500',
                            'fill-white',
                            {
                                'stroke-slate-700':currentFilter!=='inbox',
                                'stroke-orange-600':currentFilter==='inbox',
                                'text-slate-700':currentFilter!=='inbox',
                                'text-orange-600':currentFilter==='inbox',
                                'font-semibold':currentFilter==='inbox'
                            }
                            ]"
                    @click="displayUnarchived"
                >
                <NuxtLink to="/" class="flex items-center">
                    <Inbox class="mr-2"/>
                    <p class="tablet:hidden"> Inbox</p>
                </NuxtLink>
                </li>
                <li
                :class="[
                    'pb-8', 
                    'pt-8', 
                    'pl-8', 
                    'pr-8',
                    'tablet:pl-2',
                    'tablet:pr-0',
                    'hover:bg-orange-100',
                    'hover:text-orange-500',
                    'hover:fill-orange-500',
                    {
                        'fill-slate-700':currentFilter!=='starred',
                        'fill-orange-600':currentFilter==='starred',
                        'text-slate-700':currentFilter!=='starred',
                        'text-orange-600':currentFilter==='starred',
                        'font-semibold':currentFilter==='starred'
                    }
                    ]"
                    @click="displayStarred"
                >
                <NuxtLink to="/" class="flex items-center">
                    <StarFull class="mr-2"/>
                    <p class="tablet:hidden">Starred</p>
                </NuxtLink>
                </li>
                <li
                    :class="[
                        'pb-8', 
                        'pt-8', 
                        'pl-6', 
                        'pr-6',
                        'tablet:pl-2',
                        'tablet:pr-0',
                        'hover:bg-orange-100',
                        'hover:text-orange-500',
                        'hover:fill-orange-500',
                        {
                            'fill-slate-700':currentFilter!=='archived',
                            'fill-orange-600':currentFilter==='archived',
                            'text-slate-700':currentFilter!=='archived',
                            'text-orange-600':currentFilter==='archived',
                            'font-semibold':currentFilter==='archived'
                        }
                        ]"
                    @click="displayArchived"
                >
                <NuxtLink to="/" class="flex items-center">
                    <Archive class="mr-2" />
                    <p class="tablet:hidden">Archived</p>
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
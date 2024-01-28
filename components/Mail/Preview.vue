<script setup>
    import StarOutline from '../../assets/svg/KidStarOutline.svg';
    import StarFull from '../../assets/svg/KidStarSharp.svg';
    import {format} from 'date-fns';
    const overlayShow = ref(false);

    const props = defineProps({
        email:{
            type: Object,
            required:true
        },
        index:{
            type: Number,
            required:true
        }
    });

    const toggleOverlayShow = () => {
        overlayShow.value = !overlayShow.value;
    }
</script>

<template>

    <div
        @mouseenter="toggleOverlayShow"
        @mouseleave="toggleOverlayShow"
        class="relative "
    >
        <div :class="[
                    'grid', 
                    'grid-cols-[30px_30px_minmax(400px,_1fr)_103px]',
                    'grid-rows-[80px]', 
                    'items-center',
                    'justify-center',
                    'w-11/12',
                    'pl-8',
                    'pr-8',
                    'border-b-2',
                    'relative',
                    {
                        'bg-orange-100': !email.read
                    }]"
                    
            >
            <div class="mx-auto">
                <input type="checkbox" class="w-6 h-6  text-orange-600 bg-orange-100 border-orange-200 rounded focus:ring-orange-500 focus:ring-4"/>
            </div>
            <div 
                class="mx-auto pl-4 pr-4 cursor-pointer"
                @click="$emit('toggleStarred', index, email.id)"
            >
                <StarFull v-if="email.starred" class="place-content-center"/>
                <StarOutline v-else/>
            </div>
            <NuxtLink 
                :to="`/${email.id}`"
                @click="$emit('markRead', index, email.id)">
            <div class="pl-4 pr-4">
                <p class="font-body text-gray-400">{{ email.from }}</p>
                <p class="truncate"><strong>{{ email.subject }}</strong></p>
                <p class="truncate font-body text-gray-500">{{ email.body }}</p>
            </div>
            </NuxtLink>
            <div>
                <p class="break-words font-body text-gray-500">{{ format(new Date(email.sentAt), 'MM dd yyyy' ) }}</p>
            </div>
        </div >
       
            <MailOverlayOptions v-if="overlayShow"
                class="h-20 absolute right-[8%] top-0  w-32 bg-orange-400/70 backdrop-blur-sm z-10 "
                :read="email.read"
                :archived="email.archived"
                @toggleArchived="$emit('toggleArchived', index, email.id)"
                @toggleRead="$emit('toggleRead', index, email.id)"
            />
    
    </div>

</template>
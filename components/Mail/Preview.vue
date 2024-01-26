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
//class="absolute  bg-orange-100 h-[82px] pt-[2px] ml-20 pr-4 pl-4 left-[80%] -top-0 border-b-2"
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
                <input type="checkbox" class="w-6 h-6  text-blue-600 bg-gray-100 border-gray-200 rounded focus:ring-blue-500 focus:ring-4"/>
            </div>
            <div 
                class="mx-auto pl-4 pr-4 cursor-pointer"
                @click="$emit('toggleStarred', props.index)"
            >
                <StarFull v-if="email.starred" class="place-content-center"/>
                <StarOutline v-else/>
            </div>
            <NuxtLink :to="`/${email.id}`">
            <div class="pl-4 pr-4">
                <p>{{ email.from }}</p>
                <p class="truncate"><strong>{{ email.subject }}</strong></p>
                <p class="truncate font-body">{{ email.body }}</p>
            </div>
            </NuxtLink>
            <div>
                <p class="break-words">{{ format(new Date(email.sentAt), 'MM dd yyyy' ) }}</p>
            </div>
        </div >
       
            <MailOverlayOptions v-if="overlayShow"
                class="h-20 absolute right-[8%] top-0  w-24 bg-orange-400/70 backdrop-blur-sm z-10 "
                :read="email.read"
                @click="$emit('toggleRead', props.index)"
            />
    
    </div>

</template>
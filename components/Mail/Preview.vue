<script setup>
    import StarOutline from '../../assets/svg/KidStarOutline.svg';
    import StarFull from '../../assets/svg/KidStarSharp.svg';
    
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

</script>

<template>
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
            {
                'bg-orange-100': !email.read
            }]">
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
    <div class="pl-4 pr-4">
        <p>{{ email.from }}</p>
        <p class="truncate"><strong>{{ email.subject }}</strong></p>
        <p class="truncate">{{ email.body }}</p>
    </div>
    <div>
        <p class="break-words">{{ email.sentAt }}</p>
    </div>
</div>
</template>
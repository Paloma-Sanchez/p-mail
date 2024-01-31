<script setup>
    import {format} from 'date-fns';

    const props = defineProps({
        email:{
            type:Object,
            required:true
        },
        emailLoading:{
            type:Boolean,
            default:true
        }
    })
</script>

<template>
    <div class="p-8 w-[90%] pr-10" >
        <div>
            <h2 class="text-3xl pb-4 font-['Quattrocento'] font-bold">{{ email.subject }}</h2>
            <div class="flex pb-6 justify-between font-body text-gray-500" >
                <p>{{ email.from }}</p>
                <p v-if="!emailLoading"  >{{format(new Date(email.sentAt), 'MM dd yyyy') }}</p>
            </div>
            <p class="font-body">{{ email.body }}</p>
           
        </div>
    </div>
</template>
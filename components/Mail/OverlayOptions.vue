<script setup>
    import EmailRead from '../../assets/svg/EmailReadOutline.svg';
    import EmailUnread from '../../assets/svg/EmailUnreadOutline.svg';

    const props = defineProps({
        read:{
            type: Boolean,
            required:true
        }
    })
</script>

<template>
    <div class="flex">
        <EmailRead v-if="!read"/>
        <EmailUnread v-else/>
    </div>
</template>
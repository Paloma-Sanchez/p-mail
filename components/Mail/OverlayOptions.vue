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
    <div class="flex items-center justify-center">
        <EmailRead v-if="!read" class="w-20 h-20"/>
        <EmailUnread v-else/>
    </div>
</template>
<style scoped>
svg {
    width: 32px;
    height: 32px;
    }
svg:hover{
    transform: scale(1.2);
}
</style>
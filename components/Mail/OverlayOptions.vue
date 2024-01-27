<script setup>
    import EmailRead from '../../assets/svg/EmailReadOutline.svg';
    import EmailUnread from '../../assets/svg/EmailUnreadOutline.svg';
    import ArchiveMail from '../../assets/svg/ArchiveRounded.svg';
    import UnarchiveMail from '../../assets/svg/UnarchiveRounded.svg'

    const props = defineProps({
        read:{
            type: Boolean,
            required:true
        },
        archived:{
            type:Boolean,
            default:false
        }
    })
</script>

<template>
    <div class="flex items-center justify-around">
        <div 
            @click="$emit('toggleArchived')"
        >
            <ArchiveMail v-if="!archived"/>
            <UnarchiveMail v-else/>
        </div>
        <div 
            @click="$emit('toggleRead')"
        >
            <EmailRead v-if="!read" />
            <EmailUnread v-else/>
        </div>
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
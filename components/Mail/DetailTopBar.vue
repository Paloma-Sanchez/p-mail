<script setup>
    import EmailRead from '../../assets/svg/EmailReadOutline.svg';
    import EmailUnread from '../../assets/svg/EmailUnreadOutline.svg';
    import ArchiveMail from '../../assets/svg/ArchiveRounded.svg';
    import UnarchiveMail from '../../assets/svg/UnarchiveRounded.svg';
    import StarOutline from '../../assets/svg/KidStarOutline.svg';
    import StarFull from '../../assets/svg/KidStarSharp.svg';
    import ArrowLeft from '../../assets/svg/ArrowLeftAltRounded.svg';
</script>
<template>
    <div class="flex">
        <div>
            <ArrowLeft/>
        </div>
        <div>
            <ArchiveMail/>
            <UnarchiveMail/>
        </div>
        <div>
            <EmailUnread/>
            <EmailRead/>
        </div>
        <div>
            <StarOutline/>
            <StarFull/>
        </div>
    </div>
</template>

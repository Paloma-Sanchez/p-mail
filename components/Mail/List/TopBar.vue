
<script setup>
    import {useMailListStore} from '../../stores/mailListStore';
    import Refresh from '../../../assets/svg/RefreshRounded.svg';
    import EmailRead from '../../../assets/svg/EmailReadOutline.svg';
    import EmailUnread from '../../../assets/svg/EmailUnreadOutline.svg';
    import ArchiveMail from '../../../assets/svg/ArchiveRounded.svg';
    import UnarchiveMail from '../../../assets/svg/UnarchiveRounded.svg';
    import StarOutline from '../../assets/svg/KidStarOutline.svg';
    import StarFull from '../../../assets/svg/KidStarSharp.svg';

    const emailListStore = useMailListStore();
    const checkedEmails = emailListStore.checkedEmails;
    const checkedEmailsCount = computed (() => checkedEmails.size);
    const allEmailsSelected = computed(() => emailListStore.allEmailsSelected);
    const someEmailsSelected = computed(() => emailListStore.someEmailsSelected);
    const checked = computed(() => allEmailsSelected.value); 
    const starred = ref(false);
    const archived = ref(false);
    const read= ref(false);
    const allEmailsAreRead = computed(() => Array.from(checkedEmails).every(email => email.read));
    const noEmailRead = computed(() => Array.from(checkedEmails).every(email => !email.read));

    const toggleSelectAllEmails = () => {
        emailListStore.bulkSelect();
        console.log('emmiting');
    };

    watch([allEmailsSelected, checkedEmailsCount], () => {
        const checkedArray = Array.from(checkedEmails);
            if(checkedArray.every(email => email.starred)){
                starred.value = true;
            } else{
                starred.value = false;
            }

            if(checkedArray.every(email => email.archived)){
                archived.value = true;
            }else{
                archived.value = false;
            }

            return [starred, archived];
        });

    const onBulkStar = () => {
        emailListStore.bulkStar();
    };

    const onBulkArchived = () => {
        emailListStore.bulkArchive();
    };

    const onBulkMarkRead = () => {
        emailListStore.bulkMarkRead();
    };

    const onBulkMarkUnread = () => {
        emailListStore.bulkMarkUnread();
    };

</script>

<template>
    <div class="flex h-12 w-[90%] pl-8 bg-orange-500 items-center rounded-t-lg ml-8 mb-2">
        <input 
            type="checkbox" 
            class="w-4
                    h-4
                    text-orange-600
                    bg-orange-100
                    border-orange-200
                    rounded
                    focus:ring-orange-500
                    Focus:ring-4"
            @change="toggleSelectAllEmails"
            :checked="checked"
        />
        <div class="fill-white">
            <Refresh
                class="ml-6 cursor-pointer hover:scale-125 hover:fill-orange-100"
            />
        </div>
        <div class="flex justify-between w-52 ml-7 fill-white" v-show="checkedEmails.size">
            <div
                class="cursor-pointer hover:scale-125 hover:fill-orange-100"
                @click="onBulkStar"
            >
                <StarFull v-if="starred"/>
                <StarOutline v-else/>
                
            </div>
            <div
                class="cursor-pointer hover:scale-125 hover:fill-orange-100"
                @click="onBulkArchived"
            >
                <UnarchiveMail v-if="archived"/>
                <ArchiveMail v-else/>
                
            </div>
            <div
                class="cursor-pointer hover:scale-125 hover:fill-orange-100"
                @click="onBulkMarkRead"
            >
                <EmailRead v-if="!allEmailsAreRead"/>
            </div>
            <div
                class="cursor-pointer hover:scale-125 hover:fill-orange-100"
                @click="onBulkMarkUnread"
            >
                <EmailUnread v-if="!noEmailRead"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
svg {
    width: 28px;
    height: 28px;
}
</style>
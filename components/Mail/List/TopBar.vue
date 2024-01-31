
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
    const checked = computed(() => allEmailsSelected.value); 
    const starred = ref(false);
    const archived = ref(false);
    const allEmailsAreRead = computed(() => Array.from(checkedEmails).every(email => email.read));
    const noEmailRead = computed(() => Array.from(checkedEmails).every(email => !email.read));

    const toggleSelectAllEmails = () => {
        emailListStore.bulkSelect();
    };

    watch([allEmailsSelected, checkedEmails], () => {
        const checkedArray = Array.from(checkedEmails);
            if(checkedArray.every(email => email.starred)){
                starred.value = true;
            } else{
                starred.value = false;
            };

            if(checkedArray.every(email => email.archived)){
                archived.value = true;
            }else{
                archived.value = false;
            };

            return [starred, archived];
        });

    const handleRefresh = () => {
            emailListStore.loadAllEmails();
    };

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
            id="bulkCheckbox"
            :class="['w-4',
                    'h-4',
                    'text-orange-600',
                    'rounded',
                    'focus:ring-orange-500',
                    'Focus:ring-4',
                    {
                        'accent-white': checked,
                        'bg-orange-500': checked
                    }
                    ]"
            @change="toggleSelectAllEmails"
            :checked="checked"
        />
        <label for="bulkCheckbox"></label>
        <div class="fill-white">
            <Refresh
                class="ml-6 cursor-pointer hover:scale-125 hover:fill-orange-100"
                @click="handleRefresh"
                aria-describedby="refresh"
            />
            <p role="tooltip" 
                id="refresh"
                class="top-auto"
            >
                Refresh
            </p>
        </div>
        <div class="flex justify-between w-52 ml-7 fill-white" v-show="checkedEmails.size">
            <div
                class="cursor-pointer hover:scale-125 hover:fill-orange-100"
                @click="onBulkStar"
            >
                <div v-if="starred" >
                    <StarFull aria-describedby="mark-unstarred" />
                    <p role="tooltip" id="mark-unstarred">Remove star</p>
                </div>
                <div v-else >
                    <StarOutline  aria-describedby="mark-starred"/>
                    <p role="tooltip" id="mark-starred">Add a star</p>
                </div>
                
            </div>
            <div
                class="cursor-pointer hover:scale-125 hover:fill-orange-100"
                @click="onBulkArchived"
            >
                <div v-if="archived">
                    <UnarchiveMail  aria-describedby="mark-unarchived"/>
                    <p role="tooltip" id="mark-unarchived">Unarchive</p>
                </div>
                <div v-else>
                    <ArchiveMail  aria-describedby="mark-archived"/>
                    <p role="tooltip" id="mark-archived">Archive</p>
                </div>
            </div>
            <div
                class="cursor-pointer hover:scale-125 hover:fill-orange-100"
                @click="onBulkMarkRead"
            >
                <EmailRead v-if="!allEmailsAreRead" aria-describedby="mark-read"/>
                <p role="tooltip" id="mark-read">Mark as read</p>
            </div>
            <div
                class="cursor-pointer hover:scale-125 hover:fill-orange-100"
                @click="onBulkMarkUnread"
            >
                <EmailUnread v-if="!noEmailRead" aria-describedby="mark-unread"/>
                <p role="tooltip" id="mark-unread">Mark as unread</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
svg {
    width: 28px;
    height: 28px;
}

[role="tooltip"],
.hidetooltip.hidetooltip.hidetooltip + [role="tooltip"] {
  visibility: hidden;
  position: absolute;
  top: -63%;
  background: rgba(247, 238, 187, 0.663);
  color: #334155;
}
[role="tooltip"].top-auto {
    visibility: hidden;
    position: absolute;
    top: auto;
    background: rgba(247, 238, 187, 0.663);
    color: #334155;
  }
[aria-describedby]:hover,
[aria-describedby]:focus {
  position: relative;
  
}
[aria-describedby]:hover + [role="tooltip"],
[aria-describedby]:focus + [role="tooltip"] {
  visibility: visible;
}

p{
    font-size: 10px;
    width: max-content;
    padding: 0 2px;
}

</style>
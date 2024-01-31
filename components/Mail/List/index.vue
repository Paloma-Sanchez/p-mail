<script setup>
    import {useMailListStore} from '../../stores/mailListStore';
    const emailListStore = useMailListStore();
    const filteredEmails = computed(() => emailListStore.filteredEmails) ;
    const currentFilter = computed(() => emailListStore.currentFilter) ;

    onMounted(() => emailListStore.loadAllEmails());

    const onToggleStarred = (email) => {
        emailListStore.toggleStarred(email);
    };

    const onToggleRead = (email) => {
        emailListStore.toggleRead(email);
    };

    const onMarkRead = (email) => {
        emailListStore.markRead(email);
    };

    const onToggleArchived = (email) => {
        emailListStore.toggleArchived(email);
    };

    const onToggleCheckedEmail = (email) => {
        emailListStore.toggleCheckedEmail(email);
    };

</script>

<template>
<ul :key="'emails_' + currentFilter" class="c-list ml-8 w-[98%]">
    <li v-for="(email, emailIndex) in filteredEmails" 
        :key="'email_' + email.id"
        class="relative"
    >
        <MailPreview 
            :email="email" 
            :index="emailIndex"
            @toggleStarred="onToggleStarred(email)"
            @toggleRead="onToggleRead(email)"
            @toggleArchived="onToggleArchived(email)"
            @markRead="onMarkRead(email)"
            @toggleCheckedEmail="onToggleCheckedEmail(email)"
        />
    </li>
</ul>
 

</template>
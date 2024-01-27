<script setup>
    import {useMailListStore} from '../../stores/mailListStore';
    import {useSideBarStore} from '../../stores/sideBarStore';
    const emailListStore = useMailListStore();
    const sideBarStore = useSideBarStore();
    const emails = computed(() => emailListStore.emails);
    const starred = computed(() => sideBarStore.starredSelected);
    const archived = computed(() => sideBarStore.archivedSelected);
    //const filteredEmails = ref(emails.value);

    onMounted(() => emailListStore.loadAllEmails());

    watch([starred, archived], () => {
        console.log('starred', starred.value, 'archived', archived.value);
    }, {immediate:true});
    
    const filteredEmails = computed(() => {
        if(starred.value){
            return emails.value.filter((email) => email.starred);
        }else if(archived.value){
            return emails.value.filter((email) => email.archived);
        }else{
            return emails.value.filter((email) => !email.archived);
        }
    })

    const toggleStarred = (emailIndex, emailId) => {
        emailListStore.toggleStarred(emailIndex, emailId);
    };

    const toggleRead = (emailIndex, emailId) => {
        emailListStore.toggleRead(emailIndex, emailId);
    };

    const markRead = (emailIndex, emailId) => {
        emailListStore.markRead(emailIndex, emailId);
    };

    const toggleArchived = (emailIndex, emailId) => {
        emailListStore.toggleArchived(emailIndex, emailId);
    };

</script>

<template>
    <ul>
        <li v-for="(email, emailIndex) in filteredEmails" 
            class="relative"
        >
        <MailPreview 
            :email="email" 
            :index="emailIndex"
            @toggleStarred="toggleStarred"
            @toggleRead="toggleRead"
            @toggleArchived="toggleArchived"
            @markRead="markRead"
        />
        </li>
    </ul>
</template>
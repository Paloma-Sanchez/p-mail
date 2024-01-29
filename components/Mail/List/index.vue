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
        //console.log('starred', starred.value, 'archived', archived.value);
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
    }

</script>

<template>
    <ul>
        <li v-for="(email, emailIndex) in filteredEmails" 
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
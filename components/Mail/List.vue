<script setup>
    import {useMailListStore} from '../../stores/mailListStore';
    const emailListStore = useMailListStore();
    const emails = computed(() => emailListStore.emails);

    onMounted(() => emailListStore.loadAllEmails());

    const toggleStarred = (emailIndex) => {
        //console.log('toggling interface from list');
        //console.log('index', emailIndex)
        emailListStore.toggleStarred(emailIndex);
    };

    const toggleRead = (emailIndex) => {
        emailListStore.toggleRead(emailIndex);
    };
    console.log(emailListStore.emails);

    /*
    
    */
   console.log(emails);
</script>

<template>
    <ul>
        <li v-for="(email, emailIndex) in emails" 
            class="relative"
        >
        <MailPreview 
            :email="email" 
            :index="emailIndex"
            @toggleStarred="toggleStarred"
            @toggleRead="toggleRead"
        />
        </li>
    </ul>
</template>
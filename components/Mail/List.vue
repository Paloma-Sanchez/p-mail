<script setup>
    import {useMailListStore} from '../../stores/mailListStore';
    const mailListStore = useMailListStore();

    const toggleStarred = (emailIndex) => {
        //console.log('toggling interface from list');
        //console.log('index', emailIndex)
        mailListStore.toggleStarred(emailIndex);
    };

    const toggleRead = (emailIndex) => {
        mailListStore.toggleRead(emailIndex);
    };

</script>

<template>
    <ul>
        <li v-for="(email, emailIndex) in mailListStore.emails" 
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
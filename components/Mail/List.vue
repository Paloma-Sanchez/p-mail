<script setup>
    import {useMailListStore} from '../../stores/mailListStore';
    const overlayShow = ref(false);
    const mailListStore = useMailListStore();

    const toggleStarred = (emailIndex) => {
        console.log('toggling interface from list');
        console.log('index', emailIndex)
        mailListStore.toggleStarred(emailIndex);
    };
</script>

<template>
    <ul>
        <li v-for="(email, emailIndex) in mailListStore.emails">
            <MailPreview 
                :email="email" 
                :index="emailIndex"
                @toggleStarred="toggleStarred"
                @mouseenter="()=> overlayShow = !overlayShow"
                @mouseleave="()=> overlayShow = !overlayShow"
                />
            <MailOverlayOptions v-if="overlayShow"/>
        </li>
    </ul>
</template>
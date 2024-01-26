import {defineStore} from 'pinia';
import {useStorage} from '@vueuse/core';
import {emails as emailsData} from '../assets/data/db.json';

export const useMailListStore = defineStore('mailListStore', () => {
    const emails = useStorage('emails', emailsData);
    const selectedEmail = ref('')

    const getEmailById = (emailId) => {
       // console.log('value', emails.value);
        const selectedEmail = emails.value.filter((email) => email.id === emailId )
        console.log('selected', selectedEmail[0]);
        return selectedEmail.value = selectedEmail[0];
    }

    const toggleStarred = (emailIndex) => {
        //console.log('toggling from store', emailIndex, emails.value[emailIndex])
        emails.value[emailIndex].starred = !emails.value[emailIndex].starred;
    }

    const toggleRead = (emailIndex) => {
        emails.value[emailIndex].read = !emails.value[emailIndex].read;
    }

    const toggleArchived = (emailIndex) => {
        //console.log('toggling from store', emailIndex, emails.value[emailIndex])
        emails.value[emailIndex].archived = !emails.value[emailIndex].archived;
    }

    return {
        emails,
        toggleStarred,
        toggleRead,
        toggleArchived,
        getEmailById,
        selectedEmail
    }
})

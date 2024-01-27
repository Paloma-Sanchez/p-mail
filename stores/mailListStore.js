import {defineStore} from 'pinia';
import {useStorage} from '@vueuse/core';
import {emails as emailsData} from '../assets/data/db.json';

export const useMailListStore = defineStore('mailListStore', () => {
    const emails = ref([]);
    const selectedEmail = ref({});
    const loadingAllEmails = ref(false);
    const loadingSelectedEmail  = ref(false);

    const loadAllEmails = async () => {
        loadingAllEmails.value = true;
        const {data} = await useFetch('https://my-json-server.typicode.com/Paloma-Sanchez/p-mail/emails');
        loadingAllEmails.value = false;
        return emails.value = data.value;
    }

    const getEmailById = async (emailId) => {
       loadingSelectedEmail.value= true;
       const {data} = await useFetch(`https://my-json-server.typicode.com/Paloma-Sanchez/p-mail/emails/${emailId}`);
       loadingSelectedEmail.value= false; 
       return selectedEmail.value = data.value;
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
        loadingAllEmails,
        loadingSelectedEmail,
        selectedEmail,
        toggleStarred,
        toggleRead,
        toggleArchived,
        getEmailById,
        loadAllEmails,
        
        
    }
})

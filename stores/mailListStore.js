import {defineStore} from 'pinia';
import axios from 'axios';

export const useMailListStore = defineStore('mailListStore', () => {
    const emails = ref([]);
    const selectedEmail = ref({});
    const loadingAllEmails = ref(false);
    const loadingSelectedEmail  = ref(false);

    const updateEmail = (emailId, emailIndex) => {
        axios.put(`http://localhost:3000/emails/${emailId}`, emails.value[emailIndex]);
    }

    const loadAllEmails = async () => {
        loadingAllEmails.value = true;
        const {data} = await useFetch('http://localhost:3000/emails');
        loadingAllEmails.value = false;
        return emails.value = data.value;
    }

    const getEmailById = async (emailId) => {
       loadingSelectedEmail.value= true;
       const {data} = await useFetch(`http://localhost:3000/emails/${emailId}`);
       loadingSelectedEmail.value= false; 
       return selectedEmail.value = data.value;
    };

    const toggleStarred = (emailIndex, emailId) => {
        //console.log('toggling from store', emailIndex, emails.value[emailIndex])
        emails.value[emailIndex].starred = !emails.value[emailIndex].starred;
        updateEmail(emailId, emailIndex);
    };

    const toggleRead = (emailIndex, emailId) => {
        emails.value[emailIndex].read = !emails.value[emailIndex].read;
        updateEmail(emailId, emailIndex);
    };

    const markRead = (emailIndex, emailId) => {
        emails.value[emailIndex].read = true;
        updateEmail(emailId, emailIndex);
    };

    const toggleArchived = (emailIndex, emailId) => {
        //console.log('toggling from store', emailIndex, emails.value[emailIndex])
        emails.value[emailIndex].archived = !emails.value[emailIndex].archived;
        updateEmail(emailId, emailIndex);
    };

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
        markRead
        
    }
})

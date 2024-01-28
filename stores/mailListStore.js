import {defineStore} from 'pinia';
import axios from 'axios';

export const useMailListStore = defineStore('mailListStore', () => {
    const emails = ref([]);
    const selectedEmail = ref({});
    const loadingAllEmails = ref(false);
    const loadingSelectedEmail  = ref(false);

    const updateEmail = (email) => {
        axios.put(`http://localhost:3000/emails/${email.id}`, email);
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

    const toggleStarred = (email) => {
        //console.log('toggling from store', email)
        email.starred = !email.starred;
        updateEmail(email);
    };

    const toggleRead = (email) => {
        email.read = !email.read;
        updateEmail(email);
    };

    const markRead = (email) => {
        email.read = true;
        updateEmail(email);
    };

    const toggleArchived = (email) => {
        //console.log('toggling from store', emailIndex, emails.value[emailIndex])
        email.archived = !email.archived;
        updateEmail(email);
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

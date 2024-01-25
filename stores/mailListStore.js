import {defineStore} from 'pinia';
import {emails as emailsData} from '../assets/data/db.json';

export const useMailListStore = defineStore('mailListStore', () => {
    const emails = ref(emailsData);

    const getEmailById = (emailId) => {
        for (let email in emails){
            if (email.id === email){
                return email;
            }
        }
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
        getEmailById
    }
})

import {defineStore} from 'pinia';
import {emails as emailsData} from '../assets/data/db.json';

export const useMailListStore = defineStore('mailListStore', () => {
    const emails = ref(emailsData);

    const toggleStarred = (emailIndex) => {
        //console.log('toggling from store', emailIndex, emails.value[emailIndex])
        emails.value[emailIndex].starred = !emails.value[emailIndex].starred;
    }

    return {
        emails,
        toggleStarred
    }
})

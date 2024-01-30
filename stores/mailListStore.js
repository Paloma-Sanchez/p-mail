import {defineStore} from 'pinia';
import axios from 'axios';
import {useSideBarStore} from '../../stores/sideBarStore';

export const useMailListStore = defineStore('mailListStore', () => {
    const sideBarStore = useSideBarStore();
    const emails = ref([]);
    const selectedEmail = ref({});
    const loadingAllEmails = ref(false);
    const loadingSelectedEmail  = ref(false);
    const checkedEmails = reactive(new Set());

    /**** COMPUTED PROPERTIES****/
    const starred = computed(() => sideBarStore.starredSelected);
    const archived = computed(() => sideBarStore.archivedSelected);
   
    
    const currentFilter = computed(() => {
        if(starred.value){
            return 'starred';
        }else if(archived.value){
            return 'archived';
        }else{
            return 'inbox';
        }
    });
    //Filter all the emails according to selected inbox
    const filteredEmails = computed(() => {
        if(starred.value){
            return emails.value.filter((email) => email.starred);
        }else if(archived.value){
            return emails.value.filter((email) => email.archived);
        }else{
            return emails.value.filter((email) => !email.archived);
        }
    });

    const emailsCount = computed(() => filteredEmails.value.length);
    const allEmailsSelected = computed(() => checkedEmails.size === emailsCount.value);
    const someEmailsSelected = computed(() => {
        return checkedEmails.size > 0 && checkedEmails.size < emailsCount.value; 
    });

    watch([filteredEmails], () => {
        checkedEmails.clear();
    }, {immediate:true});

     /**** METHODS****/
     //This is a helper method used in the following methods
    const updateEmail = (email) => {
        axios.put(`http://localhost:3000/emails/${email.id}`, email);
    };

    const loadAllEmails = async () => {
        loadingAllEmails.value = true;
        const {data} = await useFetch('http://localhost:3000/emails');
        loadingAllEmails.value = false;
        return emails.value = data.value;
    };

    const getEmailById = async (emailId) => {
       loadingSelectedEmail.value= true;
       const {data} = await useFetch(`http://localhost:3000/emails/${emailId}`);
       loadingSelectedEmail.value= false; 
       return selectedEmail.value = data.value;
    };

    const toggleStarred = (email) => {
        email.starred = !email.starred;
        updateEmail(email);
    };

    const markStarred = (email) => {
        email.starred = true;
        updateEmail(email);
    };

    const unmarkStarred = (email) => {
        email.starred = false;
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

    const markUnread = (email) => {
        email.read = false;
        updateEmail(email);
    };

    const toggleArchived = (email) => {
        email.archived = !email.archived;
        updateEmail(email);
    };

    const markArchived = (email) => {
        email.archived = true;
        updateEmail(email);
    };

    const markUnarchived = (email) => {
        email.archived = false;
        updateEmail(email);
    };

    const toggleCheckedEmail = (email) => {
        if(checkedEmails.has(email)){
            checkedEmails.delete(email)
            } else {
              checkedEmails.add(email);
            }
    };

    const isChecked = (email) => {
        return checkedEmails.has(email);
    };

    /*** BULK METHODS***/
    const bulkSelect = () => {
        if(checkedEmails.size === emailsCount.value){
            checkedEmails.clear();
        }else{
            filteredEmails.value.forEach((filteredEmail) => {
                checkedEmails.add(filteredEmail);
            })
        }
    };
    
    const bulkStar = () => {
        const checkedArray = Array.from(checkedEmails);
        if(checkedArray.every((email) => email.starred)){
            checkedArray.forEach((email) => {
                unmarkStarred(email);
            });
        } else{
            checkedArray.forEach((email) => {
                markStarred(email);
            });
        };
    };

    const bulkArchive = () => {
        const checkedArray = Array.from(checkedEmails);
        if(checkedArray.every((email) => email.archived)){
            checkedArray.forEach((email) => {
                markUnarchived(email);
            });
        } else{
            checkedArray.forEach((email) => {
                markArchived(email);
            });
        };
    };

    const bulkMarkRead = () => {
        const checkedArray = Array.from(checkedEmails);
        checkedArray.forEach((email) => {
            markRead(email);
        });
    };

    const bulkMarkUnread = () => {
        const checkedArray = Array.from(checkedEmails);
        checkedArray.forEach((email) => {
            markUnread(email);
        });
    };
   

    return {
        emails,
        loadingAllEmails,
        loadingSelectedEmail,
        selectedEmail,
        checkedEmails,
        allEmailsSelected,
        someEmailsSelected,
        currentFilter,
        filteredEmails,
        loadAllEmails,
        getEmailById,
        toggleStarred,
        toggleRead,
        markRead,
        toggleArchived,
        toggleCheckedEmail,
        bulkSelect,
        isChecked,
        bulkStar,
        bulkArchive,
        bulkMarkRead,
        bulkMarkUnread
    }
})

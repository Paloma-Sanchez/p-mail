<script setup>
    import {useMailListStore} from '../../stores/mailListStore';
    const route = useRoute();
    const router = useRouter()
    const emailListStore = useMailListStore();
    const email = computed(() => emailListStore.selectedEmail);
    const emailLoading = computed(() => emailListStore.loadingSelectedEmail);
    const emails = computed(() => emailListStore.filteredEmails);
    const emailsLength = computed(()=>emails.value.length);
    onMounted(() => emailListStore.loadAllEmails());
    const currentEmailIndex = computed(() =>  emails.value.findIndex((object) => object.id === email.value.id));
    const showNextArrow = computed(() => {
            if(emailsLength.value===1){
                return false;
            }else if(currentEmailIndex.value === emailsLength.value-1){
                return false;
            } else {
                return true;
            }
    });
    const showLastArrow = computed(() => {
            if(emailsLength.value===1){
                return false;
            }
            if(currentEmailIndex.value === 0){
                return false;
            } else {
                return true;
            }
    });

    watch(currentEmailIndex, () => {
        console.log('index', currentEmailIndex.value);
        console.log('showANextArrow', showNextArrow.value);
        console.log('showLastArrow', showLastArrow.value);
        console.log('emails length', emails.value.length);
    })

    if(!emails.lenght>0){
            emailListStore.loadAllEmails();
        }

    watch(route, async() => {
        await emailListStore.getEmailById(route.params.emailId);
    },{immediate:true});

    const onToggleStarred = (email) => {
        emailListStore.toggleStarred(email);
    };

    const onToggleRead = (email) => {
        emailListStore.toggleRead(email);
    };

    const onToggleArchived = (email) => {
        emailListStore.toggleArchived(email);
    };

    const onChangeIndex = (n) => {
        const newEmailId = emails.value[n + currentEmailIndex.value].id;
        router.push({ path: `/${newEmailId}` });
    }

    const onNavigateBack = () => {
        router.push({ path: `/` });
    }
</script>

<template>
    <div v-if="!emailLoading" class="c-detail-container">
        <MailDetailTopBar
            :showNextArrow="showNextArrow"
            :showLastArrow="showLastArrow"
            :starred="email.starred"
            :archived="email.archived"
            :read="email.read"
            @navigateBack="onNavigateBack"
            @toggleStarred="onToggleStarred(email)"
            @toggleRead="onToggleRead(email)"
            @toggleArchived="onToggleArchived(email)"
            @previousEmail="onChangeIndex(-1)"
            @nextEmail="onChangeIndex(1)"
        />
        <MailDetail 
            :email="email" 
            :emailLoading="emailLoading" 
            
        />
    </div>
</template>
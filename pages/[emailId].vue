<script setup>
    import {format} from 'date-fns';
    const route = useRoute();
    const emailListStore = useMailListStore();
    const email = computed(() => emailListStore.selectedEmail);
    const emailLoading = computed(() => emailListStore.loadingSelectedEmail);

    watch(route, async() => {
        //console.log('loading a mail');
        await emailListStore.getEmailById(route.params.emailId);
        //console.log('loaded', email.value);
    },{immediate:true});

</script>
<template>
    <Suspense>
        <template #default>
    <div class="p-8" >
        <div></div>
        <div>
            <h2 class="text-3xl pb-4">{{ email.subject }}</h2>
            <div class="flex pb-6 justify-between font-body" >
                <p>{{ email.from }}</p>
                <p v-if="!emailLoading" >{{ format(new Date(email.sentAt), 'MM dd yyyy') }}</p>
            </div>
            <p class="font-body">{{ email.body }}</p>
           
        </div>
    </div>
</template>
<template #fallback>
    Loading...
</template>
</Suspense>
    
</template>
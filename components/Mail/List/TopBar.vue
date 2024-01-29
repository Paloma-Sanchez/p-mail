
<script setup>
    import {useMailListStore} from '../../stores/mailListStore';
    import Refresh from '../../../assets/svg/RefreshRounded.svg'
    const emailListStore = useMailListStore();
    const checkedEmails = emailListStore.checkedEmails;
    const emailsCount = computed(() => emailListStore.emails.length);
    console.log( checkedEmails.size);
    console.log( emailsCount.value);
    const allEmailsSelected = computed(() => checkedEmails.size === emailsCount.value);
    const someEmailsSelected = computed(() => {
        return checkedEmails.size > 0 && checkedEmails.size < emailsCount.value; 
    })
</script>
<template>
        <pre>{{ checkedEmails.size }}</pre>
        <pre>{{ allEmailsSelected  }} o {{ someEmailsSelected }}</pre>
        <div class="flex h-12 w-[90%] pl-8 bg-orange-50 hover:bg-orange-100 items-center rounded-t-lg ml-8 mb-2">
            <input 
                type="checkbox" 
                class="['w-4 h-4',
                        'text-orange-600',
                        'bg-orange-100',
                        'border-orange-200',
                        'rounded',
                        'focus:ring-orange-500',
                        'Focus:ring-4']"
                />
            <Refresh
                class="ml-6"
            />
        </div>
</template>

<style scoped>
svg {
    width: 28px;
    height: 28px;
}
</style>
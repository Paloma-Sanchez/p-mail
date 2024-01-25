<script setup>
    import {emails} from '../assets/data/db.json';
    
    //console.log(emails);
    

    /* <table class="table-fixed w-3/4 mx-auto">
            <tbody class="">
                <thead>
                    <tr>
                        <td>

                        </td>
                    </tr>
                </thead>
                <tr v-for="email, index in emails"
                :key="email.id"
                :class="[
                    'p-6',
                    'h-14',
                    'border-b-2',
                    {
                        'bg-orange-100': email.read
                    }
                ]"
                >
                    <td class=" pr-4 max-w-10" >
                        <input type="checkbox" class="w-6 h-6  text-blue-600 bg-gray-100 border-gray-200 rounded focus:ring-blue-500 focus:ring-4"/>
                    </td >
                    <td  class="pr-4  text-base max-w-60" >
                        {{ email.from }}
                    </td>
                    <td class="pr-4 display: inline-block h-12 overflow-hidden">
                        <p><strong>{{ email.subject}}</strong> - {{ email.body }}</p>
                    </td >
                    <td  class="pr-4 display:block date h-12 break-words w-[119px]">
                        <p>{{ email.sentAt }}</p>
                    </td >
                </tr>
            </tbody>
        </table>
    */

</script>

<template>
    <main>
        <MailList class="pl-8"/>
    </main>
</template>

<style scoped>

</style>
<script setup>
   
</script>

<template>
    <div>
        <div></div>
        <div>
            <h2>{{ email.subject }}</h2>
            <div>
                <p>{{ email.from }}</p>
                <p>{{ email.sentAt }}</p>
            </div>
            <p>{{ email.body }}</p>
           
        </div>
    </div>
</template>
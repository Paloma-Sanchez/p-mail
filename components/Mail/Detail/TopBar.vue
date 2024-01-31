<script setup>
    import EmailRead from '../../../assets/svg/EmailReadOutline.svg';
    import EmailUnread from '../../../assets/svg/EmailUnreadOutline.svg';
    import ArchiveMail from '../../../assets/svg/ArchiveRounded.svg';
    import UnarchiveMail from '../../../assets/svg/UnarchiveRounded.svg';
    import StarOutline from '../../assets/svg/KidStarOutline.svg';
    import StarFull from '../../../assets/svg/KidStarSharp.svg';
    import ArrowLeft from '../../../assets/svg/ArrowLeftAltRounded.svg';
    import ArrowBack from '../../../assets/svg/ArrowBackIosNewRounded.svg';
    import ArrowForward from '../../../assets/svg/ArrowForwardIosRounded.svg';
    
    const props = defineProps({
        showArrow:{
            type:String,
            default:'first'
        },
        starred:{
            type:Boolean,
            default: false
        },
        archived:{
            type:Boolean,
            default: false
        },
        read:{
            type:Boolean,
            default: true
        }
    });

    const emit = defineEmits(['previousEmail', 'nextEmail']);

    console.log(props.read);

    const onBackArrowClick = () => {
        console.log('backclick', props.showArrow);
        if(props.showArrow === 'first'){
            return;
        };
        return emit('previousEmail');
    }
    const onForwardArrowClick = () => {
        if(props.showArrow === 'last'){
            return;
        };
        return emit('nextEmail');
    }
</script>
<template>
    <div class="flex pt-6 pr-10 w-[90%] justify-between items-center">
        <div class="flex ml-8  w-1/3 justify-between fill-slate-700">
            <div
                class="cursor-pointer hover:scale-125 hover:fill-orange-600 "
            >
                <ArrowLeft @click="$emit('navigateBack')"/>
            </div>
            <div
                class="cursor-pointer hover:scale-125 hover:fill-orange-600 "
                @click="$emit('toggleStarred')"
            >
                <StarOutline v-if="!starred"/>
                <StarFull v-else/>
            </div>
            <div
                class="cursor-pointer hover:scale-125 hover:fill-orange-600 "
                @click="$emit('toggleArchived')"
            >
                <ArchiveMail v-if="!archived"/>
                <UnarchiveMail v-else/>
            </div>
            <div
                class="cursor-pointer hover:scale-125 hover:fill-orange-600 "
                @click="$emit('toggleRead')"
            >
                <EmailUnread v-if="read"/>
                <EmailRead v-else/>
            </div>
        </div>
        <div class="flex w-16 justify-between items-center fill-slate-700">
            <ArrowBack
                :class="[
                        'cursor-pointer', 
                        'hover:scale-125',
                        'hover:fill-orange-600',
                        {
                            'hover:transform-none': showArrow === 'first',
                            'hover:fill-slate-200': showArrow === 'first',
                            'hover:cursor-not-allowed': showArrow === 'first'
                        }
                        ]"
                @click="onBackArrowClick"
            />
            <ArrowForward
            :class="[
                'fill-orange-600',
                'cursor-pointer',
                'hover:scale-125',
                'hover:fill-orange-600',
                
                {
                    'hover:transform-none': showArrow === 'last',
                    'hover:fill-slate-200': showArrow === 'last',
                    'hover:cursor-not-allowed': showArrow === 'last'
                }
                ]"
                @click="onForwardArrowClick"
            />
        </div>
    </div>
    
</template>


<style>
.nuxt-icon--fill{
    fill: inherit;
}
.nuxt-icon--fill *{
    fill: inherit;
}
</style>
<style scoped>
.nuxt-icon {
    width: 26px;
    height: 26px;
}


</style>

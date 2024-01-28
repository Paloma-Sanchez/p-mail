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
    //rgb(249, 115, 22)
    //rgb(234, 88, 12)
</script>
<template>
    <div class="flex pt-6 pr-10 justify-between">
        <div class="flex ml-8  w-1/3 justify-between">
            <div>
                <ArrowLeft @click="$emit('navigateBack')"/>
            </div>
            <div
                class=" "
                @click="$emit('toggleStarred')"
            >
                <StarOutline v-if="!starred"/>
                <StarFull v-else/>
            </div>
            <div
                @click="$emit('toggleArchived')"
            >
                <ArchiveMail v-if="!archived"/>
                <UnarchiveMail v-else/>
            </div>
            <div
                @click="$emit('toggleRead')"
            >
                <EmailUnread v-if="read"/>
                <EmailRead v-else/>
            </div>
        </div>
        <div class="flex">
            <ArrowBack
                :class="[
                        'cursor-pointer',
                        {
                            'bg-orange-600': showArrow === 'first'
                        }
                        ]"
                
                @click="onBackArrowClick"
            />
            <ArrowForward
            :class="[
                'cursor-pointer',
                {
                    'bg-orange-100': showArrow === 'last'
                }
                ]"
                @click="onForwardArrowClick"
            />
        </div>
    </div>
    
</template>


<style>
svg:hover {
    transform: scale(1.2);
    path{
        fill:rgb(234, 88, 12);
    }
}
</style>
<style scoped>
svg {
    width: 26px;
    height: 26px;
}


</style>

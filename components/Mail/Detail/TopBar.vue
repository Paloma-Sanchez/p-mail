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
        showNextArrow:{
            type:Boolean,
            default:false
        },
        showLastArrow:{
            type:Boolean,
            default:false
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

    const onBackArrowClick = () => {
        if(!props.showLastArrow){
            return;
        };
        return emit('previousEmail');
    };
    const onForwardArrowClick = () => {
        if(!props.showNextArrow){
            return;
        };
        return emit('nextEmail');
    };
</script>
<template>
    <div class="flex pt-6 pr-10 w-[90%] justify-between items-center">
        <div class="flex ml-8  w-1/3 justify-between fill-slate-700">
            <div
                class="cursor-pointer hover:scale-125 hover:fill-orange-600 "
            >
                <ArrowLeft @click="$emit('navigateBack')" aria-describedby="back-to-inbox" />
                <p role="tooltip" id="back-to-inbox">Go back to inbox</p>
            </div>
            <div
                class="cursor-pointer hover:scale-125 hover:fill-orange-600 "
                @click="$emit('toggleStarred')"
            >
                <div v-if="starred" >
                    <StarFull aria-describedby="mark-unstarred" />
                    <p role="tooltip" id="mark-unstarred">Remove star</p>
                </div>
                <div v-else >
                    <StarOutline  aria-describedby="mark-starred"/>
                    <p role="tooltip" id="mark-starred">Add a star</p>
                </div>
            </div>
            <div
                class="cursor-pointer hover:scale-125 hover:fill-orange-600 "
                @click="$emit('toggleArchived')"
            >
                <div v-if="archived">
                    <UnarchiveMail  aria-describedby="mark-unarchived"/>
                    <p role="tooltip" id="mark-unarchived">Unarchive</p>
                </div>
                <div v-else>
                    <ArchiveMail  aria-describedby="mark-archived"/>
                    <p role="tooltip" id="mark-archived">Archive</p>
                </div>
            </div>
            <div
                class="cursor-pointer hover:scale-125 hover:fill-orange-600 "
                @click="$emit('toggleRead')"
            >
                <div v-if="read">
                    <EmailUnread aria-describedby="mark-unread"/>
                    <p role="tooltip" id="mark-unread">Mark as unread</p>
                </div>
                <div v-else>
                    <EmailRead aria-describedby="mark-read"/>
                    <p role="tooltip" id="mark-read">Mark as read</p>
                </div>
            </div>
        </div>
        <div class="flex w-16 justify-between items-center fill-slate-700">
            <div>
                <ArrowBack
                    :class="[
                            'cursor-pointer', 
                            'hover:scale-125',
                            'hover:fill-orange-600',
                            {
                                'hover:transform-none': !showLastArrow,
                                'hover:fill-slate-200': !showLastArrow,
                                'hover:cursor-not-allowed': !showLastArrow
                            }
                            ]"
                    @click="onBackArrowClick"
                    aria-describedby="previous-email"
                />
                <p 
                    role="tooltip" 
                    id="previous-email"
                    class="top-auto"
                >
                    Previous email
                </p>
            </div>
            <div>
                <ArrowForward
                :class="[
                    'fill-orange-600',
                    'cursor-pointer',
                    'hover:scale-125',
                    'hover:fill-orange-600',
                    {
                        'hover:transform-none': !showNextArrow,
                        'hover:fill-slate-200': !showNextArrow,
                        'hover:cursor-not-allowed': !showNextArrow,
                    }
                    ]"
                    @click="onForwardArrowClick"
                    aria-describedby="next-email"
                />
                <p 
                    role="tooltip" 
                    id="next-email" 
                    class="top-auto"
                >
                    Next Email
                </p>
            </div>
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

[role="tooltip"],
.hidetooltip.hidetooltip.hidetooltip + [role="tooltip"] {
  visibility: hidden;
  position: absolute;
  top: -50%;
  background: rgba(247, 238, 187, 0.663);
  color: #334155;
}
[role="tooltip"].top-auto {
  visibility: hidden;
  position: absolute;
  top: auto;
  background: rgba(247, 238, 187, 0.663);
  color: #334155;
}
[aria-describedby]:hover,
[aria-describedby]:focus {
  position: relative;
  
}
[aria-describedby]:hover + [role="tooltip"],
[aria-describedby]:focus + [role="tooltip"] {
  visibility: visible;
}

p{
    font-size: 10px;
    width: max-content;
    padding: 0 2px;
}



</style>

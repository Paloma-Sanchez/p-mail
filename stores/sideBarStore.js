import {defineStore} from 'pinia';

export const useSideBarStore = defineStore('sideBarStore', () => {
    const starredSelected = ref(false);
    const archivedSelected = ref(false);

    const selectUnarchived = () => {
        starredSelected.value =false;
        archivedSelected.value =false;
    }

    const selectStarred = () => {
        starredSelected.value =true;
        archivedSelected.value =false;
    };

    const selectArchived = () => {
        starredSelected.value =false;
        archivedSelected.value =true;
    };

    return {
        starredSelected,
        archivedSelected,
        selectUnarchived,
        selectStarred,
        selectArchived
    }
})

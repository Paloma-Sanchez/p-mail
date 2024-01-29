let selectedEmails = reactive(new Set());

export const useEmailSelection = () => {
    const toggle = (email) => {
        if(selectedEmails.has(email)){
            selectedEmails.delete(email)
            } else {
              selectedEmails.add(email);
            }
    }

    return {
        toggle
    }
}

export default useEmailSelection;
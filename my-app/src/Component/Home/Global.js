import  {create }  from "zustand";

export  const useStore =create((set) =>({
    id :"12312" ,
    updateid: (newBears) => set({ id: newBears }),

})) 





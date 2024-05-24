import  {create }  from "zustand";

export  const useStore =create((set) =>({
    id :"" ,
    updateid: (newBears) => set({ id: newBears }),
})) 





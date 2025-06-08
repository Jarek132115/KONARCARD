import { create } from "zustand";

interface BusinessCardState {
  businessName: string;
  pageTheme: "light" | "dark";
  font: "Inter" | "Montserrat" | "Poppins";
  coverPhoto: string | null;
  mainHeading: string;
  subHeading: string;
  coverPhotoFile?: File;
}

interface BusinessCardStore {
  state: BusinessCardState;
  updateState: (newState: Partial<BusinessCardState>) => void;
  resetState: () => void;
}

const initialState: BusinessCardState = {
  businessName: "",
  pageTheme: "light",
  font: "Inter",
  coverPhoto: null,
  mainHeading: "",
  subHeading: "",
};

const useBusinessCardStore = create<BusinessCardStore>((set) => ({
  state: initialState,

  updateState: (newState) =>
    set((store) => ({
      state: { ...store.state, ...newState },
    })),

  resetState: () => set({ state: initialState }),
}));

export default useBusinessCardStore;

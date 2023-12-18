import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  modalType: "",
  title: "",
  result: false,
};
type TOpenModalPayload = {
  modalType: string;
  title: string;
};
const customModalSlice = createSlice({
  name: "customModal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<TOpenModalPayload>) => {
      const { modalType, title } = action.payload;
      state.isOpen = true;
      state.modalType = modalType;
      state.title = title;
    },
    setResult: (state, { payload }: { payload: boolean }) => {
      state.result = payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalType = "";
      state.title = "";
    },
  },
});
export const { openModal, setResult, closeModal } = customModalSlice.actions;
export default customModalSlice.reducer;

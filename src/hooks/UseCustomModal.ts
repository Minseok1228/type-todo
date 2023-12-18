import store from "../redux/configureStore";
import { useAppDispatch } from "../redux/hooks";
import { openModal } from "../redux/module/customModalSlice";

const useCutomModal = () => {
  const dispatch = useAppDispatch();

  const handleOpenModal = (title: string, modalType: string) => {
    return new Promise((res) => {
      dispatch(openModal({ title, modalType }));

      const unsubscribe = store.subscribe(() => {
        const result = store.getState().customModalSlice.result;
        res(result);
        unsubscribe();
      });
    });
  };
  return { handleOpenModal };
};
export default useCutomModal;

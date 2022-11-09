import { makeAutoObservable } from "mobx";

export class ModalState {
  show = false;
  modal_data = {};
  edit_mode = false;
  constructor() {
    makeAutoObservable(this);
  }
  showModal = () => {
    this.show = true;
    this.edit_mode = false;
    this.modal_data = {
      name: "",
      price: "",
      description: "",
      images: "",
      sku: "",
    };
  };

  showModalWithData = (data) => {
    this.modal_data = data;
    this.edit_mode = true;
    this.show = true;
  };

  closeModal = () => {
    this.show = false;
  };
}

export default ModalState;

import { makeAutoObservable } from "mobx";
import axios from "axios";
const baseURL = "http://localhost:3030/product/";
const config = {
  headers: {},
};
export class ProductList {
  product = [];
  page = 0;
  totalPages = 0;
  show = false;
  modal_data = {};
  product_id = "";
  archived_data = {};
  edit_mode = false;
  alert = {
    show: false,
    variant: "success",
    message: "Message",
  };
  constructor() {
    makeAutoObservable(this);
    this.getProductList();
  }
  getProductList = () => {
    this.page++;
    axios.get(baseURL + "page/" + this.page, config).then((response) => {
      this.setPage(response.data.data.page);
      this.setTotalPages(response.data.data.totalPages);
      this.addProduct(response.data.data.list);
    });
  };

  //make Setter for MobX best practice
  setPage = (page) => {
    this.page = page;
  };
  setTotalPages = (pages) => {
    this.totalPages = pages;
  };
  addProduct = (products) => {
    this.product.push(...products);
  };
  showModal = () => {
    this.show = true;
    this.edit_mode = false;
    this.product_id = "";
    this.modal_data = {
      Name: "",
      Price: "",
      Description: "",
      Image:
        "http://www.rcdrilling.com/wp-content/uploads/2013/12/default_image_01-1024x1024-570x760.png",
      SKU: "",
    };
  };

  showModalWithData = (data) => {
    this.modal_data = data;
    this.product_id = data.SKU;
    this.edit_mode = true;
    this.show = true;
  };

  closeModal = () => {
    this.show = false;
  };
  updateProductName = (e) => {
    this.modal_data.Name = e.target.value;
  };
  updateSKU = (e) => {
    this.modal_data.SKU = e.target.value;
  };
  updatePrice = (e) => {
    this.modal_data.Price = e.target.value;
  };
  updateDescription = (e) => {
    this.modal_data.Description = e.target.value;
  };
  updateImage = (e) => {
    this.modal_data.Image = e.target.value;
  };

  submitData = () => {
    axios
      .post(baseURL, this.modal_data, config)
      .then((response) => {
        if (response.data.success) {
          this.setAlertMessage(response.data.message);
          this.setAlertVariant("success");
          this.closeModal();
          this.openAlert();
          this.resetPage();
          this.getProductList();
        } else {
          this.setAlertMessage(response.data.message);
          this.setAlertVariant("danger");
          this.openAlert();
        }
      })
      .catch((response) => {
        console.log(response);
        this.setAlertMessage(response.response.data.message);
        this.setAlertVariant("danger");
        this.openAlert();
      });
  };

  updateData = () => {
    axios
      .put(baseURL + "update/" + this.product_id, this.modal_data, config)
      .then((response) => {
        if (response.data.success) {
          this.setAlertMessage(response.data.message);
          this.setAlertVariant("success");
          this.closeModal();
          this.openAlert();
          this.resetPage();
          this.getProductList();
        } else {
          this.setAlertMessage(response.data.message);
          this.setAlertVariant("danger");
          this.openAlert();
        }
      })
      .catch((response) => {
        console.log(response);
        this.setAlertMessage(response.response.data.message);
        this.setAlertVariant("danger");
        this.openAlert();
      });
  };

  deleteData = () => {
    axios
      .delete(baseURL + "delete/" + this.product_id, config)
      .then((response) => {
        if (response.data.success) {
          this.setAlertMessage(response.data.message);
          this.setAlertVariant("success");
          this.closeModal();
          this.openAlert();
          this.resetPage();
          this.getProductList();
        } else {
          this.setAlertMessage(response.data.message);
          this.setAlertVariant("danger");
          this.closeModal();
          this.openAlert();
        }
      })
      .catch((response) => {
        console.log(response);
        this.setAlertMessage(response.response.data.message);
        this.setAlertVariant("danger");
        this.openAlert();
      });
  };

  closeAlert = () => {
    this.alert.show = false;
  };
  openAlert = () => {
    this.alert.show = true;
  };
  resetPage = () => {
    this.page = 0;
    this.product = [];
  };

  setAlertMessage = (a) => {
    this.alert.message = a;
  };
  setAlertVariant = (a) => {
    this.alert.variant = a;
  };
}

export default ProductList;

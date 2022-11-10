import { makeAutoObservable } from "mobx";
import axios from "axios";
const baseURL = "http://localhost:3030";
const config = {
  headers: {},
};
export class ProductList {
  product = [
    {
      name: "Product-A",
      sku: "0001",
      price: 129000,
      images:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      name: "Product-B",
      sku: "0002",
      price: 129000,
      images:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      name: "Product-C",
      sku: "0003",
      price: 129000,
      images:
        "https://media.istockphoto.com/id/1198863709/photo/skin-and-hair-care-beauty-product-mock-up-lotion-bottle-oil-cream-isolated-on-white-3d-render.jpg?s=612x612&w=0&k=20&c=_0-9dLUohaQrThH0669Ygx3Ar17rX0cRkXy0cEexfQw=",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      name: "Product-D",
      sku: "0004",
      price: 129000,
      images:
        "https://global-uploads.webflow.com/6100d0111a4ed76bc1b9fd54/627f340ec471aad681ef85d8_product%20marketing%201.jpg",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      name: "Product-E",
      sku: "0005",
      price: 129000,
      images: "https://petapixel.com/assets/uploads/2017/03/product1.jpeg",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
  ];
  number = 0;
  page = 1;
  constructor() {
    makeAutoObservable(this);
  }
  getProductList = () => {
    axios.get(baseURL, config).then((response) => {
      console.log("res", response);
      this.product = response.data;
    });
  };
  loadMore = () => {
    let new_product = {
      name: "Product-B",
      sku: "0002",
      price: 129000,
      images:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    };
    this.product.push(new_product);
  };
}

export default ProductList;

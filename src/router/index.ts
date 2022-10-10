import React from "react";

export interface RouteInterface {
  path: string;
  element: React.ElementType;
}

export enum RouteEnum {
  WISH = "/wish",
  CART = "/cart",
  CATEGORIES = "/categories",
  CATEGORY_PAGE = "/category/:id",
  PRODUCTS = "/products",
  PRODUCT_DETAILS = "/product/:id",
}

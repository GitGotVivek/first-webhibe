import React from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Catagory",
    selector: (row) => row.catagory,
    sortable: true,
  },
  {
    name: "Sub Catagory",
    selector: (row) => row.sub_catagory,
    sortable: true,
  },
  {
    name: "Business",
    selector: (row) => row.business,
    sortable: true,
  },
  {
    name: "City",
    selector: (row) => row.city,
    sortable: true,
  },
  {
    name: "Product Name  ",
    selector: (row) => row.product_name,
    sortable: true,
  },
  {
    name: "Product Price  ",
    selector: (row) => row.product_price,
    sortable: true,
  },
  {
    name: "Color  ",
    selector: (row) => row.color,
    sortable: true,
  },
  {
    name: "CheckBoxes  ",
    selector: (row) => row.checkboxes,
    sortable: true,
  },
];

// const data = [
//     {
//         id: 1,
//         catagory: 'Management',
//         sub_catagory:'HR',
//         business:'Manufacturing',
//         city:'Kolkata',
//         product_price: '1988',
//         product_name:'Denim Jacket',
//         color:'Black',
//         checkboxes:'chck1'
//     },
// ]
// console.log("data",data)

const Product = () => {
  const { product } = useSelector((state) => state.formRed);
  const frmdat = product;
  console.log("frmdat", frmdat);

  const data = [
    {
      id: 1,
      catagory: product.catagory,
      sub_catagory: product.sub_catagory,
      business: product.business,
      city: product.city,
      product_price: product.product_price,
      product_name: product.product_name,
      color: product.color,
      checkboxes: product?.checkboxes?.join(","),
    }
  ];
  // console.log("dataaa",data)
  return (
    <>
      <h1>Product</h1>
      <DataTable columns={columns} data={data} />
      {frmdat.map((fData) => {
        return (
          <>
          <DataTable data={data}>{fData?.catagory}</DataTable> 
          </>
        );
      })}
      
    </>
  );
}; 

export default Product;

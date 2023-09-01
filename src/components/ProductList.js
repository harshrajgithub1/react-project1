import React from 'react';
import "./ProductList.css";
import { Link } from 'react-router-dom';
// import { css } from 'react-select/dist/declarations/src/components/Control';

export const productsdata = [
   
    {
       
        id:123456781,
        name: 'a',
        imgsrc: "https://n4.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg",
        stars: "", description: "Veirdo - Green Cotton Regular Fit Men's T-Shirt ( Pack of 1 )",
        price: 244,
        ratings: 3,
        stockleft: 2,
        productUrl: "veirdo"
       
    
    },
    
    {
        id:123456782,
        name: 'b',
        imgsrc: "https://m.media-amazon.com/images/I/81AnwiJ6u4L.jpg",
        stars: "", description: "ULTRA-REALISTIC GAMEPLAY Experience ultra-authentic WWE gameplay, featuring loads of new moves that you can use to dominate your opponents. LARGEST",
        price: 1898,
        ratings: 3,
        stockleft: 2,
        productUrl: "ultra-realistic"

    },
    {
        id:123456783,
        name:'c',
        imgsrc: "https://n1.sdlcdn.com/imgs/k/l/y/Ministry-Of-Nuts-Pack-of-SDL023394820-1-fcbf4.jpg",
        stars: "",
        description: "Ministry Of Nuts Pack of 2 Premium Dry Fruits Whole Cashew Nuts 200g, Seedless Raisins 200g - Total 400g All Natural, Good Source of",
        price: 1248,
        ratings: 4,
        stockleft: 1,
        productUrl: "nuts-pack"
    },
    {
        id:123456784,
        name: 'd',
        imgsrc: "https://n1.sdlcdn.com/imgs/k/e/u/Veirdo-100-Cotton-Regular-Fit-SDL051246309-1-51a91.jpg",
        stars: "",
        description: "Veirdo - Multicolor Cotton Regular Fit Men's T-Shirt ( Pack of 1 )",
        price: 399,
        ratings: 2,
        stockleft: 5,
        productUrl: "multicolor-cotton"

    },
    {
        id:123456785,
        name: 'e',
        imgsrc: "https://n3.sdlcdn.com/imgs/k/i/j/Rigo-Cotton-Regular-Fit-Navy-SDL576376983-3-39d9f.jpg",
        stars: "",
        description: "Rigo - Navy Blue Cotton Regular Fit Women's Jumpsuit ( Pack of 1 )",
        price: 599,
        ratings: 4,
        stockleft: 4,
        productUrl: "Rigo"
    },
    {
        id:123456786,
        name: 'f',
        imgsrc: "https://n2.sdlcdn.com/imgs/i/z/e/Maxbell-USB-Rechargeable-Electronic-Flameless-SDL679184483-1-08e0f.jpg",
        stars: "",
        description: "Maxbell USB Rechargeable Electronic Flameless Lighter",
        price: 5999,
        ratings: 4,
        stockleft: 4,
        productUrl: "maxbell"
    },
    {
        id:123456787,
        name: 'g',
        imgsrc: "https://m.media-amazon.com/images/I/71jWK5-fBML.jpg",
        stars: "",
        description: "Bhagavad gita as it is",
        price: 599,
        ratings: 4,
        stockleft: 4,
        productUrl: "bhagavad-gita"

    },
    {
        id:123456788,
        name: 'h',
        imgsrc: "https://n4.sdlcdn.com/imgs/j/o/y/Aford-Black-Hiking-Trekking-Boot-SDL911051804-1-8c260.jpeg",
        stars: "3",
        description: "Aford Black Hiking & Trekking Boot",
        price: 599,
        ratings: 4,
        stockleft: 4,
        productUrl: "rigo-navy-blue" 
    },
    {
        id:123456789,
        name:' i',
        imgsrc: "https://n2.sdlcdn.com/imgs/k/k/l/NBOX-Transparent-TPU-Glossy-Cases-SDL759838376-1-cf899.jpg",
        description: "Iphone",
        price: 599,
        ratings: 4,
        stockleft: 4,
        productUrl: "aford-black"
    },

    {
        id:123456790,
        name: 'j',
        imgsrc:"https://www.indiamart.com/proddetail/you-can-win-english-book-22676386388.html",
        description: "Motivation Book",
        price:299,
        ranking:3,
        stockleft:3,
        productUrl:"You Can Win"
    },
    

]

export default productsdata;


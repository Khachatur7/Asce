import React, { useEffect, useRef, useState } from "react";
import ItemCard from "../item.card";
import "./goods.section.css";

import arrowDown from "../../assets/img/arrow-down.svg";
import Button from "../button";

import arrowIcon from "../../assets/img/arrow-right-white.svg";
import shop from "../../assets/img/shop.svg";
import iconAppleWhite from "../../assets/img/apple-white.svg";
import iconAppleBlack from "../../assets/img/apple-black.svg";
import dressWhite from "../../assets/img/dresswhite.svg";
import dressBlack from "../../assets/img/dressblack.svg";
import clothes from "../../assets/img/img.png";
import clothes1 from "../../assets/img/img_1.png";
import { scrollTo, useOnScreen } from "../../tools";
import classNames from "classnames";
import { useGetProductsQuery } from "../../redux/products.api";
import Loader from "../loader";
import { error, log } from "node:console";

type TProduct = {
    id: string;
    name: string;
    price: number;
    type: string; // Add this line
};

interface IProduct {
    id: number;
    product_name: string;
    color: string;
    price: number;
    image_urls: string[];
    in_stock_amount: number;
    in_development: boolean;
    device: string;
    old_price: number;
    size: any;
}

const GoodsSection = () => {
    const [activeButton, setActiveButton] = useState<string>("all");
    const goodsRef = useRef(null);
    const titleRef = useRef(null);
    const { isSeen: titleSeen } = useOnScreen(titleRef);
    const { isSeen: goodsSeen } = useOnScreen(goodsRef, 0.2);
    const [opened, setOpened] = useState(false);
    const { data: productsArr, isLoading } = useGetProductsQuery();
    const [products, setProducts] = useState<IProduct[]>([]);
    const handleClick = () => {
        if (opened) {
            setOpened(false);
            scrollTo("goods");
        } else {
            setOpened(true);
        }
    };

    const handleButtonChange = (button: string) => {
        setActiveButton(button);
    };

    const FilterProducts = (product_list: IProduct[]) => {
        let filteredProducts: IProduct[] = [];
        let product_names: string[] = [];
        product_list.map((el, ind) => {
            if (!product_names.includes(el.product_name)) {
                product_names.push(el.product_name);
                filteredProducts.push(el);
            }
        });

        setProducts(filteredProducts);
    };

    const filteredProducts = products
        ? products.filter((el) => {
            if (activeButton === "all") return true;
            return false;
        })
        : [];

    useEffect(() => {
        fetch("https://asce.store/api/products/")
            .then((res) => res.json())
            .then((res) => FilterProducts(res))
            .catch((error) => console.log(error));
    }, []);

    return (
        <section className={"goods"} id="goods">
            <div className={"wrapper goods__wrapper"}>
                <div
                    className={classNames("goods__top", { refHidden: !titleSeen })}
                    ref={titleRef}
                >
                    <h2 className="goods__title">Ассортимент</h2>
                    <Button
                        className="goods__switch switch"
                        variant={activeButton === "all" ? "black" : "white"}
                        onClick={() => handleButtonChange("all")}
                    >
                        Все
                    </Button>
                    <Button
                        className="goods__switch switch"
                        variant={activeButton === "accessories" ? "black" : "white"}
                        onClick={() => handleButtonChange("accessories")}
                    >
                        <img
                            src={
                                activeButton === "accessories" ? iconAppleWhite : iconAppleBlack
                            }
                            alt="Apple Icon"
                        />
                        Аксессуары
                    </Button>
                    <Button
                        className="goods__switch switch"
                        variant={activeButton === "clothes" ? "black" : "white"}
                        onClick={() => handleButtonChange("clothes")}
                    >
                        <img
                            src={activeButton === "clothes" ? dressWhite : dressBlack}
                            alt="Dress Icon"
                        />
                        Одежда
                    </Button>
                </div>
                <div
                    className={classNames("goods__list", { refHidden: !goodsSeen })}
                    ref={goodsRef}
                >
                    {activeButton === "accessories" &&
                        products?.map((product) => {
                            if (product.device != null) {
                                return (
                                    // <a href={`${location.origin}/products/${product.id}`} key={product.id + product.old_price}>
                                        <ItemCard key={product.id} {...product} />
                                    // </a> 
                                );
                            }
                        })}
                    {activeButton === "clothes" &&
                        products?.map((product) => {
                            if (product.size != null) {
                                return (
                                    // <a href={`${location.origin}/products/${product.id}`} key={product.id + product.old_price}>
                                        <ItemCard key={product.id} {...product} />
                                    // </a> 
                                );
                            }
                        })}

                    {activeButton === "all" &&
                        products?.map((product) => {
                            return (
                                // <a href={`${location.origin}/products/${product.id}`} key={product.id + product.old_price}>
                                    <ItemCard key={product.id} {...product} />
                                // {/* </a> */}
                            );
                        })}
                </div>
                {isLoading && <Loader />}

                {filteredProducts.length > 4 && (
                    <Button
                        variant="white"
                        onClick={handleClick}
                        className={classNames("goods__button", { opened })}
                    >
                        К полному каталогу
                        <img
                            src={arrowDown}
                            className="goods__button-icon"
                            alt="Arrow Down"
                        />
                    </Button>
                )}
            </div>
        </section>
    );
};

export default GoodsSection;

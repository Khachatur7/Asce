import React, { useState } from 'react';
import './slick-slide.css';

import bgIllustrationBlack from "../assets/img/main-page-bgi-1.svg";
import bgIllustrationWhite from "../assets/img/main-page-bgi-2.svg";
import arrowIcon from "../assets/img/arrow-right.svg";
import arrowIconWhite from "../assets/img/arrow-right-white.svg";
import logoBlack from "../assets/img/img_black.png";
import logoWhite from "../assets/img/img_white.png";

import Button from './button';
import { scrollTo } from '../tools'; // Import the scrollTo function

type Props = {
    variant: "black" | "white";
    link: string;
};

const Slide = ({ variant, link }: Props) => {
    const [wait, setWait] = useState(true);

    // Define a class name based on the wait state
    const waitClass = wait ? 'waiting' : '';

    return (
        <div className={`slide ${variant} ${waitClass}`}>
            <img src={variant === "black" ? bgIllustrationBlack : bgIllustrationWhite} alt="" className="slide__illustration" />

            <div className="center1">
                <div className="dfff">
                    <div className="item1">
                        <div className="center">
                            <h2 className={`h2 ${variant === "white" ? "text-black" : "text-white"}`}>
                                Одежда и
                                аксессуары от
                                AŚCE APPAREL
                            </h2>
                        </div>

                        <div className="center a_center">
                            <h3 className={variant === "white" ? "text-black m-w" : "text-white m-b"}>
                                Молодой street wear бренд в России.
                            </h3>
                        </div>

                        <div className="center">
                            <Button
                                variant={variant === "black" ? "white" : "black"}
                                className={`slide__link ${variant}`}
                                onClick={() => scrollTo("goods")} // Add onClick to scroll to "goods"
                            >
                                Приобрести{" "}
                                <img src={variant === "black" ? arrowIcon : arrowIconWhite} className="slide__link-arrow" />
                            </Button>
                        </div>
                    </div>

                    <div className="item2">
                        <img className="imm" src={variant === "black" ? logoBlack : logoWhite} alt="" />
                    </div>
                </div>
            </div>
            <div className="slide__box">
            </div>
        </div>
    );
};

export default Slide;

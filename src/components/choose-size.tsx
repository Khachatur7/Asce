import { useEffect, useState } from "react";
import "./choose-size.css";
interface ISizeShirt {
    blackShirt: any,
    witeShirt: any
}
interface IChooseSize {
    color: string,
    sizes: ISizeShirt | undefined,
    setSize: React.Dispatch<React.SetStateAction<string | undefined>>
    changeProduct: boolean,
    setChangeProduct: React.Dispatch<React.SetStateAction<boolean>>
}


const ChooseSize = ({ sizes, color, setSize, changeProduct, setChangeProduct }: IChooseSize) => {
    const [showSize, setShowSize] = useState(false);
    const [showTablet, setShowTablet] = useState(false);
    const [selectedSize, setSelectedSize] = useState("Выбрать размер"); // Default value

    const CloseSizePopup = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.closest(".choose_button")) {
            setShowSize(!showSize);
        }
        else if (!target.closest(".sizes_table") && showSize && !target.closest(".choose_button")) {
            setShowSize(!showSize);
        }
    };
    const CloseTableSizePopup = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.closest(".tablet_button")) {
            setShowTablet(!showTablet);
        }
        else if (!target.closest(".about_every_size_info") && showTablet && !target.closest(".tablet_button")) {
            setShowTablet(!showTablet);
        }

    };
    document.addEventListener('click', CloseSizePopup);
    document.addEventListener('click', CloseTableSizePopup);

    const OpenSize = () => {
        setShowTablet(false);
        return setShowSize(!showSize);
    };

    const OpenTablet = () => {
        setShowSize(false);
        return setShowTablet(!showTablet);
    };


    const SelectSize = (size: string) => {
        setSelectedSize(`Размер ${size}`)
        setSize(size)
    }


    useEffect(() => {
        if (changeProduct) {
            setSelectedSize("Выбрать размер")
            setSize(undefined)
            setChangeProduct(false)
        }
    }, [changeProduct])

    return (
        <div className="choose_size_container">
            <div>
                <div className="choose_size_buttons">
                    <button
                        className="choose_button"

                        id={selectedSize == "Выбрать размер" ? "" : "choose_button_active"}
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_56_18903)">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.66979 0.974813C5.62522 1.0399 5.60089 1.11671 5.59986 1.19559V1.20599C5.59917 1.31207 5.55637 1.41353 5.48087 1.48805C5.40537 1.56257 5.30335 1.60405 5.19727 1.60336C5.09118 1.60267 4.98971 1.55987 4.91519 1.48437C4.84066 1.40888 4.79918 1.30687 4.79987 1.20079C4.79978 0.980672 4.86023 0.764768 4.9746 0.576691C5.08897 0.388613 5.25286 0.235604 5.44834 0.134398C5.64383 0.0331912 5.86338 -0.0123155 6.08299 0.00285426C6.3026 0.018024 6.5138 0.0932861 6.69352 0.22041C6.87323 0.347533 7.01452 0.521623 7.10194 0.723639C7.18936 0.925656 7.21954 1.14782 7.18918 1.36584C7.15883 1.58385 7.0691 1.78932 6.92982 1.95978C6.79054 2.13023 6.60706 2.25911 6.39946 2.33231V2.52909L8.13904 3.22544L9.07544 3.53622C9.58534 3.70567 10.0509 3.98709 10.4378 4.35986C10.8248 4.73262 11.1234 5.18727 11.3118 5.69046L11.9746 7.45993C12.0462 7.65192 11.9618 7.8667 11.7786 7.9583L9.59983 9.04622V11.6C9.59983 11.7061 9.55769 11.8078 9.48268 11.8829C9.40766 11.9579 9.30592 12 9.19984 12H2.79869C2.6926 12 2.59086 11.9579 2.51584 11.8829C2.44083 11.8078 2.39869 11.7061 2.39869 11.6L2.39909 9.04782L0.221105 7.9579C0.132701 7.91376 0.0637838 7.83844 0.0276606 7.74648C-0.00846257 7.65451 -0.00922983 7.55243 0.0255069 7.45993L0.689502 5.68926C0.8778 5.18711 1.17593 4.73337 1.56209 4.36121C1.94826 3.98905 2.4127 3.70787 2.92148 3.53822L3.86228 3.22464L5.59946 2.53149L5.59986 2.00033C5.59997 1.89432 5.64216 1.79269 5.71716 1.71777C5.79216 1.64285 5.89384 1.60076 5.99986 1.60076C6.07875 1.60075 6.15588 1.57742 6.22154 1.5337C6.2872 1.48997 6.33846 1.42781 6.36889 1.35503C6.39931 1.28225 6.40753 1.20209 6.39251 1.12465C6.37749 1.04721 6.33991 0.975939 6.28449 0.9198C6.22907 0.863662 6.15828 0.825164 6.08104 0.809149C6.00379 0.793134 5.92353 0.800317 5.85036 0.829794C5.77718 0.859271 5.71436 0.909726 5.66979 0.974813ZM6.00021 4.20645C5.53259 4.2066 5.07971 4.0429 4.72027 3.7438L6.00226 3.23184L7.27985 3.743C6.9206 4.04232 6.46782 4.20631 6.00021 4.20645Z"
                                        fill="#0F0F0F"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_56_18903">
                                        <rect width="12" height="12" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </svg>
                        {selectedSize}
                    </button>

                    <span

                        className={`tablet_button ${showTablet && "active_tablet_button"}`}
                    >
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 14 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 14 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.49084 4.42689C3.31586 4.03779 4.21982 3.84516 5.1318 3.86409C6.04378 3.845 6.94764 4.03785 7.77275 4.42689C8.14413 4.18535 8.35392 3.9018 8.35392 3.62542C8.35392 2.93326 7.05911 2.19336 5.1318 2.19336C3.20449 2.19336 1.90967 2.93326 1.90967 3.62542C1.90967 3.9018 2.11946 4.18535 2.49084 4.42689ZM13.1274 7.20556H10.9794V7.69508C11.4527 7.6853 11.9341 8.15477 11.9341 8.99563C11.945 9.39102 11.8017 9.77517 11.5345 10.0668C11.3869 10.2154 11.1886 10.3027 10.9794 10.3115V10.7857H13.1274C13.1907 10.7857 13.2515 10.7606 13.2962 10.7158C13.341 10.671 13.3661 10.6103 13.3661 10.547V7.44423C13.3661 7.38093 13.341 7.32023 13.2962 7.27546C13.2515 7.2307 13.1907 7.20556 13.1274 7.20556ZM12.8888 9.35364C12.8888 9.41694 12.8636 9.47765 12.8189 9.52241C12.7741 9.56717 12.7134 9.59232 12.6501 9.59232C12.5868 9.59232 12.5261 9.56717 12.4813 9.52241C12.4366 9.47765 12.4114 9.41694 12.4114 9.35364V8.63761C12.4114 8.57431 12.4366 8.51361 12.4813 8.46885C12.5261 8.42408 12.5868 8.39894 12.6501 8.39894C12.7134 8.39894 12.7741 8.42408 12.8189 8.46885C12.8636 8.51361 12.8888 8.57431 12.8888 8.63761V9.35364Z"
                                    fill="#B3B3B3"
                                />
                                <path
                                    d="M5.13154 6.72823C7.96104 6.72823 10.2631 5.44343 10.2631 3.86411C10.2631 2.28479 7.96104 1 5.13154 1C2.30203 1 0 2.28479 0 3.86411C0 5.44343 2.30203 6.72823 5.13154 6.72823ZM5.13154 1.71603C7.20587 1.71603 8.83102 2.55474 8.83102 3.62544C8.83102 4.11401 8.48995 4.55317 7.92405 4.88756C7.90696 4.90056 7.88817 4.91116 7.8682 4.91906C7.02145 5.34891 6.08079 5.56057 5.13154 5.53485C4.1723 5.56206 3.22213 5.34534 2.36934 4.90522C2.35682 4.89946 2.34484 4.89259 2.33354 4.88469C1.77122 4.55078 1.43206 4.11258 1.43206 3.62544C1.43206 2.55474 3.0572 1.71603 5.13154 1.71603Z"
                                    fill="#B3B3B3"
                                />
                                <path
                                    d="M11.1987 9.72752C11.3742 9.52504 11.4663 9.26351 11.4565 8.99574C11.4565 8.48569 11.2087 8.16539 10.9791 8.16038C10.8541 8.16152 10.7338 8.11317 10.6443 8.02588C10.5549 7.93858 10.5036 7.81944 10.5017 7.69448V7.20567H5.13154C2.84287 7.20567 0.871168 6.38439 0 5.21082V7.9217C0 8.53319 0.358014 9.10195 0.954704 9.57024V8.63773C0.954704 8.57443 0.979851 8.51372 1.02461 8.46896C1.06937 8.4242 1.13008 8.39905 1.19338 8.39905C1.25668 8.39905 1.31739 8.4242 1.36215 8.46896C1.40691 8.51372 1.43206 8.57443 1.43206 8.63773V9.8946C1.66202 10.0276 1.90132 10.1437 2.14809 10.2421V9.83111C2.14809 9.76781 2.17323 9.7071 2.21799 9.66234C2.26275 9.61758 2.32346 9.59243 2.38676 9.59243C2.45006 9.59243 2.51077 9.61758 2.55553 9.66234C2.60029 9.7071 2.62544 9.76781 2.62544 9.83111V10.4151C2.85337 10.4868 3.0942 10.5469 3.34147 10.5992V9.59243C3.34147 9.52913 3.36661 9.46842 3.41137 9.42366C3.45613 9.3789 3.51684 9.35376 3.58014 9.35376C3.64344 9.35376 3.70415 9.3789 3.74891 9.42366C3.79367 9.46842 3.81882 9.52913 3.81882 9.59243V10.6849C4.1353 10.7319 4.4537 10.7612 4.77352 10.7736V10.3085C4.77352 10.2452 4.79867 10.1845 4.84343 10.1397C4.88819 10.0949 4.9489 10.0698 5.0122 10.0698C5.0755 10.0698 5.13621 10.0949 5.18097 10.1397C5.22573 10.1845 5.25087 10.2452 5.25087 10.3085V10.7837H6.20558V9.83111C6.20558 9.76781 6.23072 9.7071 6.27549 9.66234C6.32025 9.61758 6.38095 9.59243 6.44426 9.59243C6.50756 9.59243 6.56826 9.61758 6.61302 9.66234C6.65779 9.7071 6.68293 9.76781 6.68293 9.83111V10.7839H7.63764V10.3085C7.63764 10.2452 7.66278 10.1845 7.70754 10.1397C7.7523 10.0949 7.81301 10.0698 7.87631 10.0698C7.93961 10.0698 8.00032 10.0949 8.04508 10.1397C8.08984 10.1845 8.11499 10.2452 8.11499 10.3085V10.7844H9.06969V9.83111C9.06969 9.76781 9.09484 9.7071 9.1396 9.66234C9.18436 9.61758 9.24507 9.59243 9.30837 9.59243C9.37167 9.59243 9.43238 9.61758 9.47714 9.66234C9.5219 9.7071 9.54704 9.76781 9.54704 9.83111V10.7858H10.5017V10.2877C10.5015 10.2288 10.5131 10.1704 10.5357 10.1161C10.5583 10.0617 10.5916 10.0123 10.6335 9.97097C10.7275 9.88385 10.8507 9.83493 10.9791 9.83421C11.0638 9.83039 11.1433 9.79197 11.1987 9.72752ZM10.2631 6.72832V5.21082C9.67664 5.92289 8.89659 6.44994 8.01713 6.72832H10.2631Z"
                                    fill="#B3B3B3"
                                />
                            </svg>
                        </svg>
                        Таблица размеров
                    </span>
                </div>

                <div className="pop-ups">
                    {showSize && (
                        <div className="sizes_table">
                            {sizes ? <>
                                <p className="sizes_table_title">Размер</p>
                                <div className="sizes_list">
                                    {["S", "M", "L", "XL"].map((size, ind) => {

                                        const checkSize = () => {

                                            if (color == "White") {
                                                return sizes.witeShirt.includes(size)
                                            }
                                            else if (color == "Black") {
                                                return sizes.blackShirt.includes(size)
                                            }
                                            else {
                                                return (size == sizes.blackShirt || size == sizes.witeShirt)
                                            }
                                        }

                                        return (
                                            <button
                                                id={checkSize() ? "" : "disabled"}
                                                key={size}
                                                className={`choose ${selectedSize === size ? "active" : ""
                                                    }`}
                                                onClick={() => checkSize() ? SelectSize(size) : ""}
                                            >
                                                {size}
                                            </button>
                                        );
                                    })}
                                </div>

                                <div className="save">
                                    <button
                                        className="save_button"
                                        onClick={OpenSize}
                                        id={sizes ? "" : "disabled_bttn"}
                                    >
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.6823 3.95384L14.0462 1.3177C13.1957 0.46798 12.0655 0 10.864 0H7.13595C5.9345 0 4.8043 0.46798 3.95384 1.3177L1.3177 3.95384C0.467981 4.8043 0 5.9345 0 7.13595V10.864C0 12.0655 0.467981 13.1957 1.3177 14.0462L3.95384 16.6823C4.8043 17.532 5.9345 18 7.13595 18H10.864C12.0655 18 13.1957 17.532 14.0462 16.6823L16.6823 14.0462C17.532 13.1957 18 12.0655 18 10.864V7.13595C18 5.9345 17.532 4.8043 16.6823 3.95384ZM13.7499 7.37444L9.82609 11.2983C9.36636 11.758 8.75514 12.0115 8.10491 12.0115C7.45469 12.0115 6.84346 11.758 6.38373 11.2983L4.29357 9.20812C4.00033 8.91488 4.00033 8.4409 4.29357 8.14766C4.58681 7.85442 5.06079 7.85442 5.35403 8.14766L7.44419 10.2378C7.79743 10.5911 8.41315 10.5903 8.76564 10.2378L12.6895 6.31399C12.9827 6.02075 13.4567 6.02075 13.7499 6.31399C14.0432 6.60722 14.0432 7.08121 13.7499 7.37444Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </svg>
                                        Сохранить
                                    </button>
                                </div>
                            </> :
                                <><div className="no_sizes"><span >Нет в наличии</span></div></>}
                        </div>
                    )}

                    {showTablet && (
                        <div className="about_every_size_info">
                            <div className="about_every_size_titles">
                                <p className="about_every_size_title first_title">Размер</p>
                                <p className="about_every_size_title">Размер RUS</p>
                                <p className="about_every_size_title">Рост (см)</p>
                                <p className="about_every_size_title">Обхват Груди (см)</p>
                                <p className="about_every_size_title">Обхват Талии (см)</p>
                                <p className="about_every_size_title last_title">
                                    Обхват бедер (см)
                                </p>
                            </div>
                            <div className="column">
                                <div className="t1">
                                    <p className="one">S</p>
                                    <p className="two">M</p>
                                    <p className="three">L</p>
                                    <p className="four">XL</p>
                                </div>
                                <div className="t2">
                                    <p className="one">46</p>
                                    <p className="two ss2">48</p>
                                    <p className="three ss3">50</p>
                                    <p className="four ss4">52</p>
                                </div>

                                <div className="t2">
                                    <p className="one">176</p>
                                    <p className="two s2">180</p>
                                    <p className="three s3">182</p>
                                    <p className="four s4">184</p>
                                </div>

                                <div className="t2">
                                    <p className="one">92-95</p>
                                    <p className="two d2">96-99</p>
                                    <p className="three d3">100-103</p>
                                    <p className="four d4">104-107</p>
                                </div>

                                <div className="t2">
                                    <p className="one">78-81</p>
                                    <p className="two f2">82-85</p>
                                    <p className="three f3">86-89</p>
                                    <p className="four f4">90-93</p>
                                </div>

                                <div className="t1">
                                    <p className="one">96-99</p>
                                    <p className="two e2">100-103</p>
                                    <p className="three e3">104-107</p>
                                    <p className="four e4">108-111</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChooseSize;

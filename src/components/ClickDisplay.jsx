/* eslint-disable react/no-unescaped-entities */
import { Fade } from "react-awesome-reveal";

function ClickDisplay() {
    return (
        <div className="w-[500px] overflow-auto">
            <Fade direction="up">
                <div className="min-h-screen right-0 flex flex-col justify-end text-white bg-[url('./assets/bg-right2.jpg')] bg-cover bg-no-repeat bg-center">
                    <div className="flex justify-center bg-soft-brown2 relative rounded-t-lg">
                        <div className="text-center">
                            <div className="font-display_one">
                                <div className="text-2xl font-bold leading-tight mb-1">
                                    <h1> Dear Mr/Mrs/Ms </h1>
                                </div>
                                <div className="text-2xl font-bold">
                                    <h1> Family & Friends </h1>
                                </div>
                            </div>
                            <div className="mt-2 mb-10">
                                <p className="text-sm max-w-lg">
                                    We are pleased to announce and invite you to our wedding.
                                    We sincerely hope that you will be able to attend and pray directly on our wedding day.
                                    <br />
                                    Your presence will mean a lot to us
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            <div className="min-h-[90%] justify-center py-[42px] px-[32px] flex flex-col text-white bg-[url('./assets/wall-texture.jpg')]">
                <div className="flex justify-center bg-soft-brown2 rounded-t-2xl rounded-b-2xl">
                    <div className="text-center">
                        <div className="flex justify-center items-center">
                            <ImgCover />
                        </div>
                        <div className="flex justify-center items-center my-5">
                            <div className="w-[.5px] h-[3rem] bg-slate-50"></div>
                        </div>
                        <div>
                            <p className="text-xs italic">
                                "And of all things We created two mates [i.e., counterparts]; perhaps you will remember."
                                <p className="my-5 text-sm font-bold"> (Az-Zariyat 51:49) </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function ImgCover() {
    return (
        <img
            className="h-[300px] max-w-[90%] object-cover object-center rounded-b-xl rounded-t-full mt-6"
            src="/src/assets/bg-right3.jpg"
            alt="nature image"
        />
    );
}

export default ClickDisplay
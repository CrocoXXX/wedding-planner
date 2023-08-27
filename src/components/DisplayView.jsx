/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { IconBaselineDensityMedium, IconMailOpenedFilled, IconMusic, IconMusicOff } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import ClickDisplay from "./ClickDisplay";

export default function DisplayView() {
    const [isMusicPlaying, setIsMusicPlaying] = useState(false)
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const [isIconClicked, setIsIconClicked] = useState(false)
    const audio = new Audio('/musicTemplate.mp3')

    const playMusic = () => {
        setIsMusicPlaying(true)
        setIsButtonClicked(!isButtonClicked)
    }

    const handleClick = () => {
        if (isMusicPlaying) {
            audio.pause()
        } else {
            audio.play
        }

        setIsMusicPlaying(!isMusicPlaying)
        setIsIconClicked(!isIconClicked)
    }

    useEffect(() => {
        if (isMusicPlaying) {
            audio.play()
            audio.addEventListener('ended', () => {
                audio.currentTime = 0
                audio.play()
            })

            // return () => {
            // }
        } else {
            audio.pause()
            audio.currentTime = 0
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMusicPlaying])


    return (
        <div className="flex h-screen mx-auto relative justify-center">
            {/* Left Display View */}
            <div className="left-0 h-full w-[calc(100%-500px)] bg-[url('./assets/bg-right.jpg')] bg-cover bg-no-repeat text-soft-brown hidden lg:block">
                <div className='ml-[3rem] mt-[3rem]'>
                    <div className='uppercase text-lg font-light tracking-widest'>
                        <h1> The Wedding Of </h1>
                    </div>
                    <div className='font-display font-normal leading-4 text-7xl my-[64px] tracking-widest'>
                        <h1> Nailal & Via </h1>
                    </div>
                    <div className='max-w-xl italic tracking-wide font-normal text-lg'>
                        <p>
                            "And I knew exactly how old Walt Disney's Cinderella felt when she found her prince"
                            <br />
                            -- Elizabeth Young
                        </p>
                    </div>
                </div>
                {
                    isButtonClicked ? <div className="mt-[19rem] ml-[1rem] flex gap-1">
                        <button className='rounded-full bg-dark-brown hover:bg-black hover:opacity-80 text-white px-3 py-3'>
                            <IconBaselineDensityMedium size={11} strokeWidth={3} />
                        </button>
                        <button onClick={handleClick} className='rounded-full bg-dark-brown hover:bg-black hover:opacity-80 text-white px-3 py-3'>
                            {isIconClicked ? <IconMusicOff size={12} /> : <IconMusic size={12} />}
                        </button>
                    </div> : <div></div>
                }

            </div>

            {/* Right Display View */}
            {
                isButtonClicked ?
                    <ClickDisplay /> :
                    <div className="right-0 overflow-auto w-[500px] min-h-screen text-white bg-[url('./assets/bg-right.jpg')] bg-cover bg-no-repeat bg-center">
                        <div className='flex flex-col items-center text-center'>
                            <div className='mt-[5rem]'>
                                <div className='uppercase font-light text-base'>
                                    <h1> The Wedding Of </h1>
                                </div>
                                <div className='font-display font-bold text-4xl leading-[1.2em]'>
                                    <h1> Nailal & Via </h1>
                                </div>
                            </div>

                            <div className='mt-[20rem] '>
                                <Button onClick={playMusic}>
                                    <IconMailOpenedFilled />
                                    Open Invitation
                                </Button>
                            </div>

                            <div className='text-center mt-[6rem] mb-[2rem]'>
                                <div>
                                    <p> Created with 🤍 by Olen </p>
                                </div>
                                <div>
                                    <p> © 2023 Nailal & Via. All Rights Reserved </p>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div >
    )
}
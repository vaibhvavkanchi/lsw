import React from 'react'

function Home() {
    return (
        <div className=" pl-14 w-full  shadow-sm max-md:pl-5 max-md:max-w-full bg-gradient-to-r from-gray-900 to-cyan-900">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
                <div className="flex pb-14 flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex z-10 flex-col mt-40 max-md:mt-10 max-md:max-w-full">
                        <div className="self-start  text-5xl font-orbitron font-extrabold bg-clip-text max-md:max-w-full max-md:text-4xl bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
                            LIVE STREAMING WIRE
                        </div>
                        <div className="mt-6 text-5xl font-extrabold font-orbitron  text-white max-md:max-w-full max-md:text-4xl">
                            {" "}
                            Power your Stream
                        </div>
                        <div className="flex flex-col mt-16 max-md:mt-10 max-md:max-w-full">
                            <div className="text-4xl font-semibold max-md:max-w-full">
                                <span className="text-white">
                                    Tired of in-app purchases & limited tipping?
                                </span>
                                <br />
                                <span className="text-white">unleash the</span>{" "}
                                <span className="text-white">LSW</span>{" "}
                                <span className="text-white">revolution</span>
                            </div>
                            <div className="mt-10 text-3xl font-medium text-gray-400 max-md:max-w-full">
                                LSW aims to disrupt the traditional live streaming tipping model, empowering creators, and fostering a more vibrant community within the live streaming landscape.
                            </div>
                            <div className="flex gap-5 justify-between self-start mt-10 text-xl font-bold max-md:flex-wrap">
                                <div className="justify-center text-white px-7 py-2 rounded-xl shadow-sm bg-gray-900 max-md:px-6">
                                    BUY LSW
                                </div>
                                <div className="justify-center px-7 py-2 bg-indigo-500 rounded-xl shadow-sm max-md:px-5">
                                    WHITE PAPER
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col grow items-center px-16 pt-20 min-h-[734px] max-md:px-5 max-md:mt-3.5 max-md:max-w-full">
                        <img
                            loading="lazy"
                            srcSet="images/bg.png"
                            className=" absolute inset-0 size-full"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
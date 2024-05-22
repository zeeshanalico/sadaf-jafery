import React from 'react'
import Image from 'next/image'
import img from './../assets/banner1.jpg'
import david from '../assets/david.jpg'
import methew from '../assets/mathew.jpg'
import terrance from '../assets/terrance.jpg'

const Reviews = () => {
    return (
        <div><div className=" bg-gray-50 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    {/* <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
          Testimonials


        </h2> */}
    

                    <p className="text-gray-900 text-3xl font-bold tracking-tight sm:text-4xl">
                        Why Clients Love Us
                    </p>
                    <p className="text-gray-700 mt-2 text-lg leading-8">
                        Our clients rave about the accuracy and helpfulness of our astrology readings. See what they have to say!
                    </p>
                </div>
                <div className="lg:gap-x-8 mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div className="sm:gap-x-6 sm:space-y-0 flex gap-x-4 sm:flex-col">
                        <Image
                            src={methew}
                            alt="Client Photo"
                            className="sm:w-32 sm:h-32 w-16 h-16 rounded-full bg-gray-100"
                            width={120}
                            height={120}
                        />
                        <div className="text-sm leading-6">
                            <p className="text-gray-900 m-auto font-semibold">Methew</p>
                            <p className="text-gray-700 mt-2 text-sm leading-6">
                                “Professor Aamil Syeda Sadaf Jafri provided insightful guidance that has been life-changing. Highly recommended!”
                            </p>
                        </div>
                    </div>
                    <div className="sm:gap-x-6 sm:space-y-0 flex gap-x-4 sm:flex-col">
                        <Image
                            src={terrance}
                            alt="Client Photo"
                            className="sm:w-32 sm:h-32 w-16 h-16 rounded-full bg-gray-100"
                            width={120}
                            height={120}
                        />
                        <div className="text-sm leading-6">
                            <p className="text-gray-900 font-semibold">Terrance .C</p>
                            <p className="text-gray-700 mt-2 text-sm leading-6">
                                “Accurate readings and practical advice. The best astrological service I have experienced!”
                            </p>
                        </div>
                    </div>
                    <div className="sm:gap-x-6 sm:space-y-0 flex gap-x-4 sm:flex-col">
                        <Image
                            src={david}
                            alt="Client Photo"
                            className="sm:w-32 sm:h-32 w-16 h-16 rounded-full bg-gray-100"
                            width={120}
                            height={120}
                        />
                        <div className="text-sm leading-6">
                            <p className="text-gray-900 font-semibold">David</p>
                            <p className="text-gray-700 mt-2 text-sm leading-6">
                                “Amazing insights and very helpful guidance. I recommend their services to everyone.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Reviews
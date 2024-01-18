"use client";

import { useMemo } from "react";
import callIcon from '/public/call.svg';
import pinIcon from '/public/pin_drop.svg';
import mailIcon from '/public/mail.svg';
import ContactCard from "@/components/ContactCard";
import { IBM_Plex_Serif } from "next/font/google";
import PageWrapper from "@/components/PageWrapper";
const ibmPlex = IBM_Plex_Serif({ subsets: ['latin'], weight: ['400', '600'] });
const ContactPage = () => {
    const data = useMemo(() => ([
        {
            icon: callIcon,
            title: 'BY PHONE',
            subtitle: '+91 9994058168',
            href: 'tel:+919994058168'
        },
        {
            icon: pinIcon,
            title: 'FIND US',
            subtitle: 'National Institute of Technology Calicut, Kerala 673601',
            href: 'https://www.google.com/maps/place/NIT+Calicut+Campus/@11.3194893,75.9308541,17z/data=!4m10!1m2!2m1!1sNITC+!3m6!1s0x3ba6431c4324d82f:0x491730b975583623!8m2!3d11.3195427!4d75.9319419!15sCgROSVRDWgYiBG5pdGOSAQNpdXSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTXRkQzB5WjBwbkVBReABAA!16s%2Fg%2F11c5t4w2w_?entry=ttu'
        },
        {
            icon: mailIcon,
            title: 'BY EMAIL',
            subtitle: 'contactus@nitc.ac.in',
            href: 'mailto:contactus@nitc.ac.in'
        }
    ]), [])

    return (
        <PageWrapper dir={true}>
            <div className="h-full min-h-screen flex flex-col items-center justify-center pt-36 p-4 xl:p-36 gap-4">
                <span className={`${ibmPlex.className} text-[3rem] font-semibold leading-normal xl:self-start`}> Contact us </span>
                <div className="flex flex-col xl:flex-row gap-4 xl:gap-0 items-center justify-between w-full h-full">
                    {
                        data.map((item, index) => (
                            <ContactCard
                                key={index}
                                {...item}
                            />
                        ))
                    }
                </div>
            </div>
        </PageWrapper>
    );
}

export default ContactPage;
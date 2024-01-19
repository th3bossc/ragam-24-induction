import Image from "next/image";
import aboutImage from '/public/aboutImage.svg';
import { IBM_Plex_Serif } from "next/font/google";
import AnimatedTitle from "../AnimatedTitle";
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ['latin'], weight: ['600'] });
const About = () => {
    return (
        <div className="flex w-full h-full min-h-svh justify-center xl:justify-between items-center p-4 xl:p-24 relative">
            <Image className="absolute -top-36 -left-36 xl:static -z-10 opacity-50 xl:opacity-100" src={aboutImage} alt="about-image" />
            <div className="flex flex-col gap-[1.5rem] ml-auto w-full xl:w-[45.8125rem] text-center xl:text-left">
                <AnimatedTitle className={`text-3xl xl:text-4xl font-semibold ${ibmPlexSerif.className}`} text="About us" />
                <span className="mt-[1rem] text-md xl:text-[1.125rem] leading-[1.875rem] font-normal">The quick brown fox jumped over the lazy dog. Meanwhile, a gentle breeze rustled the leaves on the trees, creating a soothing melody. Birds chirped in the distance, adding to the natural symphony of the surroundings. As the sun began to set, casting warm hues across the horizon, the world seemed to embrace a sense of tranquility.</span>
                <span className="text-md xl:text-[1.125rem] leading-[1.875rem] font-normal">As the sun began to set, casting warm hues across the horizon, the world seemed to embrace a sense of tranquility. In this serene moment, one could appreciate the beauty of nature and the simplicity of life.</span>
            </div>
        </div>
    )
}

export default About;
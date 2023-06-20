import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import profile from '../assets/profile.png';
import cv from '../assets/CV_Ivan_Panussis.pdf';

export const Home = () => {

    return(
        <div 
            id="home"
            className="pt-12 px-10 h-screen bg-slate-200 dark:bg-gray-800 dark:text-white"
        >
            <div
                className="h-full flex flex-col justify-center items-center"
            >
                <div className="text-center">
                    <p>As a <span className="text-xl text-green-500 dark:text-sky-500 font-semibold">Full Stack Developer</span></p>
                    <p className="text-sm">I am looking to provide <span className="text-green-500 dark:text-sky-500 font-bold">value</span> and <span className="text-green-500 dark:text-sky-500 font-bold">innovation</span></p>
                    <p className="text-sm">To your &#60;bussiness &#47;&#62;</p>
                </div>
                <div
                    className="h-60 w-60 flex justify-center items-center bg-[url('src/assets/bg_profile_light.svg')] dark:bg-[url('src/assets/bg_profile_dark.svg')] bg-cover bg-center" 
                >
                    <img src={ profile } alt="Profile picture of Ivan Panussis" width={127} className='mb-4 mr-2 rounded-full'/>
                </div>
                <div>
                    <h1 className="text-3xl text-green-500 dark:text-sky-500 font-semibold">Ivan Panussis</h1>
                    <p className='text-xs text-center dark:text-white'>💻 <span className='italic'>Computer Engineer</span> 💻</p>
                </div>
                <div className="mt-5">
                    <a
                        href={cv}
                        download="CV_Ivan_Panussis"
                        target='_blank'
                    >
                        <button
                            className="bg-green-500 dark:bg-sky-500 p-2 rounded-lg"
                        ><FontAwesomeIcon icon={ faDownload }/> Download CV</button>
                    </a>
                </div>
                <div className='divider mt-5'></div>
                <div className='w-1/2 flex justify-around'>
                    <div className='bg-slate-200 dark:bg-slate-300 p-2 border-2 border-slate-300 rounded-full mt-2'>
                        <a href='https://github.com/IAPC1994' target='_blank'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width={20}/>
                        </a>
                    </div>
                    <div className='dark:bg-slate-300 p-2 border-2 border-slate-300 rounded-full mt-2'>
                        <a href="https://www.linkedin.com/in/ivan-alejandro-panussis-conejeros/?locale=en_US" target='_blank'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
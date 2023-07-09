import Image from 'next/image';
import logo from './images/blg.png';
import Head from 'next/head';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;

export default function Home() {
  return (
    <>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Source+Code+Pro&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
    </Head>

    <header className="flex bg-gray-950 justify-between">
      <div className="flex items-center py-3">
        <ul className="text-sec text-lg font-sharemono px-5">
          <li className="inline m-6"><Image className="inline hover:cursor-pointer" src={logo} height={130} width={130} alt="logo"></Image></li>
          <li className="inline m-6 hover:cursor-pointer"><a>LEADERBOARDS</a></li>
          <li className="inline m-6 hover:cursor-pointer">PRO PLAY</li>
          <li className="inline m-6 hover:cursor-pointer">PROFILE</li>
        </ul>
      </div>
      <div className="flex items-center px-14">
        <ul className=" text-sec text-lg font-sharemono">
          <li className="inline m-12 px-1 p-2 hover:text-left hover:cursor-pointer transition ease-in-out hover:bg-sec  hover:text-black duration-300"><a>Select Game<FontAwesomeIcon className="px-2" icon={faCaretDown} style={{fontSize: 16, color: "grey"}}/></a></li>
          <li className="inline m-1 px-4 p-2 text-prim  bg-white border border-solid rounded-md border-white hover:cursor-pointer transition ease-in-out hover:bg-gray-950  hover:text-white duration-300"><a href="#">SIGN IN</a></li>
          <li className="inline m-1 px-4 p-2 border border-solid rounded-md border-sec hover:cursor-pointer transition ease-in-out hover:bg-sec  hover:text-black duration-300"><a href="#">SIGN UP</a></li>
        </ul>
      </div>
    </header>
    <div className="">
    </div>
    </>
  )
}

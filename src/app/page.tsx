import Image from 'next/image';
import logo from './images/logo.png';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
      
    </Head>
    <header className="flex bg-prim justify-between">
      <div className="flex items-center py-3">
        <ul className="text-sec text-lg font-medium">
          <li className="inline"><Image className="inline hover:cursor-pointer" src={logo} height={170} width={170} alt="logo"></Image></li>
          <li className="inline px-10 hover:cursor-pointer">LEADERBOARDS</li>
          <li className="inline px-10 hover:cursor-pointer">PRO PLAY</li>
          <li className="inline px-10 hover:cursor-pointer">PROFILE</li>
        </ul>
      </div>
      <div className="flex items-center">
        <ul className="text-sec text-lg font-bold px-4">
          <li><a href="#" className="inline px-4 p-2 border border-solid border-sec hover:cursor-pointer">Login</a></li>
        </ul>
      </div>
    </header>
    <div className="">
    </div>
    </>
  )
}

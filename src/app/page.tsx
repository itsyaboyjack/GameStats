import Image from 'next/image';
import logo from './images/logo.png';

export default function Home() {
  return (
    <>
    <header className="flex bg-prim justify-between">
      <div className="flex items-center">
        <ul className="text-sec">
          <li className="inline hover:cursor-pointer"><Image className="inline hover:cursor-pointer" src={logo} height={170} width={170} alt="logo"></Image></li>
          <li className="inline hover:cursor-pointer p-5">LeaderBoards</li>
          <li className="inline hover:cursor-pointer p-5">Pro play</li>
          <li className="inline hover:cursor-pointer p-5">Profile</li>
        </ul>
      </div>
      <div className="flex items-center">
        <ul className="text-black font-medium p-8">
          <li><a href="#" className="inline hover:cursor-pointer p-3 border border-solid rounded-full border-purple-500">Login</a></li>
        </ul>
      </div>
    </header>
    <div className="h-full bg-prim">
      <h1>Hello</h1>
    </div>
    </>
  )
}

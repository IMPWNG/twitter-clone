import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Modal from '../components/Modal';
import Widgets from '../components/Widgets';
import Login from '../components/Login';
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { useMoralis } from "react-moralis";



export default function Home({ trendingResults, followResults, providers }) {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) {
    return (
      <Login />
    );  
  }

  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar/>
        <Feed />
        <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />
        {isOpen && <Modal/> }
      </main>
    </div>
  )
}

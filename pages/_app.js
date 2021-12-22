import { MoralisProvider } from 'react-moralis'
import { RecoilRoot } from 'recoil';

import '../styles/globals.css';


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <MoralisProvider appId={process.env.NEXT_PUBLIC_MORALIS_NFTMARKETPLACE_APP_ID} serverUrl={process.env.NEXT_PUBLIC_MORALIS_NFTMARKETPLACE_SERVER_URL}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </MoralisProvider>
  );
}

import Head from 'next/head';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useNProgress } from 'src/hooks/use-nprogress';
import { createTheme } from 'src/theme';
import 'simplebar-react/dist/simplebar.min.css';
import { Layout } from '../layouts/dashboard/layout';
import { useRouter } from 'next/router';


const App = (props) => {
  const { Component, pageProps } = props;
  useNProgress();

  const router = useRouter();

  const theme = createTheme();
  if(router.pathname === '/404') return <Component {...pageProps} />;
  if(router.pathname === '/') return <Component {...pageProps} />;
  if (router.pathname === '/register') return <Component {...pageProps} />;
  return (
    <div >
      <Head>
        <title>
          Dashboard
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>

          <ThemeProvider theme={theme}>
            <CssBaseline />
           <Layout>
             <Component {...pageProps} />
           </Layout>
          </ThemeProvider>
    </div>
  );
};

export default App;

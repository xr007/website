import Footer from '../../components/shared/footer'
import Header from '../../components/shared/header'
import CTA from '../../components/shared/cta'
import Hexagon from '../../components/ui/hexagon'
import CLI from '../../components/shared/cli'
import Head from '../../components/ui/head'
import Button from '../../components/ui/button'
import Page from '../../components/ui/page'
import Features from './sections/features'
import Sockets from './sections/sockets'
import FAQ from './sections/faq'

const Landing = () => (
  <Page>
    <Head>
      <title>Syncano</title>
    </Head>

    <Header theme='dark'>
      <div className='CTA'>
        <h1 className='Title'>Software development on steroids</h1>
        <h2 className='Subtitle'>Deploy your API in 60 seconds.</h2>

        <Button primary>Sign up now</Button>
        <div className='Separator' data-after='or' />

        <a href=''>Download the CLI</a>

        <div className='CLI'>
          <div className='CLI__inner'>
            <CLI />
            <div className='HiddenAtSm'>
              <Hexagon width={32} fill='#7C51CD' position={{top: '-13px', right: '120px'}} />
              <Hexagon width={54} fill='#197eee' position={{top: '25%', right: '-27px'}} />
              <Hexagon width={64} fill='#05b470' position={{bottom: '-18px', right: '35px'}} />
              <Hexagon width={32} fill='#60e0ae' position={{bottom: '-22px', right: '-17px'}} />
              <Hexagon width={64} fill='#60e0ae' position={{bottom: '-40px', left: '10%'}} />
              <Hexagon width={42} fill='#05a5b4' position={{bottom: '10%', left: '-21px'}} />
            </div>
            <div className='HiddenAtMd'>
              <Hexagon width={22} fill='#3cdd9e' position={{bottom: '-45px', left: '22%'}} />
              <Hexagon width={40} fill='#60e0ae' position={{bottom: '-70px', right: '30%'}} />
            </div>
          </div>
        </div>
      </div>
    </Header>

    <Features />
    <Sockets />
    <FAQ />
    <CTA />
    <Footer />

    <style jsx>{`
      /* = CTA
       * ==================================================================== */
      .CTA {
        text-align: center;
        margin-top: 30px;
      }

      .CTA a {
        color: #fff;
        font-weight: 500;
        text-decoration: none;
      }

      .CTA a:hover {
        text-decoration: underline;
      }

      .Title {
        max-width: 300px;
        margin-left: auto;
        margin-right: auto;
      }

      .Subtitle {
        font-size: 24px;
        font-weight: 300;
        margin-top: 15px;
        margin-bottom: 30px;
        color: rgba(255,255,255, .5);
      }

      @media screen and (min-width: 980px) {
        .CTA {
          margin-top: 90px;
        }

        .Title {
          font-size: 48px;
          line-height: 56px;
        }
      }

      /* = SEPARATOR
       * ==================================================================== */
      .Separator {
        width: 2px;
        height: 24px;
        opacity: 0.25;
        border: dashed 1px #ffffff;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        margin-bottom: 30px;
        margin-top: 20px;
      }

      .Separator::after {
        content: attr(data-after);
        color: rgba(255,255,255,.75);
        font-weight: 300;
        position: absolute;
        top: 100%;
        margin-top: 5px;
        transform: translateX(-50%);
      }

      /* = CLI
       * ==================================================================== */
      .CLI {
        display: flex;
        justify-content: center;
        margin-top: 40px;
        padding-bottom: 30px;
      }

      .CLI__inner {
        position: relative;
        width: 100%;
        min-height: 398px;
        max-width: 640px;
      }

      @media screen and (min-width: 560px) {
        .CLI :global(>) :global(*) {
          margin-bottom: -80px;
        }
      }

      @media screen and (max-width: 560px) {
        .HiddenAtSm {
          display: none;
        }
      }

      @media screen and (max-width: 960px) {
        .HiddenAtMd {
          display: none;
        }
      }
    `}</style>
  </Page>
)

export default Landing

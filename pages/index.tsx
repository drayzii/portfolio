import Head from 'next/head';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

import SocialIcon from '../components/SocialIcon';

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Jonathan Shyaka</title>
      </Head>
      <div className="">
        <div
          className="bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-background.png')" }}
        >
          <div className="navbar flex justify-between items-center w-screen h-[7vh] px-10 pt-3">
            <div className="logo basis-9/12 font-[Satisfy] font-[400] text-[40px]">Shyaka</div>
            <div className="flex justify-between items-center text-[20px] font-[500]">
              {/* <div className="cursor-pointer">Work</div>
              <div className="cursor-pointer">Projects</div> */}
              <div className="cursor-pointer px-2 py-2 border border-solid border-black rounded-[5px] mr-10">
                <span className="h-[28px] flex items-center">Resume</span>
              </div>
              <div className="flex p-1 bg-gray-light rounded">
                <div className="cursor-pointer bg-blue-light w-[30px] h-[30px] flex items-center justify-center m-1 rounded">
                  <FontAwesomeIcon icon={faSun} className="text-black" />
                </div>
                <div className="cursor-pointer w-[30px] h-[30px] flex items-center justify-center m-1 rounded">
                  <FontAwesomeIcon icon={faMoon} className="text-black" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[93vh] flex items-center">
            <div className="basis-1/2 px-[5%]">
              <div className="flex">
                <Image 
                  src="/images/shades.svg"
                  alt="" 
                  width={0}
                  height={0}
                  style={{ width: '30px', height: 'auto' }} // optional
                />
                <div className="ml-[29px]">
                  <p className="text-[60px] text-black font-[700] leading-tight">
                    Hi,
                  </p>
                  <p
                    className="text-[32px] text-black font-[700] mt-[25px] leading-tight bg-no-repeat"
                    style={{ backgroundImage: "url('/images/brush-bg.svg')", backgroundPosition: '20px center' }}
                  >
                    I’m Jonathan Shyaka
                  </p>
                  <p className="text-[32px] text-orange font-[700] mt-[10px] leading-tight">
                    I build Web applications
                  </p>
                  <p className="text-[24px] text-gray font-[400] mt-[25px] leading-tight">
                    I’m a software engineer specializing in building and occasionally desining.
                    I’m a software engineer specializing in building. I’m building and occasionally desining.
                  </p>
                </div>
              </div>
              <div className="ml-[45px] mt-[15px]">
                <button className="bg-orange text-white py-[11px] px-[20px] rounded text-[24px] font-[500] leading-tight">
                  Recent work
                </button>
                <div className="mt-[45px] flex">
                  <SocialIcon icon={faLinkedin} />
                  <SocialIcon icon={faTwitter} />
                  <SocialIcon icon={faGithub} />
                </div>
              </div>
            </div>
            <div className="basis-1/2 flex h-full">
              <div className="basis-1/2 mt-[10vh]">
                <Image src="/images/hero.png" alt="" width="400" height="400" />
              </div>
              <div className="mt-auto flex-1 flex flex-col items-center">
                <div className="transform rotate-[270deg] origin-center -translate-y-20 -translate-x-1 font-[500] text-[22px]">
                  hello@shyaka.dev
                </div>
                <div className="bg-gradient-to-b from-[#000] to-[#fff] h-[50vh] w-[5px]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center my-20">
          <h2>Tools I’ve worked with so far</h2>
          <div className="cards flex my-10 bg-gray-100">
            <div className="card bg-gray-300 mx-5">
              <div className="image">
                image here
              </div>
              <h3 className="title">Backend</h3>
              <div className="description">
                I’m a software engineer specializing in.
              </div>
              <div className="tags">
                <span className="tag"></span>
              </div>
            </div>
            <div className="card bg-gray-300 mx-5">
              <div className="image">
                image here
              </div>
              <h3 className="title">Backend</h3>
              <div className="description">
                I’m a software engineer specializing in.
              </div>
              <div className="tags">
                <span className="tag"></span>
              </div>
            </div>
            <div className="card bg-gray-300 mx-5">
              <div className="image">
                image here
              </div>
              <h3 className="title">Backend</h3>
              <div className="description">
                I’m a software engineer specializing in.
              </div>
              <div className="tags">
                <span className="tag"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="work flex flex-col items-center my-20">
          <h2>Recent Work</h2>
          <div className="flex">
            <div>
              <h3>Recent Work</h3>
              <div className="flex">
                <div>
                  <p>I’m a software engineer specializing in building and occasionally desining</p>
                  <button>Recent work</button>
                </div>
                <div>
                  pic here
                </div>
              </div>
            </div>
            <div>
              <h3>Recent Work</h3>
              <div className="flex">
                <div>
                  <p>I’m a software engineer specializing in building and occasionally desining</p>
                  <button>Recent work</button>
                </div>
                <div>
                  pic here
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="flex justify-between">
            <div>
              <p>hey@shyaka.dev</p>
              <div>
                <span>Work with me</span>
                <span className="ml-3">logo</span>
              </div>
            </div>
            <div>
              <p>Currently Playing</p>
              <div className="flex items-center">
                <span>S</span>
                <div className="flex flex-col">
                  <span>Title - Artist</span>
                  <div>
                    <span>o</span>
                    <span>Album</span>
                  </div>
                </div>
                <span>bars</span>
              </div>
            </div>
          </div>
          <div className="h-[2px] bg-gray-800 mx-3" />
          <div className="my-2 flex justify-between">
            <span>copyright</span>
            <div>Logos</div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Homepage;

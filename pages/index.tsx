import Head from 'next/head';
import Image from 'next/image';

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
          <div className="navbar flex justify-between items-center w-screen h-[7vh] px-10 pt-4">
            <div className="logo basis-9/12 font-[Satisfy] font-[400] text-[40px]">Shyaka</div>
            <div className="flex basis-3/12 justify-between text-[20px] font-[500]">
              <div className="">Work</div>
              <div className="">Projects</div>
              <div className="">Resume</div>
              <div className="theme">
                <input type="checkbox" name="" id="" />
              </div>
            </div>
          </div>
          <div className="h-[93vh] flex items-center">
            <div className="basis-1/2">
              <p>Hi,</p>
              <p>I’m Shyaka Jonathan</p>
              <p>I build Web applications</p>
              <p>I’m a software engineer specializing in building and occasionally desining. I’m a software engineer specializing in building. I’m building and occasionally desining.</p>
              <button>Recent work</button>
              <div className="socials">
                <span>a</span>
                <span>a</span>
                <span>a</span>
                <span>a</span>
                <span>a</span>
              </div>
            </div>
            <div className="basis-1/2 flex h-full">
              <div className="basis-1/2 mt-[5vh]">
                <Image src="/images/hero.png" alt="" width="400" height="400" />
              </div>
              <div className="mt-auto flex-1 flex flex-col items-center">
                <div className="email transform rotate-[270deg] origin-center -translate-y-20">hello@shyaka.dev</div>
                <div className="line bg-gradient-to-b from-[#000] to-[#fff] h-[50vh] w-[5px]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="skillset flex flex-col items-center my-20">
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

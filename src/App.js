
import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function App() {

  // const squareRef = useRef();
  // const div2Ref = useRef();

  // function vhToPixels(vh) {
  //   return Math.round(window.innerHeight / (100 / vh)) + 'px';
  // }

  // useEffect(() => {
  //   gsap.to(div2Ref.current, {
  //     // x: 700,
  //     duration: 3,
  //     scrollTrigger: {
  //       trigger: squareRef.current,
  //       start: "top 0%",
  //       end: vhToPixels(400),
  //       scrub: true,
  //       toggleActions: "play none none none",
  //       pin: true,
  //       // pinSpacing: true,
  //       markers: true,
  //       // toggleClass: "background-color"

  //     },
  //   });
  // }, [])


  const display_data = [
    {
      cover_name: "hello aiman",
      details: {
        title: "hello there"
      }
    },
    {
      cover_name: "hello aiman",
      details: {
        title: "hello now"
      }
    },
  ]


  return (
    <div className='h-[100vh] bg-gray-100'>
      <div className="flex">
        {/* sidebar */}
        <div className='p-2 max-w-[600px] xl min-w-[300px] h-screen bg-green-400'>
          <div>{display_data[0]?.cover_name}</div>
        </div>
        {/* right panel */}
        <div className='w-[100vw] flex-grow h-screen overflow-y-auto'>
          <div className='h-[100vh] bg-pink-400'>
            {display_data[0]?.details?.title}
          </div>
          <div className='h-[100vh] bg-blue-400'>
            {display_data[1]?.details?.title}
          </div>
        </div>
      </div>
    </div>
































    // <div className="App" style={{
    //   margin: 0
    // }}
    // >
    //   <div className="div2"
    //     ref={div2Ref}
    //     style={{
    //       height: "100vh",
    //       "background-color": "salmon"
    //     }}
    //   >
    //     <div className="square"
    //       ref={squareRef}
    //       style={{
    //         width: "150px",
    //         height: "100vh",
    //         "background-color": "fuchsia"
    //       }}
    //     ></div>
    //   </div>
    //   <div className="div1" style={{
    //     height: "100vh",
    //     "background-color": "pink"
    //   }}
    //   ></div>
    //   <div className="div1" style={{
    //     height: "100vh",
    //     "background-color": "green"
    //   }}
    //   ></div>
    //   <div className="div1" style={{
    //     height: "100vh",
    //     "background-color": "blue"
    //   }}
    //   ></div>
    //   <div className="div1" style={{
    //     height: "100vh",
    //     "background-color": "red"
    //   }}
    //   ></div>
    // </div>
  );
}

export default App;

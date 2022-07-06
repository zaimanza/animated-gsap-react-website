
import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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

  const homeMainRef = useRef();
  const item1Ref = useRef();
  const item2Ref = useRef();

  useEffect(() => {

  }, [])


  return (
    <div className="h-[100vh] bg-gray-100">
      <div className='fixed'>
        <div className='hidden sm:block p-2 max-w-[600px] xl min-w-[300px] h-screen bg-green-400'>
          <div
            ref={item1Ref}
            onClick={() => {
              console.log("item1 clicked")
              gsap.to(window, {
                duration: 2,
                scrollTo: {
                  y: "#display_data_1"
                }
              })
            }}
          >Go to item 1</div>
          <div
            ref={item2Ref}
            onClick={() => {
              console.log("item2 clicked")
              gsap.to(window, {
                duration: 2,
                scrollTo: {
                  y: "#display_data_2"
                }
              })
            }}
          >Go to item 2</div>
          <div>{display_data[0]?.cover_name}</div>
        </div>
      </div>
      <div className='flex'>
        <div className='hidden sm:block p-2 max-w-[600px] xl min-w-[300px] h-screen bg-green-400'>    </div>
        <div class=" w-[100vw] flex-grow">
          <div
            id='display_data_1'
            className='h-[100vh] bg-pink-400'>
            {display_data[0]?.details?.title}
          </div>
          <div
            id='display_data_2'
            className='h-[100vh] bg-blue-400'>
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

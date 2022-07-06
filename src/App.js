
import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {

  // function vhToPixels(vh) {
  //   return Math.round(window.innerHeight / (100 / vh)) + 'px';
  // }

  const display_data = [
    {
      cover_name: "title 1",
      details: {
        title: "hello 1"
      }
    },
    {
      cover_name: "title 2",
      details: {
        title: "hello 2"
      }
    },
    {
      cover_name: "title 3",
      details: {
        title: "hello 3"
      }
    },
  ]

  const rightScreenRef = useRef();
  const displayData1Ref = useRef();
  const displayData2Ref = useRef();
  const displayData3Ref = useRef();
  const item1Ref = useRef();
  const item2Ref = useRef();
  const item3Ref = useRef();
  const run_uno = useRef(false);

  const currentDisplayIndexRef = useRef(0);
  const [getCurrentDisplayIndex, setCurrentDisplayIndex] = useState(0)

  const handleIndex = async (state, index) => {
    var current_index = currentDisplayIndexRef.current
    switch (state) {
      case 1:
        if (index > (display_data.length - display_data.length)) {
          if (current_index < display_data.length) {
            current_index = current_index + 1
            setCurrentDisplayIndex(current_index)
          }
        }
        break;
      case 0:
      default:
        if (index < (display_data.length)) {
          if (current_index > 0) {
            current_index = current_index - 1
            setCurrentDisplayIndex(current_index)
          } else if (current_index <= 0) {
            setCurrentDisplayIndex(0)
          }
        }
        break;

    }
  }
  useEffect(() => {
    currentDisplayIndexRef.current = getCurrentDisplayIndex
  }, [getCurrentDisplayIndex]);

  useEffect(() => {
    if (run_uno.current === false) {
      run_uno.current = true

      gsap.to(displayData1Ref.current, {
        // x: 700,
        duration: 1,
        scrollTrigger: {
          trigger: displayData1Ref.current,
          start: "top 50%",
          // end: vhToPixels(100),
          scrub: true,
          toggleActions: "play none none none",
          markers: true,
          onEnter: () => {
            handleIndex(1, 0)
          },
          onLeaveBack: () => {
            handleIndex(0, 0)
          }
        },
      });
      gsap.to(displayData2Ref.current, {
        // x: 700,
        duration: 1,
        scrollTrigger: {
          trigger: displayData2Ref.current,
          start: "top 50%",
          // end: vhToPixels(100),
          scrub: true,
          toggleActions: "play none none none",
          markers: true,
          onEnter: () => {
            handleIndex(1, 1)
          },
          onLeaveBack: () => {
            handleIndex(0, 1)
          }
        },
      });
      gsap.to(displayData3Ref.current, {
        // x: 700,
        duration: 1,
        scrollTrigger: {
          trigger: displayData3Ref.current,
          start: "top 50%",
          // end: vhToPixels(100),
          scrub: true,
          toggleActions: "play none none none",
          markers: true,
          onEnter: () => {
            handleIndex(1, 2)
          },
          onLeaveBack: () => {
            handleIndex(0, 2)
          }
        },
      });
    }

    return () => {
      gsap.killTweensOf(displayData1Ref);
      gsap.killTweensOf(displayData2Ref);
      gsap.killTweensOf(displayData3Ref);
    };
  }, [])


  return (
    <div className="h-[100vh] bg-gray-100">
      <div className='fixed'>
        <div className='hidden sm:block p-2 max-w-[600px] xl min-w-[300px] h-screen bg-green-400'>
          <div
            ref={item1Ref}
            onClick={() => {
              // console.log("item1 clicked")
              gsap.to(window, {
                duration: 1,
                scrollTo: {
                  y: "#display_data_1"
                }
              })
            }}
          >Go to item 1</div>
          <div
            ref={item2Ref}
            onClick={() => {
              // console.log("item2 clicked")
              gsap.to(window, {
                duration: 1,
                scrollTo: {
                  y: "#display_data_2"
                }
              })
            }}
          >Go to item 2</div>
          <div
            ref={item3Ref}
            onClick={() => {
              // console.log("item3 clicked")
              gsap.to(window, {
                duration: 1,
                scrollTo: {
                  y: "#display_data_3"
                }
              })
            }}
          >Go to item 3</div>
          <div>{display_data[getCurrentDisplayIndex]?.cover_name}</div>
        </div>
      </div>
      <div className='flex'>
        <div className='hidden sm:block p-2 max-w-[600px] xl min-w-[300px] h-screen bg-green-400'>    </div>
        <div
          ref={rightScreenRef}
          className=" w-[100vw] flex-grow">
          <div
            ref={displayData1Ref}
            id='display_data_1'
            className='h-[100vh] bg-pink-400'>
            {display_data[0]?.details?.title}
          </div>
          <div
            ref={displayData2Ref}
            id='display_data_2'
            className='h-[100vh] bg-blue-400'>
            {display_data[1]?.details?.title}
          </div>
          <div
            ref={displayData3Ref}
            id='display_data_3'
            className='h-[100vh] bg-yellow-400'>
            {display_data[2]?.details?.title}
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

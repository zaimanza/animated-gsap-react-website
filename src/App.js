
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

  const displayData1Ref = useRef()
  const run_uno = useRef(false);

  const currentDisplayIndexRef = useRef(0);
  const [getCurrentDisplayIndex, setCurrentDisplayIndex] = useState(0)

  const rightSideRefs = useRef([]);
  const [getRightSiderefs, setRightSiderefs] = useState([])

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

  const addRightSideRef = (el) => {
    if (el && !rightSideRefs.current.includes(el)) {
      rightSideRefs.current.push(el);
    }
    setRightSiderefs(rightSideRefs.current)
  }

  useEffect(() => {
    currentDisplayIndexRef.current = getCurrentDisplayIndex
  }, [getCurrentDisplayIndex]);

  useEffect(() => {
    if (getRightSiderefs.length === display_data.length) {
      if (run_uno.current === false) {
        getRightSiderefs.forEach((currentValue, index) => {
          gsap.to(currentValue, {
            // x: 700,
            duration: 1,
            scrollTrigger: {
              trigger: currentValue,
              start: "top 50%",
              // end: vhToPixels(100),
              scrub: true,
              toggleActions: "play none none none",
              // markers: true,
              onEnter: () => {
                handleIndex(1, index)
              },
              onLeaveBack: () => {
                handleIndex(0, index)
              }
            },
          });
        })
      }
    }

    return () => {
      gsap.killTweensOf(displayData1Ref);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getRightSiderefs])

  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="flex w-full items-start">
        <div className='sticky top-0'>
          <div className='hidden sm:block p-2 max-w-[600px] xl min-w-[300px] h-screen bg-green-400'>
            {
              display_data.map((currentValue, index) => {
                return (
                  <div
                    key={index}>
                    <div
                      onClick={() => {
                        gsap.to(window, {
                          duration: 1,
                          scrollTo: {
                            y: `#display_data_${index + 1}`
                          }
                        })
                      }}
                    >Go to item {index + 1}</div>
                  </div>
                )
              })
            }
            <div>{display_data[getCurrentDisplayIndex]?.cover_name}</div>
          </div>
        </div>
        <div className="w-full">
          {
            display_data.map((currentValue, index) => {
              return (
                <div
                  key={index}
                  ref={addRightSideRef}
                  id={`display_data_${index + 1}`}
                  className='h-[100vh] bg-pink-400'>
                  {display_data[index]?.details?.title}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;

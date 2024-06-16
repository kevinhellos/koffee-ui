import { useState } from "react";

const Accordion = () => {

    const accordionItem = [
        {
            id: 1,
            title: "Section 1",
            content: "Section 1 is Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, eius!"
        },
        {
            id: 2,
            title: "Section 2",
            content: "Section 2 is Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, eius!"
        }
    ];

    const [activeItem, setActiveItem] = useState<number>(0);

    return (
      <>
        <div className="component-preview-card text-center">
          <div className="component-preview-card-title">Accordion</div>
            <span
                style={{ marginTop: 10 }}
                className="block chip chip-default mx-auto"
            >
                Requires Javascript
            </span>
          <div style={{ marginTop: 10 }}>

            {accordionItem.map((item, index) => (
                <div key={index}>
                    <button 
                        onClick={() => {
                            if ( activeItem === index + 1) {
                                setActiveItem(0);
                            }
                            else {
                                setActiveItem(index + 1);
                            }
                        }}
                        className={`accordion ${activeItem === index + 1 ? "accordion-active" : ""}`}
                    >
                        {item.title}
                    </button>
                    <div 
                        className="accordion-item"
                        style={{
                            display: activeItem === index + 1 ? "block" : "none"
                        }}
                    >
                        <p>{item.content}</p>
                    </div>
                </div>
            ))}

          </div>
        </div>
  
      </>
    );
  };
  
  export default Accordion;
  
import { useState } from "react";

const Tab = () => {

  const [selectedTab, setSelectedTab] = useState<number>(1);

  const tabItems = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
  ]

  return (
    <div className="component-preview-card text-center">
      <div className="component-preview-card-title">Tab</div>
    <span
        style={{ marginTop: 10 }}
        className="block chip chip-default mx-auto"
    >
        Requires Javascript
    </span>
      <div style={{ marginTop: 35 }}>
        <div className="tab mx-auto">
            {tabItems.map((tab, index) => (
              <a 
                  className={`${selectedTab == index+1 ? "active" :""}`}
                  key={index}
                  onClick={() => setSelectedTab(index+1)}
                  role="tab"
                  >
                  {`Item ${tab.id}`}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tab;

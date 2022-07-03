import React, { useState } from "react";
import FirstTab from "../AllTabs/Profile.js";
import SecondTab from "../AllTabs/TopSongs.js";
import ThirdTab from "../AllTabs/TopAlbums.js";
import FourthTab from "../AllTabs/TopArtists.js";
import TabNavItem from "../V2/TabNavItem";
import TabContent from "../V2/TabContent";
import "./Tabs.css";

const Tabs = (e) => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem
          title="Profile"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Top Songs"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Top Albums"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Top Artists"
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      <div className="outlet">
        <div className="profileContent">
          <TabContent id="tab1" activeTab={activeTab} className="prof">
            <FirstTab />
          </TabContent>
        </div>
        <TabContent id="tab2" activeTab={activeTab}>
          <SecondTab />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <ThirdTab />
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          <FourthTab />
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;

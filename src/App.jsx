import './App.css'
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CountStats from './components/CountStats';
import GraphStats from './components/GraphStats';
import Announcement from './components/Announcement';
import Activity from './components/Activity';
function App() {
  // const announce = [
  //   ann1 : ""
  // ]
  return (
    <div className="grid grid-cols-5   ">
      <Sidebar/>
      <div className = "rounded-md h-full col-span-4 mx-8">
        <Header/>
        <Dashboard/>
        <div className = "grid grid-cols-5 gap-0">
          <div className = "col-span-3 grid grid-cols-6 gap-3">
            <div className = "col-span-2"><CountStats color={"red"} text1={"Available Position"} text2={"24"} text3={"4 Urgently needed"} /></div>
            <div className = "col-span-2"><CountStats color={"blue"} text1={"Job Open"} text2={"10"} text3={"4 Active hiring"} /></div>
            <div className = "col-span-2"><CountStats color={"pink"} text1={"New Employees"} text2={"24"} text3={"4 Department"} /></div>
            <div className = "col-span-3"><GraphStats text1 = {"Total Employees"} text2 = {"216"} text3={"120"} text4={"96"} text5={"+2"} graphNo={"1"} /></div>
            <div className = "col-span-3"><GraphStats text1 = {"Talent Request"} text2 = {"16"} text3={"6"} text4={"10"} text5={"+5"} graphNo={"2"} /></div>
            <div className = "col-span-6"><Announcement update={false}/></div>
          </div>
          <div className = "col-span-2 flex flex-col ml-3 gap-3">
            <Activity/>
            <Announcement update = {true}/>
            
          </div>


        </div>
        
      </div>
     
    </div>
  );
}

export default App;

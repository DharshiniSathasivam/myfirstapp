import Card from "./Card.jsx"
import { useState } from "react"
function App() {
  let [count,setCount]=useState(0)
  const data = [
  {
      plan:"Free",
      price:"0",
      user:"Single User",
      userEnaler:true,
      Storage:"5GB Storage",
      StorageEnaler:true,
      PublicProjects:"Unlimited Public Projects",
      PublicProjectsEnaler:true,
      Community:"Community Access",
      CommunityEnaler:true,
      PrivateProjects:"Unlimited Private Projects",
      PrivateProjectsEnaler:false,
      Dedicated:"Dedicated Phone Support",
      DedicatedEnaler: false,
      Subdomain:"Free Subdomain",
      SubdomainEnaler:false,
      Reports:"Monthly Status Reports",
      ReportsEnaler:false,
  },
  {
    plan:"plus",
    price:"9",
    user:"5 User",
    userEnaler:true,
    Storage:"50GB Storage",
    StorageEnaler:true,
    PublicProjects:"Unlimited Public Projects",
    PublicProjectsEnaler:true,
    Community:"Community Access",
    CommunityEnaler:true,
    PrivateProjects:"Unlimited Private Projects",
    PrivateProjectsEnaler:true,
    Dedicated:"Dedicated Phone Support",
    DedicatedEnaler:true,
    Subdomain:"Free Subdomain",
    SubdomainEnaler:true,
    Reports:"Monthly Status Reports",
    ReportsEnaler:false,
},
{
  plan:"pro",
      price:"49",
      user:"unlimted User",
      userEnaler:true,
      Storage:"150GB Storage",
      StorageEnaler:true,
      PublicProjects:"Unlimited Public Projects",
      PublicProjectsEnaler:true,
      Community:"Community Access",
      CommunityEnaler:true,
      PrivateProjects:"Unlimited Private Projects",
      PrivateProjectsEnaler:true,
      Dedicated:"Dedicated Phone Support",
      DedicatedEnaler:true,
      Subdomain:"Free Subdomain",
      SubdomainEnaler:true,
      Reports:"Monthly Status Reports",
      ReportsEnaler:true,
}
  ]
return (
    <>
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((e,i)=>{
          return<>
          <Card data ={e} key ={i} />
          </>
        })
      }
    </div>
    <div>
      <button className="btn btn-danger"
      onClick={()=>{
        setCount(++count)
        console.log(count)
      }}
      >click me, {count}times</button>
    </div>
  </div>
</section>
    </>
  )
}

export default App

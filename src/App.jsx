import "./App.css"
import Navbar from "./components/Navbar"
import Splash from "./components/Splash"
import Showcase from "./components/Showcase"
import Footer from "./components/Footer"
import Leaderboard from "./components/Leaderboard"

function App() {

  return (
    <>
      <Navbar/>
        <Splash/>
        <Showcase heading="Our commands" paragraph="Keep in mind, this bot is currently in an alpha 
          testing stage, expect new commands and updates to be added weekly.If you want to be kept in the loop,
          come back here often to see our latest changes." features={["/points", "/pomodoro", "/check-session", "/uptime"]} />
          <Leaderboard/>
        <Showcase heading="Upcoming features" paragraph="Upcoming features that will slowly get added to release versions of Studium." 
          features={["Reminders", "Time tracking", "Group study sessions"]} headingPadding={false}/>       
        <Footer/>
    </>
  )
}

export default App

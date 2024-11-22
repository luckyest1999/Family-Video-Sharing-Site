import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VideoList from "./components/VideoList";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto flex-grow p-4">
        <h2 className="text-2xl font-bold mb-4">Welcome to the Family Video Sharing Site</h2>
        <p>Explore and enjoy your cherished family moments.</p>
        <VideoList />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

const App = () => {
  const cards = [
    {
      title: "Supervisor", 
      description: "Monitors activity to identify project roadblocks",
      icon: "🔍", 
    },
    {
      title: "Team Builder",
      description: "Scans our talent network to create the optimal team for your project",
      icon: "👥",
    },
    {
      title: "Karma",
      description: "Regularly evaluates our talent to ensure quality",
      icon: "💡",
    },
    {
      title: "Calculator",
      description: "Uses data from past projects to provide better delivery estimates",
      icon: "🖥️",
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Reliable, efficient delivery</h1>
      <h2 className="subtitle">Powered by Technology</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, 
        minima  Ratione provident nihil amet quod ipsum cum.</p>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-icon">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
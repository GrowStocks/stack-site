import React from 'react';
import Card from "./Card";

function App() {
  return (
    <main className="wrap--content">
        <h2 className="title">Features</h2>
        <section className="grid">
            <Card title="Scaffold">Scaffold is Stack's core framework. It's the magical thing that runs it all! Scaffold provides a powerful Theming API as well as component creation APIs (Color, Shape, Typography).</Card>
            <Card title="Components">Stack also provides built in components to make your frontend development easier than ever! The components can also be modified to your liking using our Theme Injection API.</Card>
            <Card title="Built with &hearts;">Stack is built using SCSS, TypeScript, years of research and development, and <b>LOVE &hearts;</b></Card>
        </section>

        <h2 className="title">Companies that &hearts; Stack</h2>
        <section className="flex">
            <a href="https://growstocks.xyz">
                <img src="https://avatars.githubusercontent.com/u/45097675" alt="GrowStocks" className="company__logo"/>
            </a>
            <a href="https://blockcorp.xyz">
                <img src="https://avatars.githubusercontent.com/u/75997293" alt="BlockCorp" className="company__logo"/>
            </a>
            <a href="https://growtopics.xyz">
                <img src="https://raw.githubusercontent.com/GrowTopics/website-client/master/public/favicon.png" alt="GrowStocks" className="company__logo"/>
            </a>
        </section>
    </main>
  );
}

export default App;

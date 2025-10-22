import React from "react";

const demo = [
  { date: "Sam 8 nov.", title: "Rencontre publique — Centre-ville", desc: "Présentation et échanges ouverts" },
  { date: "Dim 9 nov.", title: "Marche citoyenne", desc: "Moments conviviaux autour du projet" },
  { date: "Lun 10 nov.", title: "Lancement vidéo", desc: "Diffusion d’un clip court sur les réseaux" }
];

export default function Events() {
  return (
    <main className="container section">
      <h1>Événements</h1>
      <p className="lead">Agenda prévisionnel. Suivez les mises à jour ici.</p>
      <div className="grid" style={{marginTop:"1rem"}}>
        {demo.map((e, i) => (
          <article key={i} className="card" style={{gridColumn:"span 12"}}>
            <div style={{display:"flex", gap:"1rem", alignItems:"baseline", flexWrap:"wrap"}}>
              <span className="tag">{e.date}</span>
              <h2 style={{margin:0}}>{e.title}</h2>
            </div>
            <p style={{marginTop:".4rem"}}>{e.desc}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

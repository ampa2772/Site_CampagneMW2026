import React from "react";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1>Construire ensemble une ville <em>qui avance</em></h1>
          <p className="lead">
            Bienvenue sur <strong>Bernay Ville d’Avenir</strong>.
            Retrouvez notre vision, les événements à venir, la cohésion du territoire
            et le bilan de nos actions.
          </p>
          <div style={{marginTop:"1rem", display:"flex", gap:".6rem", flexWrap:"wrap"}}>
            <a className="btn" href="#/evenements">Voir les événements</a>
            <a className="btn" href="#/cohesion" style={{background:"#1bbf7a"}}>Cohésion</a>
          </div>
        </div>
      </header>

      <main className="container section">
        <div className="grid">
          <section className="card" style={{gridColumn:"span 6"}}>
            <h2>Nos priorités</h2>
            <p>
              Transition, mobilité, cadre de vie, attractivité économique et
              soutien au tissu associatif. Des actions concrètes et mesurables.
            </p>
          </section>
          <section className="card" style={{gridColumn:"span 6"}}>
            <h2>Participation citoyenne</h2>
            <p>
              Réunions publiques, ateliers participatifs et outils numériques
              pour co-construire avec les habitants.
            </p>
          </section>
          <section className="card" style={{gridColumn:"span 12"}}>
            <h2>Dernières infos</h2>
            <ul>
              <li>Lancement du site et préparation des rencontres de novembre.</li>
              <li>Mise à jour progressive des pages “Événements”, “Cohésion” et “Bilan”.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

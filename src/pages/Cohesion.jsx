import React from "react";

export default function Cohesion() {
  return (
    <main className="container section">
      <h1>Cohésion</h1>
      <p className="lead">
        Vie locale : associations, quartiers, solidarité et intergénérationnel.
      </p>

      <div className="grid" style={{marginTop:"1rem"}}>
        <section className="card" style={{gridColumn:"span 12"}}>
          <h2>Vie associative</h2>
          <p>Accompagnement, mise en réseau, accès aux salles et soutien aux événements.</p>
        </section>
        <section className="card" style={{gridColumn:"span 12"}}>
          <h2>Participation</h2>
          <p>Ateliers réguliers et boîtes à idées pour faire remonter besoins et propositions.</p>
        </section>
      </div>
    </main>
  );
}

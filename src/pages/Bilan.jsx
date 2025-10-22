import React from "react";

export default function Bilan() {
  return (
    <main className="container section">
      <h1>Bilan</h1>
      <p className="lead">Synthèse des réalisations et indicateurs clés.</p>

      <div className="grid" style={{marginTop:"1rem"}}>
        <section className="card" style={{gridColumn:"span 6"}}>
          <h2>Réalisations</h2>
          <ul>
            <li>Améliorations de l’espace public et du cadre de vie.</li>
            <li>Soutien renforcé aux initiatives locales.</li>
            <li>Expérimentations de mobilité douce.</li>
          </ul>
        </section>
        <section className="card" style={{gridColumn:"span 6"}}>
          <h2>Chiffres clés</h2>
          <ul>
            <li>+X projets co-construits</li>
            <li>+Y événements associatifs soutenus</li>
            <li>Z % de satisfaction (sondages locaux)</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

// ===== Catalogue des formations (modifier ici pour ajouter / retirer une formation) =====
// cat : "securite" | "conduite" | "tp" (titre professionnel)   app : true si proposé en apprentissage
const FORMATIONS = [
  {cat:"securite", t:"Sauveteur Secouriste du Travail (SST)", d:"Intervenir face à un accident du travail ou un malaise et contribuer à la prévention dans l'entreprise. Certificat SST (référentiel INRS).", m:"2 jours · 14 h · initial et MAC"},
  {cat:"securite", t:"Prévention des risques liés à l'activité physique (PRAP)", d:"Devenir acteur de sa propre prévention : analyse de sa situation de travail, principes de sécurité physique et d'économie d'effort.", m:"PRAP IBC"},
  {cat:"securite", t:"AIPR – opérateur, encadrant, concepteur", d:"Réglementation DT-DICT, lecture de plans, travaux à proximité des réseaux. Examen QCM officiel du Ministère.", m:"Examen inclus"},
  {cat:"securite", t:"Habilitation électrique H0B0", d:"Travailler en sécurité à proximité d'installations électriques (personnel non électricien), norme NF C 18-510.", m:"Non électricien"},
  {cat:"securite", t:"Travail en hauteur et port du harnais", d:"Identifier les risques de chute, choisir un ancrage, régler et utiliser un harnais antichute.", m:"Initial et recyclage"},
  {cat:"securite", t:"Montage et démontage des échafaudages", d:"Monter, démonter et vérifier un échafaudage en sécurité selon la notice du fabricant.", m:"Initial et recyclage"},
  {cat:"securite", t:"Évaluation des risques – Document unique (DUERP)", d:"Conduire l'évaluation des risques, rédiger et mettre à jour le document unique, bâtir un plan d'actions.", m:"Pour dirigeants et référents"},
  {cat:"securite", t:"Soudage à l'arc électrode enrobée (111)", d:"Initiation au procédé de soudage à l'arc à l'électrode enrobée : sécurité, réglages et réalisation de cordons.", m:"Initiation"},
  {cat:"conduite", t:"Autorisation de conduite – nacelles (PEMP)", d:"Conduite en sécurité des plates-formes élévatrices mobiles de personnes. Évaluations théorique et pratique.", m:"Initial et recyclage"},
  {cat:"conduite", t:"Autorisation de conduite – engins de chantier", d:"Pelles, chargeuses, tractopelles, mini-engins… Réglementation, vérifications, conduite en situation réelle.", m:"Initial et recyclage"},
  {cat:"conduite", t:"Autorisation de conduite – grue de chargement", d:"Stabilisation, lecture d'abaques, élingage et manutention de charges en sécurité.", m:"Initial et recyclage"},
  {cat:"conduite", t:"Autorisation de conduite – chariots élévateurs", d:"Conduite en sécurité des chariots automoteurs à conducteur porté : règles de circulation, stabilité, manutention.", m:"Initial et recyclage"},
  {cat:"tp", app:true, t:"Agent de médiation, information, services (AMIS)", d:"Titre professionnel – accueillir, informer, orienter et assurer une présence de médiation auprès des publics.", m:"Titre professionnel · niveau 3"},
  {cat:"tp", app:true, t:"Médiateur social accès aux droits et services (MSADS)", d:"Titre professionnel – accompagner les publics dans l'accès aux droits et aux services, prévenir et gérer les conflits.", m:"Titre professionnel · niveau 4"},
  {cat:"tp", app:true, t:"Conseiller en insertion professionnelle (CIP)", d:"Titre professionnel – accompagner les personnes dans leur parcours d'insertion sociale et professionnelle.", m:"Titre professionnel · niveau 5"},
  {cat:"tp", app:true, t:"Formateur professionnel d'adultes (FPA)", d:"Titre professionnel – préparer, animer et évaluer des actions de formation pour adultes.", m:"Titre professionnel · niveau 5"},
  {cat:"tp", app:true, t:"Assistant de direction", d:"Titre professionnel – assister un dirigeant dans l'organisation, la communication et le suivi des dossiers.", m:"Titre professionnel · niveau 5"},
  {cat:"tp", app:true, t:"Secrétaire assistant médico-administratif (SAMA)", d:"Titre professionnel – accueil, gestion administrative et coordination dans les structures médicales et médico-sociales.", m:"Titre professionnel · niveau 4"},
  {cat:"tp", app:true, t:"Assistant de vie aux familles (ADVF)", d:"Titre professionnel – accompagner les personnes à domicile dans les actes de la vie quotidienne.", m:"Titre professionnel · niveau 3"},
  {cat:"tp", app:true, t:"Agent de propreté et d'hygiène (APH)", d:"Titre professionnel – réaliser des prestations de nettoyage et de remise en état dans tous types de locaux.", m:"Titre professionnel · niveau 3"},
  {cat:"tp", app:true, t:"Agent de maintenance des bâtiments (AMB)", d:"Titre professionnel – maintenance et petits travaux en électricité, plomberie, menuiserie et finitions.", m:"Titre professionnel · niveau 3"},
  {cat:"tp", app:true, t:"Conseiller de vente", d:"Titre professionnel – accueillir, conseiller et vendre en magasin, participer à la tenue de l'espace de vente.", m:"Titre professionnel · niveau 4"},
];

const grid = document.getElementById("formations-grid");
const select = document.getElementById("f-formation");
const LABEL = {securite:"Prévention & sécurité", conduite:"Autorisation de conduite", tp:"Titre professionnel"};

function render(filter){
  grid.innerHTML = "";
  FORMATIONS.filter(f => filter==="all" || f.cat===filter || (filter==="app" && f.app)).forEach(f=>{
    const el = document.createElement("article");
    el.className = "card formation";
    el.innerHTML = `<span class="tag ${f.cat==='tp'?'tp':''}">${LABEL[f.cat]}</span>
      ${f.app?'<span class="tag app">Aussi en apprentissage</span>':''}
      <h3>${f.t}</h3><p>${f.d}</p>
      <div class="meta">${f.m}</div>
      <a class="ask" href="#demande" data-f="${f.t}">Demander un devis / s'inscrire →</a>`;
    grid.appendChild(el);
  });
}
render("all");

// options du formulaire
["securite","conduite","tp"].forEach(c=>{
  const g = document.createElement("optgroup"); g.label = LABEL[c];
  FORMATIONS.filter(f=>f.cat===c).forEach(f=>{const o=document.createElement("option");o.textContent=f.t;g.appendChild(o);});
  select.appendChild(g);
});
const other = document.createElement("option"); other.textContent = "Autre / je ne sais pas encore"; select.appendChild(other);

document.querySelectorAll(".chip").forEach(c=>c.addEventListener("click",()=>{
  document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));
  c.classList.add("active"); render(c.dataset.f);
}));

// clic "Demander un devis" -> pré-remplit la formation
grid.addEventListener("click", e=>{
  const a = e.target.closest("a.ask"); if(!a) return;
  select.value = a.dataset.f;
});

// menu mobile
document.querySelector(".burger").addEventListener("click",()=>document.querySelector(".menu").classList.toggle("open"));
document.querySelectorAll(".menu a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".menu").classList.remove("open")));

// envoi du formulaire (FormSubmit -> e-mail)
const form = document.getElementById("demande-form");
const msg = document.getElementById("form-msg");
form.addEventListener("submit", async e=>{
  e.preventDefault();
  if(form._honey.value) return;
  const btn = form.querySelector("button[type=submit]");
  btn.disabled = true; btn.textContent = "Envoi en cours…";
  msg.className = "msg";
  try{
    const r = await fetch(form.action.replace("formsubmit.co/","formsubmit.co/ajax/"), {
      method:"POST", headers:{Accept:"application/json"}, body:new FormData(form)
    });
    if(!r.ok) throw new Error();
    msg.className = "msg ok";
    msg.textContent = "Merci ! Votre demande a bien été envoyée. Nous vous recontactons sous 48 h ouvrées.";
    form.reset();
  }catch(_){
    msg.className = "msg err";
    msg.innerHTML = "L'envoi n'a pas abouti. Écrivez-nous à <a href='mailto:contact@3aim.fr'>contact@3aim.fr</a> ou appelez le 0692 09 85 92.";
  }
  btn.disabled = false; btn.textContent = "Envoyer ma demande";
});

document.getElementById("year").textContent = new Date().getFullYear();

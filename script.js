// ===== Catalogue des formations (modifier ici pour ajouter / retirer une formation) =====
// cat : "securite" | "conduite" | "tp" (titre professionnel)
// p : programmes PDF téléchargeables -> [libellé, identifiant du fichier Google Drive partagé "lecture par lien"]
const FORMATIONS = [
  {cat:"securite", t:"Sauveteur Secouriste du Travail (SST)", d:"Intervenir face à un accident du travail ou un malaise et contribuer à la prévention dans l'entreprise. Certificat SST (référentiel INRS).", m:"Formation initiale · MAC",
    p:[["Programme SST initial","1O_z0gvrlcEzquFdxlbBFRalpGu-oshkq"],["Programme MAC SST","1SBPc1f7Y_suKrN1EezI4WGLmjoHkELZV"]]},
  {cat:"securite", t:"Prévention des risques liés à l'activité physique (PRAP)", d:"Devenir acteur de sa propre prévention : analyse de sa situation de travail, principes de sécurité physique et d'économie d'effort.", m:"PRAP IBC",
    p:[["Programme PRAP IBC","1voY3SCcVj6-JY4-9ROn_fUcF3N_Un5Yt"]]},
  {cat:"securite", t:"AIPR – opérateur, encadrant, concepteur", d:"Réglementation DT-DICT, lecture de plans, travaux à proximité des réseaux. Examen QCM officiel du Ministère.", m:"Examen inclus",
    p:[["Programme AIPR opérateur","1a187E5yOs8deRI12vYUFQzAB0erg6IuQ"],["Programme AIPR encadrant","1LSMhaCQ0-jYDBYQ3rVkabI0Fe7poZ5lr"]]},
  {cat:"securite", t:"Habilitation électrique (H0B0, BS, BE manœuvre, HE)", d:"Travailler en sécurité sur ou à proximité d'installations électriques, conformément à la norme NF C 18-510.", m:"Non électricien",
    p:[["Programme H0B0","1jGKVgbWlCDP5bV3bGNM26VYCHH6xCSdi"],["Programme BS / BE / HE","1v_jafVGi_nNNwDuUqCrEmvCfTzgsKLjf"]]},
  {cat:"securite", t:"Travail en hauteur et port du harnais", d:"Identifier les risques de chute, choisir un ancrage, régler et utiliser un harnais antichute.", m:"1 ou 2 jours",
    p:[["Programme 1 jour","13YTjJwW0OVPFFI-AJ3T5ktNJKiyc21wo"],["Programme 2 jours","1cqB6Vgsz7CRuNdzbW7ajYYOJ8ZA-1PZ3"]]},
  {cat:"securite", t:"Montage et démontage des échafaudages", d:"Monter, démonter et vérifier un échafaudage en sécurité selon la notice du fabricant.", m:"2 jours",
    p:[["Programme échafaudage","1fsW3ZL3ktphoLREpEEz58e7N92KhQ4Bc"]]},
  {cat:"securite", t:"Évaluation des risques – Document unique (DUERP)", d:"Conduire l'évaluation des risques, rédiger et mettre à jour le document unique, bâtir un plan d'actions.", m:"Pour dirigeants et référents",
    p:[["Programme DUERP","1WD7nfM2iFAd_GuRI-h-IQVbbPW4Ktw8E"]]},
  {cat:"securite", t:"Manipulation des extincteurs", d:"Connaître le triangle du feu, les classes de feux et les types d'extincteurs, et savoir intervenir sur un départ de feu.", m:"Théorie et pratique",
    p:[["Programme extincteurs","1veywfLVl0lDRtOG6cNHb_LWiI7jGNb__"]]},
  {cat:"securite", t:"Gestion des conflits et des incivilités", d:"Prévenir les tensions, adopter la bonne posture et désamorcer les situations conflictuelles avec le public.", m:"Accueil · relation client",
    p:[["Programme gestion des conflits","1dnVlwLOuu3E4h5QD9B8ZYxYPif6wH1Cy"]]},
  {cat:"securite", t:"Soudage à l'arc électrode enrobée (111)", d:"Initiation au procédé de soudage à l'arc à l'électrode enrobée : sécurité, réglages et réalisation de cordons.", m:"Initiation"},
  {cat:"conduite", t:"Autorisation de conduite – nacelles (PEMP)", d:"Conduite en sécurité des plates-formes élévatrices mobiles de personnes. Évaluations théorique et pratique.", m:"Initial et recyclage",
    p:[["Programme initial","1nWUT4UuIwHdrqBvhQhjMVv7mmE3recHs"],["Programme recyclage","1gjKoYgoDGiSYHpuGoNTr7QAXQOJq9i57"]]},
  {cat:"conduite", t:"Autorisation de conduite – engins de chantier", d:"Pelles, chargeuses, tractopelles, mini-engins… Réglementation, vérifications, conduite en situation réelle.", m:"3 ou 5 jours",
    p:[["Programme 3 jours","1Tng3gtPg4sgdxe-zOorq3yn7Oa7czv9D"],["Programme 5 jours","1O_YOlXvgOO6Opcf7q0ZsWYUE4WJWilFs"]]},
  {cat:"conduite", t:"Autorisation de conduite – grue de chargement", d:"Stabilisation, lecture d'abaques, élingage et manutention de charges en sécurité.", m:"Initial et recyclage",
    p:[["Programme initial","1JTatyid3s5h4XLOYIebFQIHryJ4LCyAw"],["Programme recyclage","1mfQ-9evkvyvp6QQQUuRooMfoNBBSe0nv"]]},
  {cat:"conduite", t:"Autorisation de conduite – chariots élévateurs", d:"Conduite en sécurité des chariots automoteurs à conducteur porté : règles de circulation, stabilité, manutention.", m:"Initial et recyclage",
    p:[["Programme initial","1-Oyo8lMPJoQ-4xTJNwT7VFaCgs4hnCC2"],["Programme recyclage","1beBHq2Rxzm6STdUNksD-b6snU8yO7t8V"]]},
  {cat:"tp", t:"Agent de médiation, information, services (AMIS)", d:"Titre professionnel – accueillir, informer, orienter et assurer une présence de médiation auprès des publics.", m:"Titre professionnel · niveau 3"},
  {cat:"tp", t:"Médiateur social accès aux droits et services (MSADS)", d:"Titre professionnel – accompagner les publics dans l'accès aux droits et aux services, prévenir et gérer les conflits.", m:"Titre professionnel · niveau 4",
    p:[["Programme MSADS (500 h)","1xmFDWt5aNbF4y8aA2Ds049K_qvHlijOm"]]},
  {cat:"tp", t:"Conseiller en insertion professionnelle (CIP)", d:"Titre professionnel – accompagner les personnes dans leur parcours d'insertion sociale et professionnelle.", m:"Titre professionnel · niveau 5"},
  {cat:"tp", t:"Formateur professionnel d'adultes (FPA)", d:"Titre professionnel – préparer, animer et évaluer des actions de formation pour adultes.", m:"Titre professionnel · niveau 5"},
  {cat:"tp", t:"Assistant de direction", d:"Titre professionnel – assister un dirigeant dans l'organisation, la communication et le suivi des dossiers.", m:"Titre professionnel · niveau 5"},
  {cat:"tp", t:"Secrétaire assistant médico-administratif (SAMA)", d:"Titre professionnel – accueil, gestion administrative et coordination dans les structures médicales et médico-sociales.", m:"Titre professionnel · niveau 4"},
  {cat:"tp", t:"Assistant de vie aux familles (ADVF)", d:"Titre professionnel – accompagner les personnes à domicile dans les actes de la vie quotidienne.", m:"Titre professionnel · niveau 3"},
  {cat:"tp", t:"Agent de propreté et d'hygiène (APH)", d:"Titre professionnel – réaliser des prestations de nettoyage et de remise en état dans tous types de locaux.", m:"Titre professionnel · niveau 3"},
  {cat:"tp", t:"Agent de maintenance des bâtiments (AMB)", d:"Titre professionnel – maintenance et petits travaux en électricité, plomberie, menuiserie et finitions.", m:"Titre professionnel · niveau 3"},
  {cat:"tp", t:"Conseiller commercial", d:"Titre professionnel – prospecter, conseiller et vendre auprès d'une clientèle de professionnels ou de particuliers.", m:"Titre professionnel · niveau 4",
    p:[["Programme Conseiller commercial","19-Lpuq6DE41yuBiu-oBYPFKEYQPCDiWS"]]},
  {cat:"tp", t:"Conseiller de vente", d:"Titre professionnel – accueillir, conseiller et vendre en magasin, participer à la tenue de l'espace de vente.", m:"Titre professionnel · niveau 4"},
];

const DL = id => "https://drive.google.com/uc?export=download&id=" + id;
const grid = document.getElementById("formations-grid");
const select = document.getElementById("f-formation");
const LABEL = {securite:"Prévention & sécurité", conduite:"Autorisation de conduite", tp:"Titre professionnel"};

function render(filter){
  grid.innerHTML = "";
  FORMATIONS.filter(f => filter==="all" || f.cat===filter).forEach(f=>{
    const el = document.createElement("article");
    el.className = "card formation";
    const progs = (f.p||[]).map(([l,id])=>`<a class="dl" href="${DL(id)}" target="_blank" rel="noopener">⬇ ${l} (PDF)</a>`).join("");
    el.innerHTML = `<span class="tag ${f.cat==='tp'?'tp':''}">${LABEL[f.cat]}</span>
      <h3>${f.t}</h3><p>${f.d}</p>
      <div class="meta">${f.m}</div>
      <div class="progs">${progs || '<span class="noprog">Programme détaillé sur simple demande</span>'}</div>
      <details class="acces"><summary>Modalités et délai d'accès</summary>
        <p><b>Accès :</b> inscription via le formulaire, par mail (contact@3aim.fr) ou par téléphone (0692 09 85 92). Devis et programme envoyés ; inscription confirmée à réception du devis signé ou de l'accord de prise en charge. Questionnaire de positionnement avant l'entrée en formation.</p>
        <p><b>Délai :</b> 1 mois en moyenne entre la demande et le début de la formation, selon les dates de session, les places et le délai de prise en charge du financeur.</p>
        <p><b>Handicap :</b> formation accessible – contactez notre référent handicap, Rachad MOHAMED (0692 09 85 92).</p>
      </details>
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

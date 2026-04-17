const capabilityData = [
  {
    id: "engineering",
    label: "Engineering Roots",
    subtitle: "Telecommunications and systems engineering foundations",
    hours: 3000,
    color: getComputedStyle(document.documentElement).getPropertyValue("--engineering").trim(),
    metaphor: "The roots hold the technical discipline that came first: RF work, testing, field validation, calibration, operational systems, and regulated delivery.",
    summary: "This is the underground layer of the story. It is where measurement discipline, systems thinking, instrumentation, field validation, and pressure-tested delivery habits were formed across Spark New Zealand, Huawei, Alcatel-Lucent, MBIE, Continental, and earlier technical work.",
    proof: [
      "RF planning, validation, coexistence analysis, and network optimisation in telecommunications environments.",
      "Regulatory compliance work in spectrum licensing and radio engineering.",
      "Testing, calibration, instrumentation, and quality-assurance foundations from earlier systems roles."
    ]
  },
  {
    id: "architecture",
    label: "Enterprise Data Architecture",
    subtitle: "Designing the shape of trusted systems",
    hours: 2800,
    color: getComputedStyle(document.documentElement).getPropertyValue("--architecture").trim(),
    metaphor: "This branch reaches toward structure and coherence: models, architecture maps, and operating designs that turn complexity into something navigable.",
    summary: "The architecture branch covers semantic design, integration patterns, capability maps, shared data platforms, and the framing work that helps institutions connect business purpose with technical systems.",
    proof: [
      "Student lifecycle and enterprise warehouse modelling at UniSC.",
      "Shared data platform design for Workforce Development Councils.",
      "Capability and governance artefacts that make architecture legible to non-technical stakeholders."
    ]
  },
  {
    id: "platform",
    label: "Platform Engineering",
    subtitle: "Building the trunk and the delivery muscle",
    hours: 3400,
    color: getComputedStyle(document.documentElement).getPropertyValue("--platform").trim(),
    metaphor: "This branch is close to the trunk because it carries weight: data warehouses, pipelines, semantic layers, reusable patterns, and the actual machinery of insight delivery.",
    summary: "This is the build-and-operate layer: Azure Synapse, Databricks, dbt, Snowflake, Power BI semantic models, Shiny products, quality controls, audit automation, and engineering standards that keep data delivery repeatable.",
    proof: [
      "Azure Synapse enterprise warehouse foundations and governed Power BI delivery.",
      "Databricks, dbt, Snowflake, Docker, and Shiny across public-sector and health contexts.",
      "BI developer standards, automated cyber audit tooling, and assurance-oriented platform controls."
    ]
  },
  {
    id: "leadership",
    label: "Leadership and Capability",
    subtitle: "Growing people, standards, and momentum",
    hours: 2300,
    color: getComputedStyle(document.documentElement).getPropertyValue("--leadership").trim(),
    metaphor: "This branch is where the tree becomes more than one person. It is the part that multiplies capability through teams, coaching, standards, and executive trust.",
    summary: "This domain covers executive partnering, leading BI and DW teams, mentoring analysts and engineers, setting quality bars, building communities of practice, and turning data work into organisational capability rather than isolated delivery.",
    proof: [
      "Leading multidisciplinary teams and lifting delivery standards at UniSC.",
      "Training, reproducible analytics mentoring, and community-of-practice work.",
      "PDP reviews, prioritisation, roadmap translation, and capability uplift for senior engineers."
    ]
  },
  {
    id: "governance",
    label: "Governance and Trust",
    subtitle: "Making data usable because it is trusted",
    hours: 2600,
    color: getComputedStyle(document.documentElement).getPropertyValue("--governance").trim(),
    metaphor: "This branch reaches toward trust. It is the part of the canopy that keeps the whole organism credible under pressure.",
    summary: "This domain covers Microsoft Purview, stewardship design, privacy and compliance controls, information risk reduction, service governance, cyber assurance, TEQSA-aligned reporting evidence, and trust-by-design operating habits.",
    proof: [
      "Purview implementation and stewardship model design at UniSC.",
      "Automated audit tooling, V4 findings, and security hardening evidence.",
      "Privacy-aligned controls, compliance workflows, and reporting evidence models."
    ]
  },
  {
    id: "analytics",
    label: "Decision Intelligence",
    subtitle: "Turning data into planning, forecasting, and action",
    hours: 3900,
    color: getComputedStyle(document.documentElement).getPropertyValue("--analytics").trim(),
    metaphor: "This branch carries fruit. It is where the system becomes visible to leaders through forecasting, modelling, dashboards, planning conversations, and decisions that actually move.",
    summary: "This domain covers executive reporting, KPI systems, forecasting pipelines, predictive models, NLP extraction, public-health insight, workload planning, and the analytical products that help institutions see ahead rather than only backward.",
    proof: [
      "EFTSL forecasting pipeline with measured value and accuracy evidence.",
      "National public-health decision support and modular analytical applications.",
      "Executive planning dashboards, KPI systems, NLP workflows, and predictive modelling."
    ]
  }
];

const skillNodes = [
  {
    id: "foundation",
    label: "Foundation",
    shortLabel: "Foundation",
    zone: "root",
    domain: "engineering",
    focusDomain: "engineering",
    x: 548,
    y: 604,
    r: 28,
    hours: 3000,
    metaText: "3,000h",
    summary: "This is the base node. It represents the engineering foundation underneath the rest of the story: systems discipline, testing, regulated delivery, operational pressure, and measurement-first thinking.",
    proof: [
      "Telecommunications and systems engineering roots across Spark, Huawei, Alcatel-Lucent, MBIE, Continental, and early technical work.",
      "The habits formed here later show up as architecture discipline, platform rigor, and governance seriousness."
    ]
  },
  {
    id: "rf-systems",
    label: "RF Systems",
    shortLabel: "RF",
    zone: "root",
    domain: "engineering",
    focusDomain: "engineering",
    x: 426,
    y: 654,
    r: 16,
    hours: 900,
    summary: "Radio-frequency planning, optimisation, interference analysis, and technical system understanding built the earliest layer of systems thinking.",
    proof: [
      "Alcatel-Lucent coverage, optimisation, and interference work.",
      "Spark network planning and modelling context."
    ]
  },
  {
    id: "testing-qa",
    label: "Testing & QA",
    shortLabel: "QA",
    zone: "root",
    domain: "engineering",
    focusDomain: "engineering",
    x: 520,
    y: 706,
    r: 16,
    hours: 700,
    summary: "Testing, validation, and calibration work trained the habit of proving that systems behave as expected rather than assuming they do.",
    proof: [
      "Continental testing and calibration work.",
      "Quality-assurance discipline carried forward into data assurance."
    ]
  },
  {
    id: "regulatory",
    label: "Regulatory Controls",
    shortLabel: "Reg",
    zone: "root",
    domain: "engineering",
    focusDomain: "engineering",
    x: 634,
    y: 676,
    r: 16,
    hours: 650,
    summary: "Regulated-system work reinforced the importance of auditability, standards, and operating within externally constrained environments.",
    proof: [
      "Spectrum licensing and MBIE radio engineering.",
      "Compliance and rights-management obligations in telecommunications contexts."
    ]
  },
  {
    id: "field-ops",
    label: "Field Ops",
    shortLabel: "Field",
    zone: "root",
    domain: "engineering",
    focusDomain: "engineering",
    x: 720,
    y: 622,
    r: 16,
    hours: 750,
    summary: "Hands-on operational environments taught resilience, rapid problem solving, and delivery discipline under pressure.",
    proof: [
      "Site, equipment, and field-validation work across technical roles.",
      "Direct exposure to how systems fail outside of diagrams."
    ]
  },
  {
    id: "andrei",
    label: "Andrei",
    shortLabel: "Andrei",
    zone: "trunk",
    domain: "leadership",
    focusDomain: "leadership",
    x: 548,
    y: 450,
    r: 31,
    hours: 18000,
    metaText: "career owner",
    summary: "This is the person node in the middle of the tree. It holds the through-line: the same person carrying engineering roots upward into enterprise data leadership, architecture, governance, analytics, and organisational change.",
    proof: [
      "The career owner linking the whole skill system together.",
      "A single story across telecommunications, government, health, and higher education."
    ]
  },
  {
    id: "core",
    label: "Core",
    shortLabel: "Core",
    zone: "trunk",
    domain: "platform",
    focusDomain: "platform",
    x: 548,
    y: 316,
    r: 27,
    hours: 5200,
    metaText: "operating core",
    summary: "The core node represents the current operating centre of the career: enterprise data platforms, analytics enablement, institutional reporting, governance uplift, and trusted delivery at organisational scale.",
    proof: [
      "Current UniSC scope across BI, data warehousing, governance, and reporting.",
      "The point where strategy, delivery, and team leadership meet."
    ]
  },
  {
    id: "bi-ops",
    label: "BI Operations",
    shortLabel: "BI",
    zone: "trunk",
    domain: "platform",
    focusDomain: "platform",
    x: 480,
    y: 384,
    r: 16,
    hours: 1100,
    summary: "Operational ownership of enterprise BI means platforms, standards, cadence, delivery assurance, and keeping insight services reliable.",
    proof: [
      "Governed BI delivery and release practices.",
      "Standards, peer review, and operational uplift."
    ]
  },
  {
    id: "institutional-reporting",
    label: "Institutional Reporting",
    shortLabel: "Reports",
    zone: "trunk",
    domain: "analytics",
    focusDomain: "analytics",
    x: 612,
    y: 382,
    r: 16,
    hours: 1200,
    summary: "Institutional reporting is the point where the technical estate becomes visible to leaders through planning, metrics, and decision-ready outputs.",
    proof: [
      "Executive and institutional reporting at UniSC.",
      "Planning and performance conversations supported by trusted reporting."
    ]
  },
  {
    id: "team-performance",
    label: "Team Performance",
    shortLabel: "Team",
    zone: "trunk",
    domain: "leadership",
    focusDomain: "leadership",
    x: 548,
    y: 238,
    r: 16,
    hours: 900,
    summary: "This node represents the shift from individual contribution to team momentum: coaching, priorities, performance follow-up, and capability growth.",
    proof: [
      "Leading BI and DW teams.",
      "PDP reviews, coaching, and engineering uplift work."
    ]
  },
  {
    id: "architecture",
    label: "Architecture",
    shortLabel: "Architecture",
    zone: "crown",
    domain: "architecture",
    focusDomain: "architecture",
    x: 334,
    y: 216,
    r: 23,
    hours: 2800,
    summary: "The architecture crown node represents semantic design, capability maps, operating models, and system-level framing that keeps data work coherent.",
    proof: capabilityData.find((entry) => entry.id === "architecture").proof
  },
  {
    id: "capability-maps",
    label: "Capability Maps",
    shortLabel: "Maps",
    zone: "crown",
    domain: "architecture",
    focusDomain: "architecture",
    x: 252,
    y: 154,
    r: 16,
    hours: 900,
    summary: "Capability mapping turns architecture into something leaders can discuss, sequence, and fund.",
    proof: [
      "Capability and governance artefacts in the repo.",
      "Architecture communication for technical and non-technical audiences."
    ]
  },
  {
    id: "operating-models",
    label: "Operating Models",
    shortLabel: "Ops",
    zone: "crown",
    domain: "architecture",
    focusDomain: "architecture",
    x: 286,
    y: 260,
    r: 16,
    hours: 950,
    summary: "Operating-model design sits between org structure and technical delivery: how capability is actually run, governed, and consumed.",
    proof: [
      "Operating model work across planning, governance, and platform enablement.",
      "Shared platform design for multi-agency contexts."
    ]
  },
  {
    id: "platform",
    label: "Platform",
    shortLabel: "Platform",
    zone: "crown",
    domain: "platform",
    focusDomain: "platform",
    x: 442,
    y: 150,
    r: 23,
    hours: 3400,
    summary: "The platform node holds the build-and-run muscle: warehouses, transformations, semantic models, controls, and delivery patterns that create durable data capability.",
    proof: capabilityData.find((entry) => entry.id === "platform").proof
  },
  {
    id: "leadership",
    label: "Leadership",
    shortLabel: "Leadership",
    zone: "crown",
    domain: "leadership",
    focusDomain: "leadership",
    x: 548,
    y: 118,
    r: 23,
    hours: 2300,
    summary: "Leadership in this map is not abstract. It is the repeated act of aligning stakeholders, coaching teams, setting standards, and moving the whole system forward.",
    proof: capabilityData.find((entry) => entry.id === "leadership").proof
  },
  {
    id: "executive-partnering",
    label: "Executive Partnering",
    shortLabel: "Exec",
    zone: "crown",
    domain: "leadership",
    focusDomain: "leadership",
    x: 458,
    y: 72,
    r: 16,
    hours: 850,
    summary: "Executive partnering is the ability to translate technical reality into strategic choices, reporting priorities, and organisational movement.",
    proof: [
      "Planning, metrics, and governance conversations with senior leaders.",
      "Work that connects enterprise data delivery with strategic decision-making."
    ]
  },
  {
    id: "coaching",
    label: "Coaching",
    shortLabel: "Coach",
    zone: "crown",
    domain: "leadership",
    focusDomain: "leadership",
    x: 640,
    y: 74,
    r: 16,
    hours: 700,
    summary: "Capability is multiplied through coaching, not only through personal technical output.",
    proof: [
      "Training, mentoring, and uplift for analysts and engineers.",
      "Community-of-practice and reproducible analytics habits."
    ]
  },
  {
    id: "governance",
    label: "Governance",
    shortLabel: "Governance",
    zone: "crown",
    domain: "governance",
    focusDomain: "governance",
    x: 656,
    y: 150,
    r: 23,
    hours: 2600,
    summary: "The governance crown node makes trust visible: stewardship, privacy, assurance, control design, and confidence in the data estate.",
    proof: capabilityData.find((entry) => entry.id === "governance").proof
  },
  {
    id: "stewardship",
    label: "Stewardship",
    shortLabel: "Steward",
    zone: "crown",
    domain: "governance",
    focusDomain: "governance",
    x: 734,
    y: 132,
    r: 16,
    hours: 900,
    summary: "Stewardship is where governance becomes operational: owners, definitions, controls, and clear accountability.",
    proof: [
      "Stewardship model work with business and IT owners.",
      "Governance foundations established through Purview and related practices."
    ]
  },
  {
    id: "analytics",
    label: "Analytics",
    shortLabel: "Analytics",
    zone: "crown",
    domain: "analytics",
    focusDomain: "analytics",
    x: 764,
    y: 216,
    r: 23,
    hours: 3900,
    summary: "The analytics crown node represents forecasting, KPI systems, modelling, planning insight, and the visible business value created from the rest of the tree.",
    proof: capabilityData.find((entry) => entry.id === "analytics").proof
  },
  {
    id: "forecasting",
    label: "Forecasting",
    shortLabel: "Forecast",
    zone: "crown",
    domain: "analytics",
    focusDomain: "analytics",
    x: 848,
    y: 262,
    r: 16,
    hours: 1300,
    summary: "Forecasting is one of the clearest evidence trails in the repo: model comparison, accuracy testing, and measurable business value.",
    proof: [
      "EFTSL forecasting pipeline evidence.",
      "Model testing, validation, and planning use."
    ]
  },
  {
    id: "kpi-systems",
    label: "KPI Systems",
    shortLabel: "KPI",
    zone: "crown",
    domain: "analytics",
    focusDomain: "analytics",
    x: 842,
    y: 182,
    r: 16,
    hours: 1200,
    summary: "KPI systems translate data into performance conversations leaders can actually act on.",
    proof: [
      "Executive dashboards and planning reporting.",
      "Performance frameworks across multiple environments."
    ]
  },
  {
    id: "purview",
    label: "Purview",
    shortLabel: "Purview",
    zone: "river",
    domain: "governance",
    focusDomain: "governance",
    x: 218,
    y: 606,
    r: 16,
    hours: 900,
    summary: "Purview sits in the river because governance is not static. It flows through the estate as discovery, classification, stewardship, and AI readiness.",
    proof: [
      "Purview implementation at UniSC.",
      "PII discovery, classification, and governance visibility."
    ]
  },
  {
    id: "synapse",
    label: "Synapse",
    shortLabel: "Synapse",
    zone: "river",
    domain: "platform",
    focusDomain: "platform",
    x: 364,
    y: 622,
    r: 17,
    hours: 1700,
    summary: "Synapse is one of the strongest platform anchors in the current role, feeding warehouse capability and governed reporting.",
    proof: [
      "Azure Synapse as enterprise warehouse foundation.",
      "Architecture, optimisation, and delivery patterns."
    ]
  },
  {
    id: "databricks",
    label: "Databricks",
    shortLabel: "DBX",
    zone: "river",
    domain: "platform",
    focusDomain: "platform",
    x: 468,
    y: 650,
    r: 16,
    hours: 1100,
    summary: "Databricks represents the reusable engineering and transformation layer that deepened the platform branch.",
    proof: [
      "Workforce platform delivery with Databricks.",
      "Transformation and engineering workflows in cloud environments."
    ]
  },
  {
    id: "power-bi",
    label: "Power BI",
    shortLabel: "Power BI",
    zone: "river",
    domain: "analytics",
    focusDomain: "analytics",
    x: 584,
    y: 644,
    r: 17,
    hours: 2000,
    summary: "Power BI sits in the river as a visible expression of trusted data becoming adopted insight.",
    proof: [
      "Power BI modernisation and semantic models.",
      "Executive and institutional reporting products."
    ]
  },
  {
    id: "python",
    label: "Python",
    shortLabel: "Python",
    zone: "river",
    domain: "analytics",
    focusDomain: "analytics",
    x: 714,
    y: 618,
    r: 16,
    hours: 1500,
    summary: "Python represents the applied modelling, automation, and flexible analytical work that stretches across multiple contexts.",
    proof: [
      "Predictive models, pipelines, and ML-adjacent work.",
      "Applied across governance, analytics, and platform contexts."
    ]
  },
  {
    id: "sql",
    label: "SQL",
    shortLabel: "SQL",
    zone: "river",
    domain: "platform",
    focusDomain: "platform",
    x: 844,
    y: 604,
    r: 16,
    hours: 1900,
    summary: "SQL is one of the most repeated practical skills in the entire capability system and rightly sits in the main current of the river.",
    proof: [
      "Warehouse delivery, reporting, and integration work across many roles.",
      "Repeated use in both platform and analytics domains."
    ]
  },
  {
    id: "ai-readiness",
    label: "AI Readiness",
    shortLabel: "AI",
    zone: "sun",
    domain: "governance",
    focusDomain: "governance",
    x: 842,
    y: 82,
    r: 16,
    hours: 800,
    summary: "AI readiness belongs near the sun because it is part of the future-facing arc: classification, governance, risk, and modern platform maturity.",
    proof: [
      "ML-based classification and AI audit foundations.",
      "Governance work explicitly tied to AI readiness."
    ]
  },
  {
    id: "transformation",
    label: "Transformation",
    shortLabel: "Transform",
    zone: "sun",
    domain: "leadership",
    focusDomain: "leadership",
    x: 916,
    y: 48,
    r: 18,
    hours: 1100,
    summary: "Transformation sits in the sun because it is the future-facing synthesis of the rest of the tree: strategy, architecture, governance, data, people, and operating change.",
    proof: [
      "Data and digital transformation positioning across current materials.",
      "Repeated evidence of turning capability into organisational movement."
    ]
  },
  {
    id: "future-building",
    label: "Future Build",
    shortLabel: "Future",
    zone: "sun",
    domain: "architecture",
    focusDomain: "architecture",
    x: 988,
    y: 84,
    r: 16,
    hours: 900,
    summary: "This is the aspiration node. It is not title inflation. It represents the work of building coherent futures from real capability already grown in the tree.",
    proof: [
      "The architectural, platform, governance, and leadership branches already point here.",
      "The next-step story is built from substance, not rebranding."
    ]
  }
];

const skillConnections = [
  ["foundation", "rf-systems"],
  ["foundation", "testing-qa"],
  ["foundation", "regulatory"],
  ["foundation", "field-ops"],
  ["foundation", "andrei"],
  ["andrei", "core"],
  ["andrei", "bi-ops"],
  ["andrei", "institutional-reporting"],
  ["core", "team-performance"],
  ["core", "architecture"],
  ["core", "platform"],
  ["core", "leadership"],
  ["core", "governance"],
  ["core", "analytics"],
  ["architecture", "capability-maps"],
  ["architecture", "operating-models"],
  ["leadership", "executive-partnering"],
  ["leadership", "coaching"],
  ["leadership", "transformation"],
  ["governance", "stewardship"],
  ["governance", "ai-readiness"],
  ["analytics", "forecasting"],
  ["analytics", "kpi-systems"],
  ["foundation", "purview"],
  ["foundation", "synapse"],
  ["purview", "synapse"],
  ["synapse", "databricks"],
  ["databricks", "power-bi"],
  ["power-bi", "python"],
  ["python", "sql"],
  ["platform", "synapse"],
  ["platform", "databricks"],
  ["platform", "sql"],
  ["analytics", "power-bi"],
  ["analytics", "python"],
  ["analytics", "sql"],
  ["governance", "purview"],
  ["architecture", "future-building"],
  ["platform", "future-building"],
  ["analytics", "transformation"],
  ["governance", "transformation"],
  ["future-building", "transformation"],
  ["transformation", "ai-readiness"]
];

const hoursPerSquare = 100;
const bigWaffleCellTarget = capabilityData.reduce((sum, item) => sum + Math.round(item.hours / hoursPerSquare), 0);
const miniWaffleCellTarget = 50;
const domainRepresentativeNodes = {
  engineering: "foundation",
  architecture: "architecture",
  platform: "platform",
  leadership: "leadership",
  governance: "governance",
  analytics: "analytics"
};
const tenkProofData = [
  {
    id: "tenk-engineering",
    label: "Engineering foundations",
    hours: 2200,
    color: capabilityData.find((item) => item.id === "engineering").color
  },
  {
    id: "tenk-platform",
    label: "Platform delivery",
    hours: 2200,
    color: capabilityData.find((item) => item.id === "platform").color
  },
  {
    id: "tenk-analytics",
    label: "Analytics and reporting",
    hours: 2100,
    color: capabilityData.find((item) => item.id === "analytics").color
  },
  {
    id: "tenk-governance",
    label: "Governance and trust",
    hours: 1300,
    color: capabilityData.find((item) => item.id === "governance").color
  },
  {
    id: "tenk-leadership",
    label: "Leadership and coaching",
    hours: 1200,
    color: capabilityData.find((item) => item.id === "leadership").color
  },
  {
    id: "tenk-architecture",
    label: "Architecture framing",
    hours: 1000,
    color: capabilityData.find((item) => item.id === "architecture").color
  }
];
let selectedNodeId = "andrei";

const capabilityMap = new Map(capabilityData.map((item) => [item.id, item]));
const skillNodeMap = new Map(skillNodes.map((item) => [item.id, item]));
const connectionData = skillConnections.map(([sourceId, targetId]) => ({
  id: `${sourceId}-${targetId}`,
  sourceId,
  targetId,
  source: skillNodeMap.get(sourceId),
  target: skillNodeMap.get(targetId)
}));

function numberWithCommas(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getSelectedNode() {
  const node = skillNodeMap.get(selectedNodeId);
  if (node) {
    return node;
  }
  selectedNodeId = "andrei";
  return skillNodeMap.get(selectedNodeId);
}

function representativeNodeId(domainId) {
  return domainRepresentativeNodes[domainId] || "andrei";
}

function buildWaffleCells(items, targetCellCount) {
  const cells = [];

  items.forEach((item) => {
    const filledCells = Math.round(item.hours / hoursPerSquare);
    for (let index = 0; index < filledCells; index += 1) {
      cells.push({
        id: `${item.id}-${index}`,
        filled: true,
        color: item.color,
        label: item.label
      });
    }
  });

  while (cells.length < targetCellCount) {
    cells.push({
      id: `empty-${cells.length}`,
      filled: false,
      color: ""
    });
  }

  return cells.slice(0, targetCellCount);
}

function zoneLabel(zone) {
  return {
    root: "Root path",
    trunk: "Trunk path",
    crown: "Crown path",
    river: "River path",
    sun: "Sun path"
  }[zone] || "Skill path";
}

function resolveDomainId(node) {
  return node.focusDomain || node.domain;
}

function activeDomainId() {
  const node = getSelectedNode();
  return node ? resolveDomainId(node) : "platform";
}

function linkedNodeIds(targetId) {
  const connected = new Set([targetId]);
  skillConnections.forEach(([source, target]) => {
    if (source === targetId) {
      connected.add(target);
    }
    if (target === targetId) {
      connected.add(source);
    }
  });
  return connected;
}

function renderDetail() {
  const node = getSelectedNode();
  const domain = capabilityMap.get(resolveDomainId(node));
  const neighbours = skillConnections
    .filter(([source, target]) => source === node.id || target === node.id)
    .map(([source, target]) => source === node.id ? skillNodeMap.get(target) : skillNodeMap.get(source))
    .filter(Boolean);

  const hourLabel = node.metaText || `${numberWithCommas(node.hours)} estimated hours`;
  const root = document.getElementById("detail-panel");
  root.innerHTML = `
    <p class="eyebrow">${zoneLabel(node.zone)}</p>
    <h2>${node.label}</h2>
    <p class="detail-copy">${node.summary}</p>
    <div class="detail-pills">
      <span class="pill" style="border-color:${domain.color}55;color:${domain.color};">${hourLabel}</span>
      <span class="pill">${domain.label}</span>
      <span class="pill">${node.zone}</span>
    </div>
    <div class="detail-section">
      <h3>Story role</h3>
      <p class="detail-copy">${domain.metaphor}</p>
    </div>
    <div class="detail-section">
      <h3>Evidence anchors</h3>
      <ul>${node.proof.map((point) => `<li>${point}</li>`).join("")}</ul>
    </div>
    <div class="detail-section">
      <h3>Connected nodes</h3>
      <ul>${neighbours.map((item) => `<li>${item.label}</li>`).join("")}</ul>
    </div>
  `;
}

function connectionTone(source, target) {
  if (source.zone === "sun" || target.zone === "sun") {
    return getComputedStyle(document.documentElement).getPropertyValue("--sun").trim();
  }
  if (source.zone === "river" || target.zone === "river") {
    return getComputedStyle(document.documentElement).getPropertyValue("--water").trim();
  }
  return "#6b4a2d";
}

function connectionPath(source, target) {
  const x1 = source.x;
  const y1 = source.y;
  const x2 = target.x;
  const y2 = target.y;
  const midX = (x1 + x2) / 2;

  if (source.zone === "river" || target.zone === "river") {
    const bend = Math.max(y1, y2) + 22;
    return `M ${x1} ${y1} C ${midX} ${bend}, ${midX} ${bend}, ${x2} ${y2}`;
  }

  if (source.zone === "sun" || target.zone === "sun") {
    return `M ${x1} ${y1} C ${midX} ${Math.min(y1, y2) - 52}, ${midX} ${Math.min(y1, y2) - 52}, ${x2} ${y2}`;
  }

  if (source.zone === "root" || target.zone === "root") {
    const bend = Math.max(y1, y2) + 32;
    return `M ${x1} ${y1} C ${midX} ${bend}, ${midX} ${bend}, ${x2} ${y2}`;
  }

  if (source.zone === "crown" || target.zone === "crown") {
    const bend = Math.min(y1, y2) - 38;
    return `M ${x1} ${y1} C ${midX} ${bend}, ${midX} ${bend}, ${x2} ${y2}`;
  }

  return `M ${x1} ${y1} C ${x1} ${y1 - 28}, ${x2} ${y2 + 28}, ${x2} ${y2}`;
}

function renderSkillMap() {
  const svg = d3.select("#capability-tree");
  const linkLayer = svg.select("#skill-links");
  const nodeLayer = svg.select("#skill-nodes");

  linkLayer
    .selectAll("path.skill-link")
    .data(connectionData, (item) => item.id)
    .join("path")
    .attr("class", "skill-link")
    .attr("stroke", (item) => connectionTone(item.source, item.target))
    .attr("d", (item) => connectionPath(item.source, item.target))
    .attr("data-source", (item) => item.sourceId)
    .attr("data-target", (item) => item.targetId);

  const nodes = nodeLayer
    .selectAll("g.skill-node")
    .data(skillNodes, (item) => item.id)
    .join((enter) => {
      const group = enter
        .append("g")
        .attr("data-node", (item) => item.id)
        .attr("tabindex", 0)
        .attr("role", "button")
        .attr("aria-label", (item) => item.label)
        .attr("aria-pressed", "false")
        .attr("class", (item) => `skill-node ${item.r >= 23 ? "is-major" : "is-minor"}`)
        .attr("transform", (item) => `translate(${item.x} ${item.y})`);

      const stack = group.append("g").attr("class", "node-stack");
      stack.append("circle").attr("class", "node-aura");
      stack.append("circle").attr("class", "node-ring");
      stack.append("circle").attr("class", "node-core");
      stack.append("circle").attr("class", "node-gem");
      stack.append("text").attr("class", "node-caption");
      stack.append("text").attr("class", "node-hours");

      return group;
    });

  nodes
    .attr("class", (item) => `skill-node ${item.r >= 23 ? "is-major" : "is-minor"}`)
    .attr("transform", (item) => `translate(${item.x} ${item.y})`)
    .on("click", (_, item) => {
      selectedNodeId = item.id;
      syncSelection();
    })
    .on("keydown", (event, item) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectedNodeId = item.id;
        syncSelection();
      }
    })
    .each(function (item) {
      const stack = d3.select(this).select(".node-stack");
      const domain = capabilityMap.get(resolveDomainId(item));
      const showHours = item.r >= 23;

      stack.select(".node-aura")
        .attr("r", item.r + 12)
        .attr("fill", domain.color);

      stack.select(".node-ring")
        .attr("r", item.r + 4)
        .attr("stroke", domain.color);

      stack.select(".node-core")
        .attr("r", item.r);

      stack.select(".node-gem")
        .attr("r", Math.max(8, item.r * 0.56))
        .attr("fill", domain.color);

      stack.select(".node-caption")
        .attr("class", `node-caption ${showHours ? "inside" : ""}`.trim())
        .attr("x", 0)
        .attr("y", showHours ? -2 : item.r + 22)
        .text(item.shortLabel);

      stack.select(".node-hours")
        .style("display", showHours ? null : "none")
        .attr("x", 0)
        .attr("y", item.r + 36)
        .text(item.metaText || `${Math.round(item.hours / hoursPerSquare) * hoursPerSquare}h`);
    });
}

function renderBigWaffle() {
  const cells = buildWaffleCells(capabilityData, bigWaffleCellTarget);

  d3.select("#big-waffle")
    .selectAll("span.cell")
    .data(cells, (item) => item.id)
    .join("span")
    .attr("class", (item) => `cell${item.filled ? " filled" : ""}`)
    .style("background", (item) => item.filled ? item.color : null);

  const rows = d3.select("#overview-legend")
    .selectAll("div.legend-row")
    .data(capabilityData, (item) => item.id)
    .join((enter) => {
      const row = enter.append("div").attr("class", "legend-row");
      row.append("span").attr("class", "swatch");
      row.append("span").attr("class", "legend-label");
      row.append("strong");
      return row;
    });

  rows.select(".swatch").style("background", (item) => item.color);
  rows.select(".legend-label").text((item) => item.label);
  rows.select("strong").text((item) => `${numberWithCommas(item.hours)}h`);
}

function renderMiniWaffles() {
  const cards = d3.select("#mini-grid")
    .selectAll("article.mini-card")
    .data(capabilityData, (item) => item.id)
    .join((enter) => {
      const article = enter.append("article")
        .attr("class", "mini-card")
        .attr("data-card", (item) => item.id)
        .attr("role", "button")
        .attr("tabindex", 0)
        .attr("aria-pressed", "false")
        .attr("aria-label", (item) => item.label);

      article.append("h3");
      article.append("span").attr("class", "hours");
      article.append("p");
      article.append("div").attr("class", "mini-waffle");
      return article;
    });

  cards
    .on("click", (_, item) => {
      selectedNodeId = representativeNodeId(item.id);
      syncSelection();
    })
    .on("keydown", (event, item) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectedNodeId = representativeNodeId(item.id);
        syncSelection();
      }
    });

  cards.select("h3").text((item) => item.label);
  cards.select(".hours")
    .style("color", (item) => item.color)
    .text((item) => `${numberWithCommas(item.hours)}h`);
  cards.select("p").text((item) => item.subtitle);

  cards.each(function (item) {
    const filledCells = Math.round(item.hours / hoursPerSquare);
    const cells = Array.from({ length: miniWaffleCellTarget }, (_, index) => ({
      id: `${item.id}-${index}`,
      filled: index < filledCells,
      color: item.color
    }));

    d3.select(this)
      .select(".mini-waffle")
      .selectAll("span.cell")
      .data(cells, (entry) => entry.id)
      .join("span")
      .attr("class", (entry) => `cell${entry.filled ? " filled" : ""}`)
      .style("background", (entry) => entry.filled ? entry.color : null);
  });
}

function renderTenkProof() {
  const cells = buildWaffleCells(tenkProofData, 100);

  d3.select("#tenk-waffle")
    .selectAll("span.tenk-cell")
    .data(cells, (item) => item.id)
    .join("span")
    .attr("class", (item) => `tenk-cell${item.filled ? " filled" : ""}`)
    .style("--tone", (item) => item.filled ? item.color : null);

  const rows = d3.select("#tenk-legend")
    .selectAll("div.tenk-row")
    .data(tenkProofData, (item) => item.id)
    .join((enter) => {
      const row = enter.append("div").attr("class", "tenk-row");
      row.append("span").attr("class", "swatch");
      row.append("span").attr("class", "tenk-label");
      row.append("strong");
      return row;
    });

  rows.select(".swatch").style("background", (item) => item.color);
  rows.select(".tenk-label").text((item) => item.label);
  rows.select("strong").text((item) => `${numberWithCommas(item.hours)}h`);
}

function syncSelection() {
  const selectedNode = getSelectedNode();
  const selectedDomain = activeDomainId();
  const connected = linkedNodeIds(selectedNode.id);

  d3.select("#skill-nodes")
    .selectAll("g.skill-node")
    .classed("is-active", (item) => item.id === selectedNode.id)
    .classed("is-muted", (item) => !connected.has(item.id))
    .attr("aria-pressed", (item) => item.id === selectedNode.id ? "true" : "false");

  d3.select("#skill-links")
    .selectAll("path.skill-link")
    .classed("is-active", (item) => {
      const touchesSelection = item.sourceId === selectedNode.id || item.targetId === selectedNode.id;
      const neighbourConnected = connected.has(item.sourceId) && connected.has(item.targetId);
      return touchesSelection && neighbourConnected;
    })
    .classed("is-muted", (item) => {
      const touchesSelection = item.sourceId === selectedNode.id || item.targetId === selectedNode.id;
      const neighbourConnected = connected.has(item.sourceId) && connected.has(item.targetId);
      return !touchesSelection && !neighbourConnected;
    });

  d3.select("#mini-grid")
    .selectAll("article.mini-card")
    .classed("active", (item) => item.id === selectedDomain)
    .attr("aria-pressed", (item) => item.id === selectedDomain ? "true" : "false");

  d3.select("#skill-nodes")
    .selectAll("g.skill-node")
    .filter((item) => item.id === selectedNode.id)
    .raise();

  renderDetail();
}

renderSkillMap();
renderBigWaffle();
renderMiniWaffles();
renderTenkProof();
syncSelection();

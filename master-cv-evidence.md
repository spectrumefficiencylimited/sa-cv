# Master CV Evidence

Last updated: 2026-04-13
Workspace: `c:\Users\mstoian\R\sa-management`

Purpose: store grounded, source-backed CV evidence mined from this repo.

Evidence rules used in this file:
- `Explicit Evidence` means the repo contains direct attribution, exact Jira/email/PDP evidence, or a first-person statement tied to a named source.
- `Possible Evidence Requiring Validation` means the work is plausible and well-supported by artefacts, but direct authorship or final ownership is not fully explicit.
- Metrics are only included where the source states them.
- No strong repo-backed evidence has been captured yet for `Telecommunications and Systems Engineering`.

## Explicit Evidence

### BI engineering delivery standards -> Platform Engineering and Enablement

- Child evidence: Introduced BI developer standards and release gates
- Evidence statement: Authored a BI engineering standards document that requires technical solution review before build, peer approval before UAT, and pull requests for all `main` branch changes.
- Outcome / impact: Established repeatable engineering controls and clearer BAU handover expectations for BI delivery.
- Tools / methods / platforms: Jira, pull requests, technical solution review, peer review, BAU handover checklist
- Metrics / scale: Review within 2 business days; 1 peer approval required before UAT
- Source: `raw-data/confluence/BI-DEVELOPER-STANDARDS-DRAFT.md:2,41,77,79,165,205`
- Supporting text: "Author: Andrei Stoian - Manager, Business Intelligence"; "Review within 2 business days"; "Only proceeds to UAT deployment once reviewer has commented `PEER REVIEW APPROVED`"; "No direct commits to main. All changes via pull request."
- Confidence: High

### DWBI process assurance -> Data Governance and Trust Systems

- Child evidence: Audited the DWBI development process and identified missing control points
- Evidence statement: Documented that peer review, a developer handbook, and code review standards were missing, then recommended formal technical review and peer review gates.
- Outcome / impact: Created a concrete remediation path for delivery assurance and governance.
- Tools / methods / platforms: Process audit, Confluence, checklist design
- Metrics / scale: Not explicit
- Source: `raw-data/confluence/DWBI-DEVELOPMENT-PROCESS-AUDIT.md:21,82,85,106`
- Supporting text: "No peer review page exists. No developer handbook exists. No code review standard exists."; "Formalise this as a Confluence page: Technical Solution Review Checklist"; "Add a mandatory peer review step in the testing process"
- Confidence: High

### Azure cyber audit automation -> Platform Engineering and Enablement

- Child evidence: Built an automated V4 cyber security audit tool
- Evidence statement: Built a script that authenticates with Azure CLI, calls ARM REST APIs across core V4 components, evaluates control categories, and outputs Markdown plus JSON evidence.
- Outcome / impact: Replaced manual portal checking with repeatable evidence generation for cyber review.
- Tools / methods / platforms: Azure CLI, Azure ARM REST API, Markdown reporting, JSON evidence archive
- Metrics / scale: Synapse, ADF, 4 storage accounts, 15 private endpoints, 7 security control categories, about 2 minutes runtime
- Source: `raw-data/sent/Email-Ben-Butler-HERM-Compliance-Framework.md:17-27`
- Supporting text: "I built an automated audit tool"; "Calls the Azure ARM REST API to interrogate every V4 component"; "The script runs in ~2 minutes"; "No Portal clicking required."
- Confidence: High

### Compliance reference architecture -> Enterprise Data Architecture

- Child evidence: Designed a five-layer HERM compliance monitoring model
- Evidence statement: Framed a layered model linking HERM-DRM reference architecture to control objectives, standards, implementation templates, and continuous monitoring.
- Outcome / impact: Provided an architecture pattern for translating policy into auditable Azure controls.
- Tools / methods / platforms: HERM-DRM, CIS, NIST/ISO, ARM/Bicep, continuous monitoring
- Metrics / scale: 5 layers
- Source: `raw-data/sent/Email-Ben-Butler-HERM-Compliance-Framework.md:35-59`
- Supporting text: "Layer 1 - Reference Model (HERM-DRM)"; "Layer 5 - Monitoring (Continuous Automated Assessment)"
- Confidence: High

### V4 platform security assurance -> Data Governance and Trust Systems

- Child evidence: Produced V4 cyber audit findings and owned escalation actions
- Evidence statement: Audited the V4 data platform, recorded control status by severity, and documented concrete fail findings including overprivileged RBAC and missing diagnostic settings.
- Outcome / impact: Created an action-oriented security baseline for remediation.
- Tools / methods / platforms: Azure control review, audit findings report, escalation action register
- Metrics / scale: 167 resources audited; 126 PASS, 14 WARN, 14 FAIL, 13 MANUAL
- Source: `raw-data/andrei/V4-CYBER-AUDIT-FINDINGS.md:15-19,33,53,128`
- Supporting text: "Total 167 Resources audited"; "RBAC - Overprivileged Service Principals"; "No diagnostic settings configured - CRITICAL."; "IT Escalation Actions - Owner: Andrei Stoian"
- Confidence: High

### Security hardening governance -> Data Governance and Trust Systems

- Child evidence: Completed the V4 technical hardening assessment and closed the parent risk ticket
- Evidence statement: Recorded completion of the hardening assessment, confirmed mitigations, and split remaining operational work into tracked BAU sub-items.
- Outcome / impact: Reduced the recorded cyber risk position and formalised ongoing follow-through.
- Tools / methods / platforms: Jira, mitigation review, BAU decomposition
- Metrics / scale: Risk reduced from HIGH to MEDIUM; follow-up work tracked under `DWBIP-1681` to `DWBIP-1690`
- Source: `raw-data/andrei/JIRA-RETURN-PERIOD-EVIDENCE.md:186`
- Supporting text: "Technical Security Hardening assessment complete. Cyber risk reduced from HIGH to MEDIUM."
- Confidence: High

### Service governance -> Data Governance and Trust Systems

- Child evidence: Finalised and published a simplified V4 SLA framework
- Evidence statement: Closed out the SLA definition work after stakeholder review and publication of the simplified framework.
- Outcome / impact: Clarified service targets and formal governance expectations for the platform.
- Tools / methods / platforms: Jira, SLA framework documentation
- Metrics / scale: Not explicit
- Source: `raw-data/andrei/JIRA-RETURN-PERIOD-EVIDENCE.md:179`
- Supporting text: "V4 SLA definition finalised and reviewed with stakeholders. SLA targets documented and agreed. Simplified SLA framework published"
- Confidence: High

### TEQSA reporting evidence model -> Data Governance and Trust Systems

- Child evidence: Linked Data Portal reporting to HESF and TEQSA evidence requirements
- Evidence statement: Documented that the HESF Mapping Table maps Data Portal reports to HESF 2021 Level 3 standards and tied report metadata quality to TEQSA assessment readiness.
- Outcome / impact: Turned report metadata and compliance flagging into part of the evidence base for re-registration.
- Tools / methods / platforms: HESF Mapping Table, Power BI compliance flagging, Data Portal metadata governance
- Metrics / scale: About 50 reports mapped
- Source: `raw-data/andrei/JIRA-RETURN-PERIOD-EVIDENCE.md:92-103,339`
- Supporting text: "The HESF Mapping Table maps ~50 Data Portal reports to HESF 2021 Level 3 standards."; "Ensure Data Portal report descriptions and metadata are accurate - these will be referenced during TEQSA assessment."
- Confidence: High

### EFTSL forecasting pipeline ROI -> Decision Intelligence and Analytics

- Child evidence: Quantified forecasting pipeline accuracy and ROI
- Evidence statement: Summarised the forecasting pipeline's measured accuracy, estimated time savings, estimated value, development effort, and modelling/reporting work completed.
- Outcome / impact: Created a defensible case for the value of the forecasting work.
- Tools / methods / platforms: Time-series forecasting, feature engineering, validation, reporting, Power BI compatibility
- Metrics / scale: 99.55% accuracy; 400+ hours saved annually; $80,000+ estimated annual value; 184 development hours; 5 statistical models; 6 ML models; 10+ charts
- Source: `raw-data/emails/lei-emails.json:448`
- Supporting text: "99.55% forecast accuracy achieved on 2025 predictions"; "Estimated 400+ hours saved annually vs. manual forecasting"; "TOTAL DEVELOPMENT HOURS: 184 hours"; "Looks massive accuracy improvement achieved. Congratulations!"
- Confidence: Medium

### Forecast model validation -> Decision Intelligence and Analytics

- Child evidence: Validated LightGBM as the best-performing EFTSL forecast model
- Evidence statement: Recorded a model comparison exercise across statistical, ML, and ensemble methods, with LightGBM selected as the winning model against 2025 actuals.
- Outcome / impact: Provided a quantified basis for model choice.
- Tools / methods / platforms: ARIMA, ETS, Holt-Winters, Random Forest, XGBoost, LightGBM, ensemble methods
- Metrics / scale: 8 models tested; 0.45% MAPE; forecast 15,490 vs actual 15,420
- Source: `archive-docs/PIP_FORMAL_WRITTEN_RESPONSE.md:96-97,133,159`
- Supporting text: "Eight forecasting models tested and evaluated"; "LightGBM is the winning model with 0.45% MAPE"; "Phase 2 is complete"
- Confidence: Medium

### Stakeholder prioritisation and roadmap translation -> Leadership and Capability Building

- Child evidence: Led survey data prioritisation and converted decisions into roadmap and Jira actions
- Evidence statement: Authored the meeting notes, confirmed survey priority order with stakeholders, and moved majors/minors into DNA Roadmap Stage 2 with follow-up actions assigned.
- Outcome / impact: Turned stakeholder discussion into an actionable delivery sequence.
- Tools / methods / platforms: Stakeholder facilitation, roadmap management, Jira action tracking
- Metrics / scale: Priority order explicitly set across 7 survey/reporting streams
- Source: `raw-data/teams-meeting-notes/survey-data-integration-meeting-notes-2026.md:4,67,69,109,171,202,209,221`
- Supporting text: "Author: Andrei Stoian"; "Consult Tamara O'Keefe on survey data prioritisation order"; "Survey priority order confirmed: SES -> GOS -> eVALU8 -> GOS-L -> GOS Benchmarking -> SES Benchmarking -> National"
- Confidence: High

### Team performance management -> Leadership and Capability Building

- Child evidence: Ran 2026 PDP progress reviews across the BI team
- Evidence statement: Set a due date, named team members, required review of progress entries, and specified escalation through the management line if concerns emerged.
- Outcome / impact: Formalised performance and goal follow-up across the team.
- Tools / methods / platforms: Jira PDP tickets, review workflow
- Metrics / scale: 4 team members named
- Source: `raw-data/andrei/JIRA-RETURN-PERIOD-EVIDENCE.md:193`
- Supporting text: "Complete 2026 PDP progress reviews for all team members: Paul Butler, Marie Foster, Rashmi Belavadi, Darin Lee"
- Confidence: High

### Engineering capability uplift -> Leadership and Capability Building

- Child evidence: Set concrete uplift goals for a senior data engineer
- Evidence statement: Used PDP planning to push observability, schema governance, and design-review discipline into named engineering goals for GOS, Canvas, and survey work.
- Outcome / impact: Built reusable team capability rather than only task delivery.
- Tools / methods / platforms: PDP coaching, structured logging, schema contracts, drift alerts, design review
- Metrics / scale: Q2 and Q3 2026 milestones
- Source: `raw-data/pdp/darin-lee-pdp-2026-notes.md:3,61,77,125,200`
- Supporting text: "Manager: Andrei Stoian"; "structured log output that identifies root cause"; "enforced schema contracts with drift detection alerts"; "design documented and reviewed with Andrei"
- Confidence: High

### Reporting definition governance -> Data Governance and Trust Systems

- Child evidence: Clarified the definition of commencing students in Jira
- Evidence statement: Captured a plain-language definition of commencing students by year of first study within Jira evidence used for reporting work.
- Outcome / impact: Supported more consistent interpretation of a reporting term with funding and compliance implications.
- Tools / methods / platforms: Jira, reporting definition clarification
- Metrics / scale: Not explicit
- Source: `raw-data/andrei/JIRA-RETURN-PERIOD-EVIDENCE.md:213`
- Supporting text: "commencing students are those who began studying in that year of study"
- Confidence: High

## Possible Evidence Requiring Validation

### Confluence information architecture -> Enterprise Data Architecture

- Child evidence: Proposed a full restructure of the SIAU Confluence wiki
- Evidence statement: The repo contains a detailed proposal to reduce page sprawl, apply taxonomy, enforce ownership, and create a domain registry, but authorship is not explicit in the file.
- Outcome / impact: Would materially improve architecture communication and findability if confirmed as your work.
- Tools / methods / platforms: Confluence information architecture, taxonomy, ownership model, domain registry
- Metrics / scale: 319 pages to about 165 pages; 33 empty shells; about 98% unlabeled
- Source: `raw-data/confluence/WIKI-RESTRUCTURE-PROPOSAL.md:7,31,32,35,50,166,173`
- Supporting text: "3-click rule"; "Single source of truth"; "Owner on every page"; "Net result: 319 -> ~165 pages (48% reduction)"
- Confidence: Medium

### Integration option framing -> Enterprise Data Architecture

- Child evidence: Documented Azure integration options under landing-zone constraints
- Evidence statement: The Jira export contains a technical analysis comparing Logic App Standard, Consumption, and Power Automate, but it explicitly says the analysis was by Darin and documented by Andrei.
- Outcome / impact: Shows architectural communication and option framing, but technical authorship is shared.
- Tools / methods / platforms: Logic Apps, Power Automate, Private Endpoints, exception-based architecture decisioning
- Metrics / scale: Not explicit
- Source: `raw-data/jira-all-stories.json:6873`
- Supporting text: "Analysis by Darin Lee (DW Engineer). Documented by Andrei Stoian."; "Private Endpoint support is mandatory."; "the simplest resolution is to request IT approve Logic App Consumption as a named exception"
- Confidence: Medium

### Data freshness audit automation -> Platform Engineering and Enablement

- Child evidence: Repo contains an automated freshness audit for ADLS-backed data layers
- Evidence statement: A Node script checks ADLS Gen2 timestamps and writes Markdown and JSON reports; the captured report flagged stale tables across Bronze, Silver, Gold, and Datamart, but authorship is not explicit.
- Outcome / impact: Strong evidence of reusable platform monitoring if confirmed as your work.
- Tools / methods / platforms: Node.js, ADLS Gen2 REST API, Markdown, JSON
- Metrics / scale: 42 tables missing fresh data on 2026-04-08
- Source: `audit-data-freshness.js:5,19,67,97,422,425` and `raw-data/freshness-audit/freshness-2026-04-08.md:7,62,88,140,179`
- Supporting text: "Last-Modified timestamp via the ADLS Gen2 REST API"; "ACTION REQUIRED - 42 table(s) missing fresh data"
- Confidence: Medium

### Data completeness audit automation -> Platform Engineering and Enablement

- Child evidence: Repo contains a stateful completeness audit for dataset shrinkage
- Evidence statement: A script compares current file counts with a saved prior snapshot and writes audit outputs; the captured run reported a clean state, but authorship is not explicit.
- Outcome / impact: Strong evidence of pipeline assurance automation if confirmed as your work.
- Tools / methods / platforms: Node.js, state snapshot comparison, Markdown, JSON
- Metrics / scale: 118 tables stable or growing on 2026-03-26
- Source: `audit-data-completeness.js:14,16,27,31,190,394,397` and `raw-data/completeness/completeness-2026-03-26.md:7`
- Supporting text: "Compare to previous run's snapshot"; "ALL CLEAR - 118 tables stable or growing"
- Confidence: Medium

## Best CV-Ready Bullets

- Authored BI developer standards that introduced technical review, peer-review approval, and pull-request controls for DWBI delivery.
- Established a PR-only `main` branch process with mandatory peer approval before UAT, tightening change governance for BI releases.
- Audited the DWBI development process, identified missing peer review and code review controls, and defined the remediation path.
- Built an automated Azure V4 cyber audit tool that scanned Synapse, ADF, storage, and private endpoints and produced evidence-backed results in about two minutes.
- Designed a five-layer HERM compliance architecture linking reference model, control objectives, standards, implementation templates, and continuous monitoring.
- Audited the V4 data platform across 167 resources and documented 14 FAIL and 14 WARN findings, including overprivileged RBAC and missing diagnostic settings.
- Completed the V4 technical hardening assessment and reduced the recorded cyber risk position from HIGH to MEDIUM.
- Finalised and published a simplified V4 SLA framework, clarifying service targets and governance expectations with stakeholders.
- Mapped about 50 Data Portal reports to HESF 2021 Level 3 standards, strengthening TEQSA evidence and report metadata discipline.
- Quantified the EFTSL forecasting pipeline at 99.55% accuracy with an estimated 400+ hours saved annually and $80k+ annual value.
- Tested eight forecasting approaches and selected LightGBM as the top-performing EFTSL model at 0.45% MAPE against 2025 actuals.
- Led survey data prioritisation with internal stakeholders and Tamara, setting the delivery order across SES, GOS, eVALU8, benchmarking, and national datasets.
- Converted survey prioritisation decisions into roadmap and Jira actions, including moving majors/minors into DNA Roadmap Stage 2.
- Ran 2026 PDP progress reviews across four BI team members, formalising performance follow-up and escalation.
- Set concrete engineering uplift goals for a senior data engineer across observability, schema drift detection, and design review.

## Template For New Entries

### [Domain] -> [Father capability]

- Child evidence:
- Evidence statement:
- Outcome / impact:
- Tools / methods / platforms:
- Metrics / scale:
- Source:
- Supporting text:
- Confidence:

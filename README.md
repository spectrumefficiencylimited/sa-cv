# sa-cv

This repo now has a simple working structure for keeping your base portfolio separate from role-specific applications.

## Workspace

- `Cv/`
  - Base CV assets, capability tree, and the D3 portfolio of skills.
- `Cover/`
  - Reusable cover letter template and cover-specific writing guidance.
- `jobs/`
  - One folder per target role, with the JD, CV focus notes, and tailored cover material kept together.

## Start Here

- Open [Cv/index.html](/c:/Users/mstoian/R/sa-cv/Cv/index.html) in a browser to view the capability portfolio.
- Use [Cv/master_capability_tree.md](/c:/Users/mstoian/R/sa-cv/Cv/master_capability_tree.md) as the truth layer for tailoring.
- Use [Cv/base_cv_template.md](/c:/Users/mstoian/R/sa-cv/Cv/base_cv_template.md) as the human CV base.
- Use [Cover/cover_letter_template.md](/c:/Users/mstoian/R/sa-cv/Cover/cover_letter_template.md) for role-specific covers.
- Create each new application from [jobs/_template/README.md](/c:/Users/mstoian/R/sa-cv/jobs/_template/README.md).

## Current Seeded Job Pack

- [jobs/Bolton_Clarke_Head_of_Data_Analytics_Insights/README.md](/c:/Users/mstoian/R/sa-cv/jobs/Bolton_Clarke_Head_of_Data_Analytics_Insights/README.md)

## Notes

- Existing root-level files have been left in place so none of your current work is disrupted.
- Going forward, the clean workflow is:
  1. Keep the long-form truth in `Cv/`
  2. Draft the cover in `Cover/`
  3. Save each tailored application in its own `jobs/<role>/` folder

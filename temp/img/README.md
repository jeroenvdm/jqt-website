# Images and diagrams for the agile series

Diagrams are kept as Mermaid source (`.mmd`) rather than exported images. The site already renders
Mermaid (added in commit `5d69b2e`), so at rework time the contents of a `.mmd` file can be pasted
straight into a fenced ```mermaid block in the post — no export step, and the diagram stays
editable.

Raster images (hero photos) go here as well when chosen. Existing posts use `/images/*.jpg` served
from `static/images/`, referenced via the `image:` front matter field — so any hero picked for these
posts must be moved to `static/images/` at rework time, not left in this folder.

## Contents

- `dependency-growth.mmd` — coordination edges as team count grows (post 5)
- `scaling-decision-tree.mmd` — decision guide (post 9)

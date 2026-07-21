from PIL import Image
from pathlib import Path

out = Path(r"C:\Users\Azahel De Jesus\Desktop\MENUS-RESTAURANT-PROYECTOS\axkan-menu\public\axkan\products")
out.mkdir(parents=True, exist_ok=True)

sheets = [
    (r"C:\Users\Azahel De Jesus\.codex\generated_images\019f82f2-2b84-7843-9c53-0022c7c50677\exec-32a4ba11-6ae7-44e9-aa23-bf5c2a072ca7.png", 2, ["alitas", "hamburguesas"]),
    (r"C:\Users\Azahel De Jesus\.codex\generated_images\019f82f2-2b84-7843-9c53-0022c7c50677\exec-847765c6-696e-4c59-9577-6c2e380236a1.png", 3, ["hot-dogs", "papas", "snacks"]),
    (r"C:\Users\Azahel De Jesus\.codex\generated_images\019f82f2-2b84-7843-9c53-0022c7c50677\exec-21526b29-885a-4c27-b06e-f78ee4822398.png", 3, ["chow-mein", "burritos", "baguette"]),
    (r"C:\Users\Azahel De Jesus\.codex\generated_images\019f82f2-2b84-7843-9c53-0022c7c50677\exec-bd686adf-a918-4ff6-a6f5-94e1bd16f858.png", 3, ["bebidas-calientes", "bebidas", "micheladas"]),
    (r"C:\Users\Azahel De Jesus\.codex\generated_images\019f82f2-2b84-7843-9c53-0022c7c50677\exec-cab5b02e-dbe1-4c1f-b4c5-af7a2d91d9fd.png", 3, ["cantaritos", "cocteleria", "shots"]),
]

for source, rows, names in sheets:
    im = Image.open(source).convert("RGB")
    cell_w = im.width // 3
    cell_h = im.height // rows
    for row, name in enumerate(names):
        for col in range(3):
            crop = im.crop((
                col * cell_w,
                row * cell_h,
                im.width if col == 2 else (col + 1) * cell_w,
                im.height if row == rows - 1 else (row + 1) * cell_h,
            ))
            crop.save(out / f"{name}-{col + 1}.webp", "WEBP", quality=86, method=6)

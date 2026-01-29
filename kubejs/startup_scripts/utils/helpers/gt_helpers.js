// priority: 1000

global.getGtMaterial = (item) => {
  const ms = ChemicalHelper["getMaterialStack(net.minecraft.world.item.ItemStack)"](
    item instanceof Item ? item : Item.of(item)
  );
  if (!ms || ms.isEmpty()) return null;
  return ms;
};

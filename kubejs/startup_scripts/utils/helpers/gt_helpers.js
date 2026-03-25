// priority: 1000

global.getGtMaterial = (item) => {
  const ms = ChemicalHelper["getMaterialStack(net.minecraft.world.item.ItemStack)"](
    item instanceof Item ? item : Item.of(item)
  );
  if (!ms || ms.isEmpty()) return null;
  return ms;
};

global.coilMachineTempDisplay = (controller, components) => {
            if (controller instanceof $CoiledMulti && controller.isFormed()) {
                components.add(
                    Component.translatable("gtceu.multiblock.blast_furnace.max_temperature",
                        Component.literal("§c" + 
                            $FormattingUtil.formatNumbers(
                                controller.getCoilType().getCoilTemperature() + 100 * Math.max(0, controller.getTier() - GTValues.MV)
                            ) + "K§r"
                        )
                    )
                );
            }
        };

var scriptName='HealthHUD';var scriptVersion=1.0;var scriptAuthor='Jiang Mingxi';var Fonts=Java.type("net.ccbluex.liquidbounce.ui.font.Fonts");var GL11=Java.type("org.lwjgl.opengl.GL11");var ScaledResolution=Java.type("net.minecraft.client.gui.ScaledResolution");var Gui=Java.type("net.minecraft.client.gui.Gui");var GuiInventory=Java.type("net.minecraft.client.gui.inventory.GuiInventory");var LiquidBounce=Java.type("net.ccbluex.liquidbounce.LiquidBounce");var Color=Java.type("java.awt.Color");var EntityPlayer=Java.type("net.minecraft.entity.player.EntityPlayer");function HealthHUD(){this.getName=function(){return 'HealthHUD'};this.getDescription=function(){return 'youtu.be/dQw4w9WgXcQ'};this.getCategory=function(){return 'Render'};this.onEnable=function(){};function toPercent(num,total){return(Math.round(num/total*100));}
this.onRender2D=function(){{var halfWidth=new ScaledResolution(mc).getScaledWidth()/2;var halfHeight=new ScaledResolution(mc).getScaledHeight()/2;var maxhealth=mc.thePlayer.getMaxHealth().toFixed(1);var health=mc.thePlayer.getHealth().toFixed(0);var maxhealth=mc.thePlayer.getMaxHealth().toFixed(1);var mcplayer=mc.thePlayer;var armor=mc.thePlayer.getTotalArmorValue().toFixed(0);var food=mc.thePlayer.getFoodStats().getFoodLevel().toFixed(0);var BGColor=new Color(23,23,25,203).getRGB();var BGColorshadow=new Color(23,23,25,155).getRGB();GL11.glPushMatrix();Gui.drawRect(halfWidth+15,halfHeight+44,halfWidth+190,halfHeight+83,BGColor);Gui.drawRect(halfWidth+16,halfHeight+45,halfWidth+191,halfHeight+84,BGColorshadow);mc.fontRendererObj.drawStringWithShadow(mc.thePlayer.getName(),halfWidth+50,halfHeight+44,0xFFFFFF);mc.fontRendererObj.drawStringWithShadow("❤: "+toPercent(health,maxhealth)+"%",halfWidth+50,halfHeight+54,0x00FF00);Gui.drawRect(halfWidth+88,halfHeight+55,halfWidth+100+88,halfHeight+62,new Color(0,0,0,120).getRGB());IntHPRed=value.createInteger("red",255-health/maxhealth*255,0,255);IntHPGreen=value.createInteger("green",health/maxhealth*255,0,255)
Gui.drawRect(halfWidth+88,halfHeight+55,halfWidth+toPercent(health,maxhealth)+88,halfHeight+62,new Color(IntHPRed.get(),IntHPGreen.get(),32).getRGB());IntHPRed=value.createInteger("red",255-health/maxhealth*255,0,255);IntHPGreen=value.createInteger("green",health/maxhealth*255,0,255)
Gui.drawRect(halfWidth+89,halfHeight+56,halfWidth+toPercent(health,maxhealth)+89,halfHeight+63,new Color(IntHPRed.get(),IntHPGreen.get(),32,180).getRGB());mc.fontRendererObj.drawStringWithShadow("✙: "+toPercent(armor,20)+"%",halfWidth+50,halfHeight+64,0x787878);Gui.drawRect(halfWidth+88,halfHeight+65,halfWidth+100+88,halfHeight+72,new Color(0,0,0,120).getRGB());Gui.drawRect(halfWidth+88,halfHeight+65,halfWidth+toPercent(armor,20)+88,halfHeight+72,new Color(120,120,120).getRGB());Gui.drawRect(halfWidth+89,halfHeight+66,halfWidth+toPercent(armor,20)+89,halfHeight+73,new Color(120,120,120,180).getRGB());mc.fontRendererObj.drawStringWithShadow("✤: "+toPercent(food,20)+"%",halfWidth+50,halfHeight+74,0xFFDD78);Gui.drawRect(halfWidth+88,halfHeight+75,halfWidth+100+88,halfHeight+82,new Color(0,0,0,120).getRGB());Gui.drawRect(halfWidth+88,halfHeight+75,halfWidth+toPercent(food,20)+88,halfHeight+82,new Color(255,221,120).getRGB());Gui.drawRect(halfWidth+89,halfHeight+76,halfWidth+toPercent(food,20)+89,halfHeight+83,new Color(255,221,120,180).getRGB());GL11.glPopMatrix();drawFace(mcplayer,halfWidth+20,halfHeight+50);{var movex=-mc.thePlayer.hurtTime*4
var movey=(-Math.cos(mc.thePlayer.hurtTime/20)-1)*135
var dmgalpha=mc.thePlayer.hurtTime*105489734258973689734
var xalpha=dmgalpha.toString(16);if(mc.thePlayer.hurtTime<=10){mc.fontRendererObj.drawString("§c-❤",(halfWidth+70+movex),(halfHeight+295+movey),"0xFFFFFF"+xalpha);}}}};}
function drawFace(mcplayer,x,y){mc.getTextureManager().bindTexture(mcplayer.getLocationSkin());GL11.glEnable(GL11.GL_BLEND);GL11.glColor4f(1,1-mc.thePlayer.hurtTime/10,1-mc.thePlayer.hurtTime/10,1);Gui.drawScaledCustomSizeModalRect(x,y,8,8,8,8,27,27,64,64);GL11.glDisable(GL11.GL_BLEND);}
var HealthHUD=new HealthHUD();var HealthHUDClient;function onLoad(){}
function onEnable(){HealthHUDClient=moduleManager.registerModule(HealthHUD);}
function onDisable(){moduleManager.unregisterModule(HealthHUDClient);}
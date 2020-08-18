// Desktop Studio
// Auto-generated declaration file : do not modify !



var POPUPS = POPUPS || ctx.addApplication('POPUPS');



var SAPLogon760 = ctx.addApplication('SAPLogon760', {"nature":"UIAUTOMATION","path":"C:\\Program Files (x86)\\SAP\\FrontEnd\\SapGui\\saplogon.exe"});

SAPLogon760.pSAP = SAPLogon760.addPage('pSAP', {"comment":"GuiMainWindow - SAP","nature":"SAPGUI","customType":"GuiMainWindow"});
SAPLogon760.pSAP.ed集团 = SAPLogon760.pSAP.addItem('ed集团', {"customType":"GuiTextField"});
SAPLogon760.pSAP.ed用户 = SAPLogon760.pSAP.addItem('ed用户', {"customType":"GuiTextField"});
SAPLogon760.pSAP.o密码 = SAPLogon760.pSAP.addItem('o密码', {"customType":"GuiPasswordField"});
SAPLogon760.pSAP.ed欢迎登录物产中大集团SAPERP = SAPLogon760.pSAP.addItem('ed欢迎登录物产中大集团SAPERP', {"mustExist":true,"customType":"GuiTextField"});
SAPLogon760.pSAP.btGuiButton = SAPLogon760.pSAP.addItem('btGuiButton', {"customType":"GuiButton"});

SAPLogon760.pAR = SAPLogon760.addPage('pAR', {"comment":"GuiMainWindow - SAP 轻松访问","nature":"SAPGUI","customType":"GuiMainWindow"});
SAPLogon760.pAR.oGuiOkCodeField = SAPLogon760.pAR.addItem('oGuiOkCodeField', {"mustExist":true,"customType":"GuiOkCodeField"});
SAPLogon760.pAR.btGuiButton = SAPLogon760.pAR.addItem('btGuiButton', {"mustExist":true,"customType":"GuiButton"});
SAPLogon760.pAR.bt创建角色 = SAPLogon760.pAR.addItem('bt创建角色', {"mustExist":true,"customType":"GuiButton"});
SAPLogon760.pAR.bt其它菜单 = SAPLogon760.pAR.addItem('bt其它菜单', {"mustExist":true,"customType":"GuiButton"});

SAPLogon760.pAR2 = SAPLogon760.addPage('pAR2', {"comment":"GuiMainWindow - 应收账款重分类","nature":"SAPGUI","customType":"GuiMainWindow"});
SAPLogon760.pAR2.ed公司代码 = SAPLogon760.pAR2.addItem('ed公司代码', {"customType":"GuiCTextField"});
SAPLogon760.pAR2.ed评估日期 = SAPLogon760.pAR2.addItem('ed评估日期', {"customType":"GuiCTextField"});
SAPLogon760.pAR2.ed总帐科目 = SAPLogon760.pAR2.addItem('ed总帐科目', {"mustExist":true,"customType":"GuiCTextField"});
SAPLogon760.pAR2.ed到 = SAPLogon760.pAR2.addItem('ed到', {"mustExist":true,"customType":"GuiCTextField"});
SAPLogon760.pAR2.ed凭证日期 = SAPLogon760.pAR2.addItem('ed凭证日期', {"customType":"GuiCTextField"});
SAPLogon760.pAR2.ed过帐日期 = SAPLogon760.pAR2.addItem('ed过帐日期', {"customType":"GuiCTextField"});
SAPLogon760.pAR2.ed冲销日期 = SAPLogon760.pAR2.addItem('ed冲销日期', {"customType":"GuiCTextField"});
SAPLogon760.pAR2.o区分利润中心内部考核的管理评估 = SAPLogon760.pAR2.addItem('o区分利润中心内部考核的管理评估', {"customType":"GuiRadioButton"});
SAPLogon760.pAR2.ed利润中心 = SAPLogon760.pAR2.addItem('ed利润中心', {"customType":"GuiCTextField"});
SAPLogon760.pAR2.btGuiButton = SAPLogon760.pAR2.addItem('btGuiButton', {"customType":"GuiButton"});
SAPLogon760.pAR2.oGuiOkCodeField = SAPLogon760.pAR2.addItem('oGuiOkCodeField', {"customType":"GuiOkCodeField"});
SAPLogon760.pAR2.btGuiButton1 = SAPLogon760.pAR2.addItem('btGuiButton1', {"customType":"GuiButton"});

SAPLogon760.pAR3 = SAPLogon760.addPage('pAR3', {"comment":"GuiMainWindow - 应收账款重分类","nature":"SAPGUI","customType":"GuiMainWindow"});
SAPLogon760.pAR3.bt生成分类凭证 = SAPLogon760.pAR3.addItem('bt生成分类凭证', {"customType":"GuiButton"});
SAPLogon760.pAR3.bt按科目汇总 = SAPLogon760.pAR3.addItem('bt按科目汇总', {"mustExist":true,"customType":"GuiButton"});
SAPLogon760.pAR3.oPane = SAPLogon760.pAR3.addItem('oPane', {"mustExist":true,"customType":"GUIGridViewPane"});
SAPLogon760.pAR3.btGuiButton = SAPLogon760.pAR3.addItem('btGuiButton', {"customType":"GuiButton"});

SAPLogon760.pAR4 = SAPLogon760.addPage('pAR4', {"comment":"GuiModalWindow - 过账结果显示","nature":"SAPGUI","customType":"GuiModalWindow"});
SAPLogon760.pAR4.bt取消 = SAPLogon760.pAR4.addItem('bt取消', {"customType":"GuiButton"});

SAPLogon760.pWindowSAPLogon76 = SAPLogon760.addPage('pWindowSAPLogon76', {"comment":"Window - SAP Logon 760"});
SAPLogon760.pWindowSAPLogon76.stS4QAS = SAPLogon760.pWindowSAPLogon76.addItem('stS4QAS');

GLOBAL.events.START.on(function(ev) { 
    GLOBAL.createExtendedConnector(e.extendedConnector.UIAutomation, '', '', '');
});

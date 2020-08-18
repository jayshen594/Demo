<?xml version="1.0" encoding="utf-8"?>
<ConteXtorStudio Version="Desktop Studio 2.0.2.131" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" noNamespaceSchemaLocation="XsdStudio.xsd">
	<UpdatePackages />
	<Evolutions>
		<Evolution Version="1.0" Date="2020/8/10"><![CDATA[Project creation]]></Evolution>
		<Evolution Version="..." Date="..."><![CDATA[...]]></Evolution>
	</Evolutions>
	<PROCESSUS>
		<PROCESS Name="GLOBAL" Key="NoKey" Comment="Global Processus" CtxtId="44be7cff-93d1-4aff-a8fb-54748e5c6d6d">
			<_DECLAREVAR>
				<STRUCTUREDON Name="GLOBAL">
					<OBJDON Name="PrjVersion">1.0</OBJDON>
					<OBJDON Name="PrjClient"><![CDATA[ZFIE0030A]]></OBJDON>
					<OBJDON Name="PrjName">ZFIE0030A</OBJDON>
					<OBJDON Name="PrjDate">2020/8/10</OBJDON>
					<OBJDON Name="PrjLabel"><![CDATA[ZFIE0030A]]></OBJDON>
					<OBJDON Name="PrjComment"><![CDATA[]]></OBJDON>
					<OBJDON Name="LicenceURL" />
					<STRUCTUREDON Name="Xc_MessBoxHtml">
						<OBJDON Name="Style">style="font-size:12pt;font-family:'Arial'"</OBJDON>
						<OBJDON Name="ErrColor">white</OBJDON>
						<OBJDON Name="InfoColor">white</OBJDON>
						<OBJDON Name="ChoiceColor">white</OBJDON>
						<OBJDON Name="WarningColor">white</OBJDON>
						<OBJDON Name="ErrIcon">Critical.gif</OBJDON>
						<OBJDON Name="InfoIcon">Info.gif</OBJDON>
						<OBJDON Name="ChoiceIcon">Pencil.gif</OBJDON>
						<OBJDON Name="WarningIcon">Warning.gif</OBJDON>
						<OBJDON Name="StyleButton">style="font-size:12px;font-family:'Arial';width:80px"</OBJDON>
						<OBJDON Name="StyleText">style="font-size=11pt;font-family='Arial'"</OBJDON>
						<OBJDON Name="IconSize">32</OBJDON>
					</STRUCTUREDON>
				</STRUCTUREDON>
			</_DECLAREVAR>
			<SCRIPTS>
				<SCRIPT Name="Constants" Src="lib\common\ctx.enum.js" Folder="Framework" />
				<SCRIPT Name="Ctx Core" Src="lib\ctx\ctx.core.js" Folder="Framework" />
				<SCRIPT Name="Ctx XML" Src="lib\ctx\ctx.xml.js" Folder="Framework" />
				<SCRIPT Name="Ctx Scenario" Src="lib\ctx\ctx.scenario.js" Folder="Framework" />
				<SCRIPT Name="Ctx Request" Src="lib\ctx\ctx.request.js" Folder="Framework" />
				<SCRIPT Name="Ctx Language" Src="lib\ctx\ctx.language.js" Folder="Framework" />
				<SCRIPT Name="Ctx Item" Src="lib\ctx\ctx.item.js" Folder="Framework" />
				<SCRIPT Name="Ctx Page" Src="lib\ctx\ctx.page.js" Folder="Framework" />
				<SCRIPT Name="Ctx Application" Src="lib\ctx\ctx.application.js" Folder="Framework" />
				<SCRIPT Name="Ctx Systray" Src="lib\ctx\ctx.systray.js" Folder="Framework" />
				<SCRIPT Name="Ctx Popup" Src="lib\ctx\ctx.popup.js" Folder="Framework" />
				<SCRIPT Name="Ctx Popup Bootstrap" Src="lib\ctx\ctx.popup.bootbox.js" Folder="Framework" />
				<SCRIPT Name="FSO library" Src="lib\utils\fso.js" Folder="Framework" />
				<SCRIPT Name="WMI library" Src="lib\utils\wmi.js" Folder="Framework" />
				<SCRIPT Name="WScript library" Src="lib\utils\wscript.js" Folder="Framework" />
				<SCRIPT Name="Ctx Diagnostic" Src="lib\ctx\ctx.diagnostic.js" Folder="Framework" />
				<SCRIPT Name="Ctx Galaxy" Src="lib\galaxy\galaxy.m2m.js" Folder="Framework" />
				<SCRIPT Name="Excel" Comment="Microsoft Excel Integration" Folder="Microsoft Office" Src="lib\office\excel.js" />
				<SCRIPT Name="SAP" Comment="SAP GUI Scripting" Folder="CRM Applications" Src="lib\sap\sapscripting.js" />
				<SCRIPT Name="SAP UI5" Src="lib\sapui5\sapui5.js" Folder="Framework" />
				<SCRIPT Name="Entities" Src="entities.js" IsWorkflowGenerated="Y" />
				<SCRIPT Name="Declarations" Src="zfie0030a.resources.js" ReadOnly="Y" />
				<SCRIPT Name="Labels" Src="labels.js" />
				<SCRIPT Name="Global" Src="global.js" />
				<SCRIPT Src="zfie0030a.js" IsWorkflowGenerated="Y" />
			</SCRIPTS>
			<RESOURCES>
				<RESOURCE Name="popup" Src="%sdk%\templates\resources\popup\" Dest="popup" />
				<RESOURCE Name="agent16px" Src="%sdk%\templates\resources\bmp\agent.png" Dest="bmp" />
				<RESOURCE Name="accept16px" Src="%sdk%\templates\resources\bmp\accept.png" Dest="bmp" />
				<RESOURCE Name="cancel16px" Src="%sdk%\templates\resources\bmp\cancel.png" Dest="bmp" />
				<RESOURCE Name="help16px" Src="%sdk%\templates\resources\bmp\help.png" Dest="bmp" />
				<RESOURCE Name="information16px" Src="%sdk%\templates\resources\bmp\information.png" Dest="bmp" />
				<RESOURCE Name="repeat16px" Src="%sdk%\templates\resources\bmp\repeat.png" Dest="bmp" />
				<RESOURCE Name="stop16px" Src="%sdk%\templates\resources\bmp\stop.png" Dest="bmp" />
				<RESOURCE Name="warning16px" Src="%sdk%\templates\resources\bmp\warning.png" Dest="bmp" />
				<RESOURCE Name="record16px" Src="%sdk%\templates\resources\bmp\record.png" Dest="bmp" />
				<RESOURCE Name="agent32px" Src="%sdk%\templates\resources\bmp32\agent.png" Dest="bmp32" />
				<RESOURCE Name="accept32px" Src="%sdk%\templates\resources\bmp32\accept.png" Dest="bmp32" />
				<RESOURCE Name="cancel32px" Src="%sdk%\templates\resources\bmp32\cancel.png" Dest="bmp32" />
				<RESOURCE Name="help32px" Src="%sdk%\templates\resources\bmp32\help.png" Dest="bmp32" />
				<RESOURCE Name="information32px" Src="%sdk%\templates\resources\bmp32\information.png" Dest="bmp32" />
				<RESOURCE Name="user32px" Src="%sdk%\templates\resources\bmp32\user.png" Dest="bmp32" />
				<RESOURCE Name="warning32px" Src="%sdk%\templates\resources\bmp32\warning.png" Dest="bmp32" />
				<RESOURCE Name="agent64px" Src="%sdk%\templates\resources\bmp64\agent.png" Dest="bmp64" />
				<RESOURCE Name="hello64px" Src="%sdk%\templates\resources\bmp64\hello.png" Dest="bmp64" />
				<RESOURCE Name="hello128px" Src="%sdk%\templates\resources\bmp64\hello128.png" Dest="bmp64" />
				<RESOURCE Name="gif" Src="%sdk%\templates\resources\gif\" Dest="gif" />
			</RESOURCES>
			<_ECRANS />
			<WORKFLOWS>
				<WORKFLOW Name="zfie0030A" Src="%workflows%\zfie0030A.xaml" CtxtId="a9d2fcda-4998-42c5-ade8-f6f892161b6d" DisplayName="zfie0030A" StepTimeout="30" ScenarioTimeout="600" GeneratedScenarioName="zfie0030A" />
			</WORKFLOWS>
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</PROCESS>
		<PROCESS Name="POPUPS" CtxtId="64bc082e-db5e-4b19-b387-71f262ea9188" Nature="POPUP">
			<SCRIPTS />
			<SCENARII>
				<Steps />
			</SCENARII>
			<ACTIONS />
			<EVENTS />
			<_DECLAREVAR>
				<STRUCTUREDON Name="POPUPS" />
			</_DECLAREVAR>
			<_ECRANS />
		</PROCESS>
	</PROCESSUS>
	<APPLICATIONS>
		<APPLI Name="SAPLogon760" CtxtId="a184817c-dc79-4292-938f-94eb18208653" Nature="UIAUTOMATION" TechnoSDK="V3" Sync="0" PendingDelay="0">
			<SCRIPTS />
			<CRITERE>
				<EXE Scan="Full"><![CDATA[SAPLOGON.EXE]]></EXE>
			</CRITERE>
			<_DECLAREVAR>
				<STRUCTUREDON Name="SAPLogon760" />
			</_DECLAREVAR>
			<_ECRANS>
				<PAGE Name="pSAP" Comment="GuiMainWindow - SAP" CtxtId="e4074e4f-3183-46e5-abca-f221f3ed5224" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Type Scan="Full"><![CDATA[GuiMainWindow]]></Type>
						<Text Scan="Full"><![CDATA[SAP]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="ed集团" CtxtId="adc9f7fe-5f1a-4780-b853-2d65598aae67" CustomType="GuiTextField" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="10.R0R4R1">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-MANDT]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="ed用户" CtxtId="ec43f29a-b465-4f51-bf09-f0d03bfda861" CustomType="GuiTextField" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="10.R0R4R5">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-BNAME]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="o密码" CtxtId="e6d92ca0-5126-4d73-b755-eb69e66b2dde" CustomType="GuiPasswordField" SpecIndex="3">
							<CRITERE>
								<TAG Name="GuiPasswordField" Scope="All" CapturedPos="10.R0R4R7">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-BCODE]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="ed欢迎登录物产中大集团SAPERP" CtxtId="2ad2bc65-189e-45bf-8d33-8df0306e638b" CustomType="GuiTextField" MustExist="Y">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="10.R0R4R3R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[INFO_TAB-TDLINE]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btGuiButton" CtxtId="65ed747c-acc7-4b67-9c4b-6b991f3dd3fb" CustomType="GuiButton" SpecIndex="4">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="10.R0R1R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[0]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pAR" Comment="GuiMainWindow - SAP 轻松访问" CtxtId="d5c39c5d-18fb-4109-83e8-e662fb5d94be" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[SAP 轻松访问]]></Text>
						<Type Scan="Full"><![CDATA[GuiMainWindow]]></Type>
					</CRITERE>
					<OBJETS>
						<OBJET Name="oGuiOkCodeField" CtxtId="7d62f4e6-86db-4662-981d-0db3755dd2a2" CustomType="GuiOkCodeField" MustExist="Y" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiOkCodeField" Scope="All" CapturedPos="11.R0R1R17">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[okcd]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btGuiButton" CtxtId="3a8a7038-9cf9-40da-8f25-cd163b71aa7a" CustomType="GuiButton" MustExist="Y" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="11.R0R1R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[0]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="bt创建角色" CtxtId="9d0914d0-ac2e-4369-b909-fbb7316fe88b" CustomType="GuiButton" MustExist="Y">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="11.R0R3R9">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[48]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="bt其它菜单" CtxtId="6b1c6466-d073-4618-9d4a-34e5b73516da" CustomType="GuiButton" MustExist="Y">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="11.R0R3R3">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[17]]]></VALUE>
									</ATT>
									<ATT Name="Type">
										<VALUE Scan="Full"><![CDATA[GuiButton]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pAR2" Comment="GuiMainWindow - 应收账款重分类" CtxtId="3350dcef-4ace-4999-a1ec-69f5ed5351e6" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[应收账款重分类]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="ed公司代码" CtxtId="ff1d6294-d157-460e-9dd4-f8bd781a2e01" CustomType="GuiCTextField" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiCTextField" Scope="All" CapturedPos="13.R0R4R2">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[P_BUKRS]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="ed评估日期" CtxtId="04d634c7-8d63-40c7-8192-81281f390b3a" CustomType="GuiCTextField" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiCTextField" Scope="All" CapturedPos="13.R0R4R4">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[P_KDATE]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="ed总帐科目" CtxtId="931be5d4-6ed8-4310-9ba2-5b60396b73b8" CustomType="GuiCTextField" MustExist="Y">
							<CRITERE>
								<TAG Name="GuiCTextField" Scope="All" CapturedPos="13.R0R4R6">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[S_HKONT-LOW]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="ed到" CtxtId="66233148-9b54-4270-b6d9-d7731dc16aaf" CustomType="GuiCTextField" MustExist="Y">
							<CRITERE>
								<TAG Name="GuiCTextField" Scope="All" CapturedPos="13.R0R4R8">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[S_HKONT-HIGH]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="ed凭证日期" CtxtId="b9ae1187-d586-4859-b9ed-1d565726837f" CustomType="GuiCTextField" SpecIndex="3">
							<CRITERE>
								<TAG Name="GuiCTextField" Scope="All" CapturedPos="13.R0R4R12">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[P_BLDAT]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="ed过帐日期" CtxtId="7bbed3aa-6ec3-48d2-992f-24cacf33943b" CustomType="GuiCTextField" SpecIndex="4">
							<CRITERE>
								<TAG Name="GuiCTextField" Scope="All" CapturedPos="13.R0R4R14">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[P_BUDAT]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="ed冲销日期" CtxtId="85b607ee-339b-42ab-80a2-4d8cd281b6c6" CustomType="GuiCTextField" SpecIndex="5">
							<CRITERE>
								<TAG Name="GuiCTextField" Scope="All" CapturedPos="13.R0R4R16">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[P_RE_DT]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="o区分利润中心内部考核的管理评估" CtxtId="1894ecd8-bb56-41ff-82d2-9db6335ef458" CustomType="GuiRadioButton" SpecIndex="9">
							<CRITERE>
								<TAG Name="GuiRadioButton" Scope="All" CapturedPos="13.R0R4R19">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[P_VAR2]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="ed利润中心" CtxtId="30a703a1-ff7a-41a8-9be0-b6e25b3a8a95" CustomType="GuiCTextField" SpecIndex="6">
							<CRITERE>
								<TAG Name="GuiCTextField" Scope="All" CapturedPos="13.R0R4R21">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[P_PRCTR]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btGuiButton" CtxtId="10671af1-e9d6-423f-bc66-64a5d5aa4e3c" CustomType="GuiButton" SpecIndex="8">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="13.R0R3R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[8]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oGuiOkCodeField" CtxtId="b0322016-981c-4398-886c-7d4a69f3baeb" CustomType="GuiOkCodeField" SpecIndex="11">
							<CRITERE>
								<TAG Name="GuiOkCodeField" Scope="All" CapturedPos="13.R0R1R17">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[okcd]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btGuiButton1" CtxtId="4dde9eae-a19a-4a8a-94de-aca74a2168a0" CustomType="GuiButton" SpecIndex="12">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="13.R0R1R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[0]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pAR3" Comment="GuiMainWindow - 应收账款重分类" CtxtId="2d5e5ed1-8f97-489c-8d87-e3b3cfb1dc72" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[应收账款重分类]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="bt生成分类凭证" CtxtId="cd4b2404-9908-4f54-905e-1af212b8d996" CustomType="GuiButton" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="15.R0R3R21">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[48]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="bt按科目汇总" CtxtId="fe28fea7-a02b-4d48-8b1c-00b6e2fdb62c" CustomType="GuiButton" MustExist="Y">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="15.R0R3R20">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[9]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oPane" CtxtId="bff78c8d-5198-49f0-9b1b-148366421d23" CustomType="GUIGridViewPane" MustExist="Y">
							<CRITERE>
								<TAG Name="Pane" Scope="All" CapturedPos="15.R0R4R0R0R0R0">
									<ATT Name="AutomationId">
										<VALUE Scan="Full"><![CDATA[1]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btGuiButton" CtxtId="2790b213-ee9f-4dac-96eb-6ccfcaddfda6" CustomType="GuiButton" SpecIndex="3">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="15.R0R1R3">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[3]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pAR4" Comment="GuiModalWindow - 过账结果显示" CtxtId="f90827d3-ea80-4c6c-8e42-eea5eb02e2b5" CustomType="GuiModalWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[过账结果显示]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="bt取消" CtxtId="ed6ff4e9-76ac-4766-9a86-ff1b9a3baa3b" CustomType="GuiButton">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="16.R0R0R1">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[btn[12]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pWindowSAPLogon76" Comment="Window - SAP Logon 760" CtxtId="8baf0df2-089e-4481-bf87-1e210373aeb9" SubpagesType="Multiple" RefreshMode="Window">
					<CRITERE>
						<Name Scan="Full"><![CDATA[SAP Logon 760]]></Name>
					</CRITERE>
					<TRACK_EVENTS>
						<TRACK_EVENT Name="REFRESH(WINDOWOPENED(DESCENDANTS))" />
					</TRACK_EVENTS>
					<OBJETS>
						<OBJET Name="stS4QAS" CtxtId="c5cf488e-7dc4-41da-b614-7728559ca540" SpecIndex="1">
							<CRITERE>
								<TAG Name="Text" Scope="All" CapturedPos="17.R0R14R0R1R0R0R3R0">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[S4 QAS]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
			</_ECRANS>
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</APPLI>
	</APPLICATIONS>
	<CONTEXT Id="1a71b066-bdc4-4ac8-898c-13620056f9fd" />
</ConteXtorStudio>
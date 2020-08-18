
// ----------------------------------------------------------------
//   Test menu for scenario zfie0030A 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'zfie0030A', 'Test zfie0030A', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.zfie0030A.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario zfie0030A Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: zfie0030A
// ----------------------------------------------------------------
GLOBAL.scenario({ zfie0030A: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	// Initialize Loop counters
	sc.localData.Startloop = 0;
	
	sc.step(GLOBAL.steps.Kill_saplogon_exe, GLOBAL.steps.Delay_3000_ms);
	sc.step(GLOBAL.steps.Delay_3000_ms, GLOBAL.steps.Initialize_Excel);
	sc.step(GLOBAL.steps.Initialize_Excel, GLOBAL.steps.Open_existing_Excel_f);
	sc.step(GLOBAL.steps.Open_existing_Excel_f, GLOBAL.steps.Activate_worksheet);
	sc.step(GLOBAL.steps.Activate_worksheet, GLOBAL.steps.user);
	sc.step(GLOBAL.steps.user, GLOBAL.steps.password);
	sc.step(GLOBAL.steps.password, GLOBAL.steps.client);
	sc.step(GLOBAL.steps.client, GLOBAL.steps.ip);
	sc.step(GLOBAL.steps.ip, GLOBAL.steps.sid);
	sc.step(GLOBAL.steps.sid, GLOBAL.steps.Start_SAPLogon760);
	sc.step(GLOBAL.steps.Start_SAPLogon760, GLOBAL.steps.pAR_management);
	sc.step(GLOBAL.steps.pAR_management, GLOBAL.steps.Start_loop);
	sc.step(GLOBAL.steps.Start_loop, GLOBAL.steps.Exit_loop);
	sc.step(GLOBAL.steps.Exit_loop, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Exit_loop, GLOBAL.steps.Activate_worksheet_1);
	sc.step(GLOBAL.steps.Activate_worksheet_1, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Activate_worksheet_1, GLOBAL.steps.READ_BUKRS);
	sc.step(GLOBAL.steps.READ_BUKRS, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.READ_BUKRS, GLOBAL.steps.READ_PGRQ);
	sc.step(GLOBAL.steps.READ_PGRQ, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.READ_PGRQ, GLOBAL.steps.READ_PZRQ);
	sc.step(GLOBAL.steps.READ_PZRQ, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.READ_PZRQ, GLOBAL.steps.READ_GZRQ);
	sc.step(GLOBAL.steps.READ_GZRQ, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.READ_GZRQ, GLOBAL.steps.READ_CXRQ);
	sc.step(GLOBAL.steps.READ_CXRQ, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.READ_CXRQ, GLOBAL.steps.READ_PROFIT);
	sc.step(GLOBAL.steps.READ_PROFIT, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.READ_PROFIT, GLOBAL.steps.pAR2_management);
	sc.step(GLOBAL.steps.pAR2_management, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.pAR2_management, GLOBAL.steps.pAR3_management);
	sc.step(GLOBAL.steps.pAR3_management, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.pAR3_management, GLOBAL.steps.Delay_5000_ms);
	sc.step(GLOBAL.steps.Delay_5000_ms, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Delay_5000_ms, GLOBAL.steps.pAR4_management, 'Default');
	sc.step(GLOBAL.steps.Delay_5000_ms, GLOBAL.steps.Delay_1000_ms);
	sc.step(GLOBAL.steps.pAR4_management, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.pAR4_management, GLOBAL.steps.Set_one_value);
	sc.step(GLOBAL.steps.Set_one_value, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Set_one_value, GLOBAL.steps.Loops_to_the_start_bl);
	sc.step(GLOBAL.steps.Loops_to_the_start_bl, GLOBAL.steps.Start_loop, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Loops_to_the_start_bl, GLOBAL.steps.Display_msgbox_END);
	sc.step(GLOBAL.steps.Display_msgbox_END, GLOBAL.steps.Save_Excel_file);
	sc.step(GLOBAL.steps.Save_Excel_file, GLOBAL.steps.End_Excel);
	sc.step(GLOBAL.steps.End_Excel, null);
	sc.step(GLOBAL.steps.Delay_1000_ms, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Delay_1000_ms, GLOBAL.steps.pAR3_management_1);
	sc.step(GLOBAL.steps.pAR3_management_1, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.pAR3_management_1, GLOBAL.steps.Set_one_value_1);
	sc.step(GLOBAL.steps.Set_one_value_1, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Set_one_value_1, GLOBAL.steps.Loops_to_the_start_bl);
}}, ctx.dataManagers.rootData).setId('a9d2fcda-4998-42c5-ade8-f6f892161b6d') ;

// ----------------------------------------------------------------
//   Step: Kill_saplogon_exe
// ----------------------------------------------------------------
GLOBAL.step({ Kill_saplogon_exe: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '2d72ff02-59e5-40c3-89bf-17136a76f93a') ;
	// Forces a running program to close. All instances of the running process are killed. The process to kill is found through the program filename. If possible, use the close command for applications and pages, because it allows the program to shut down gracefully. "Kill process" will shut down the program without saving any changes or data. To use this activity, you must include the WMI library in the project.
	var __result = ctx.wmi.query('Win32_Process', [ 'ProcessId', 'Name', 'ExecutionState' ], "Name='saplogon.exe'");
	if(__result.length > 0) {
	  for(var __counter = 0; __counter<__result.length; __counter++) {
	    var __result2 = ctx.wmi.query('Win32_Process', [ 'ProcessId', 'Name', 'ExecutionState' ], "ProcessId="+__result[__counter].ProcessId);
	    if(__result2.length > 0) {
	      ctx.wmi.killProcess(__result2[0].ProcessId);
	    }
	  }
	  ctx.log("All running instances of process 'saplogon.exe' have been killed.", e.logIconType.Info);
	}
	else {
	  ctx.log("No found running instance of process 'saplogon.exe'.", e.logIconType.Warning);
	}
	sc.endStep(); // Delay_3000_ms
	return;
}});

// ----------------------------------------------------------------
//   Step: Delay_3000_ms
// ----------------------------------------------------------------
GLOBAL.step({ Delay_3000_ms: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '3f339595-4ba5-418e-8b03-8d0c97ad19f1') ;
	// Delays execution for some milliseconds.
	// This is the standard pause that should be used in normal situations. It simply pauses the execution of the script for the indicated period.
	// It allows user interaction with Desktop Agent and other programs during the pause.
	// This can be useful to wait for a process to complete, to avoid going too fast for the operating system, or to give the user time to react.
	ctx.wait(function(ev) {
		sc.endStep(); // Initialize_Excel
		return;
	}, 3000);
}});

// ----------------------------------------------------------------
//   Step: Initialize_Excel
// ----------------------------------------------------------------
GLOBAL.step({ Initialize_Excel: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '6be224df-6004-4256-85cb-c8e27b372f1a') ;
	// Initializes Excel Library with different modes.
	ctx.options.excel.newXlsInstance = false;
	ctx.options.excel.visible = true;
	ctx.options.excel.displayAlerts = false;
	ctx.excel.initialize();
	sc.endStep(); // Open_existing_Excel_f
	return;
}});

// ----------------------------------------------------------------
//   Step: Open_existing_Excel_f
// ----------------------------------------------------------------
GLOBAL.step({ Open_existing_Excel_f: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', 'ec6f28c1-61a0-4627-8956-a17c4dc42502') ;
	// Open existing Excel file.
	ctx.excel.file.open(ctx.options.path.log+'\\RPAEXCEL.xlsx');
	sc.endStep(); // Activate_worksheet
	return;
}});

// ----------------------------------------------------------------
//   Step: Activate_worksheet
// ----------------------------------------------------------------
GLOBAL.step({ Activate_worksheet: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '502b3e83-f2bf-480b-b54e-522241796f51') ;
	// Activate an Excel worksheet from the active workbook.
	ctx.excel.sheet.activate('Sheet2');
	sc.endStep(); // user
	return;
}});

// ----------------------------------------------------------------
//   Step: user
// ----------------------------------------------------------------
GLOBAL.step({ user: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '844df01e-cd73-4534-a9be-fd1828f1cf71') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pSAPData.ed用户 = ctx.excel.sheet.getCell(2, 'A');
	sc.endStep(); // password
	return;
}});

// ----------------------------------------------------------------
//   Step: password
// ----------------------------------------------------------------
GLOBAL.step({ password: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '8528ad42-7602-4771-bae3-a3eea8202025') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pSAPData.o密码 = ctx.excel.sheet.getCell(2, 'B');
	sc.endStep(); // client
	return;
}});

// ----------------------------------------------------------------
//   Step: client
// ----------------------------------------------------------------
GLOBAL.step({ client: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '4422db45-e2ef-4973-9c64-9b23c902f951') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pSAPData.ed集团 = ctx.excel.sheet.getCell(2, 'C');
	sc.endStep(); // ip
	return;
}});

// ----------------------------------------------------------------
//   Step: ip
// ----------------------------------------------------------------
GLOBAL.step({ ip: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '63a7814c-c9f2-400a-be67-ad3cb7854c8d') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pSAPData.IP = ctx.excel.sheet.getCell(2, 'D');
	sc.endStep(); // sid
	return;
}});

// ----------------------------------------------------------------
//   Step: sid
// ----------------------------------------------------------------
GLOBAL.step({ sid: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', 'f4f881d6-2e32-4ccc-8d23-de40f36e4181') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pSAPData.SID = ctx.excel.sheet.getCell(2, 'E');
	sc.endStep(); // Start_SAPLogon760
	return;
}});

// ----------------------------------------------------------------
//   Step: Start_SAPLogon760
// ----------------------------------------------------------------
GLOBAL.step({ Start_SAPLogon760: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '2fb12049-f7ab-4b11-8a74-5694b9516018') ;
	// Starts an application.
	SAPLogon760.events.START.once(function(ev) {
		sc.endStep(); // pAR_management
		return;
	});
	SAPLogon760.start();
}});

// ----------------------------------------------------------------
//   Step: pAR_management
// ----------------------------------------------------------------
GLOBAL.step({ pAR_management: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '318dadfb-ba67-4f67-bd4d-f3bd58a3c967') ;
	// Wait until the Page loads
	SAPLogon760.pAR.wait(function(ev) {
		SAPLogon760.pAR.oGuiOkCodeField.set('ZFIE0030A');
		SAPLogon760.pAR.btGuiButton.click();
		sc.endStep(); // Start_loop
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Start_loop
// ----------------------------------------------------------------
GLOBAL.step({ Start_loop: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('zfie0030A', '479f2f15-bb63-427a-a7ea-21340d9f6638') ;
	// Starting instruction for a loop.
	if (sc.localData.Startloop < 0) sc.localData.Startloop = 0;
	sc.endStep(); // Exit_loop
	return;
}});

// ----------------------------------------------------------------
//   Step: Exit_loop
// ----------------------------------------------------------------
GLOBAL.step({ Exit_loop: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('zfie0030A', 'b6e8d236-d37f-4a08-a607-818fda94399c') ;
	// Test block to exit from a loop.
	if (sc.localData.Startloop == ctx.excel.sheet.getLastRow('A1')-2)
	{
		sc.localData.Startloop = -1 ;
		sc.endStep('NEXT_LOOP');
		return ;
	}
	sc.endStep(); // Activate_worksheet_1
	return;
}});

// ----------------------------------------------------------------
//   Step: Activate_worksheet_1
// ----------------------------------------------------------------
GLOBAL.step({ Activate_worksheet_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', 'eeaaa393-886d-4ac4-839f-13952d4d5396') ;
	// Activate an Excel worksheet from the active workbook.
	ctx.excel.sheet.activate('Sheet1');
	sc.endStep(); // READ_BUKRS
	return;
}});

// ----------------------------------------------------------------
//   Step: READ_BUKRS
// ----------------------------------------------------------------
GLOBAL.step({ READ_BUKRS: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '87f7e4d3-07a4-4213-9296-72175c35d4f9') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pAR2Data.ed公司代码 = ctx.excel.sheet.getCell(sc.localData.Startloop +2, 'A');
	sc.endStep(); // READ_PGRQ
	return;
}});

// ----------------------------------------------------------------
//   Step: READ_PGRQ
// ----------------------------------------------------------------
GLOBAL.step({ READ_PGRQ: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', 'fa625095-3d38-4e10-a67b-feffbca62e81') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pAR2Data.ed评估日期 = ctx.excel.sheet.getCell(sc.localData.Startloop +2, 'B');
	sc.endStep(); // READ_PZRQ
	return;
}});

// ----------------------------------------------------------------
//   Step: READ_PZRQ
// ----------------------------------------------------------------
GLOBAL.step({ READ_PZRQ: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', 'c8d9b280-08c8-45c0-b7d3-947804de31d9') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pAR2Data.ed凭证日期 = ctx.excel.sheet.getCell(sc.localData.Startloop +2, 'C');
	sc.endStep(); // READ_GZRQ
	return;
}});

// ----------------------------------------------------------------
//   Step: READ_GZRQ
// ----------------------------------------------------------------
GLOBAL.step({ READ_GZRQ: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '6841797f-d87a-424d-9f52-f3d3da5aec1b') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pAR2Data.ed过帐日期 = ctx.excel.sheet.getCell(sc.localData.Startloop +2, 'D');
	sc.endStep(); // READ_CXRQ
	return;
}});

// ----------------------------------------------------------------
//   Step: READ_CXRQ
// ----------------------------------------------------------------
GLOBAL.step({ READ_CXRQ: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '7bf9fb21-15df-4d29-bc0e-5726ee799376') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pAR2Data.ed冲销日期 = ctx.excel.sheet.getCell(sc.localData.Startloop +2, 'E');
	sc.endStep(); // READ_PROFIT
	return;
}});

// ----------------------------------------------------------------
//   Step: READ_PROFIT
// ----------------------------------------------------------------
GLOBAL.step({ READ_PROFIT: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', 'b851c599-c852-4b74-873b-46a65b95ae34') ;
	// Get one value from a cell
	rootData.SAPLogon760Data.pAR2Data.ed利润中心 = ctx.excel.sheet.getCell(sc.localData.Startloop +2, 'F');
	sc.endStep(); // pAR2_management
	return;
}});

// ----------------------------------------------------------------
//   Step: pAR2_management
// ----------------------------------------------------------------
GLOBAL.step({ pAR2_management: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '3fc0a115-f2f1-4321-b5d3-0f0f51c95684') ;
	// Wait until the Page loads
	SAPLogon760.pAR2.wait(function(ev) {
		SAPLogon760.pAR2.ed公司代码.set(rootData.SAPLogon760Data.pAR2Data.ed公司代码);
		SAPLogon760.pAR2.ed评估日期.set(rootData.SAPLogon760Data.pAR2Data.ed评估日期);
		SAPLogon760.pAR2.ed凭证日期.set(rootData.SAPLogon760Data.pAR2Data.ed凭证日期);
		SAPLogon760.pAR2.ed过帐日期.set(rootData.SAPLogon760Data.pAR2Data.ed过帐日期);
		SAPLogon760.pAR2.ed冲销日期.set(rootData.SAPLogon760Data.pAR2Data.ed冲销日期);
		SAPLogon760.pAR2.o区分利润中心内部考核的管理评估.click();
		SAPLogon760.pAR2.ed利润中心.set(rootData.SAPLogon760Data.pAR2Data.ed利润中心);
		SAPLogon760.pAR2.btGuiButton.click();
		sc.endStep(); // pAR3_management
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pAR3_management
// ----------------------------------------------------------------
GLOBAL.step({ pAR3_management: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '83668ba4-9881-4458-81cb-3760da371ac9') ;
	// Wait until the Page loads
	SAPLogon760.pAR3.wait(function(ev) {
		SAPLogon760.pAR3.bt生成分类凭证.click();
		sc.endStep(); // Delay_5000_ms
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Delay_5000_ms
// ----------------------------------------------------------------
GLOBAL.step({ Delay_5000_ms: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '9eb54f49-be5d-4fb3-adf7-1f4ffe705a8f') ;
	// Delays execution for some milliseconds.
	// This is the standard pause that should be used in normal situations. It simply pauses the execution of the script for the indicated period.
	// It allows user interaction with Desktop Agent and other programs during the pause.
	// This can be useful to wait for a process to complete, to avoid going too fast for the operating system, or to give the user time to react.
	ctx.wait(function(ev) {
		// Wait until the Page loads
		SAPLogon760.pAR4.wait(function(ev) {
			sc.endStep('Default'); // pAR4 management
			return;
		});
		ctx.workflow('zfie0030A', 'e8b0b525-0795-462d-89df-7a91cef1d58c') ;
		// Delays execution for some milliseconds.
		// This is the standard pause that should be used in normal situations. It simply pauses the execution of the script for the indicated period.
		// It allows user interaction with Desktop Agent and other programs during the pause.
		// This can be useful to wait for a process to complete, to avoid going too fast for the operating system, or to give the user time to react.
		ctx.wait(function(ev) {
			// Wait until the Page loads
			SAPLogon760.pAR3.wait(function(ev) {
				sc.endStep(); // pAR3 management
				return;
			});
		}, 1000);
	}, 5000);
}});

// ----------------------------------------------------------------
//   Step: pAR4_management
// ----------------------------------------------------------------
GLOBAL.step({ pAR4_management: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '9ba9d509-a9d9-4ac8-856e-f1cce6283e8e') ;
	// Wait until the Page loads
	SAPLogon760.pAR4.wait(function(ev) {
		SAPLogon760.pAR4.bt取消.click();
		sc.endStep(); // Set_one_value
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Set_one_value
// ----------------------------------------------------------------
GLOBAL.step({ Set_one_value: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '599f5390-85f1-4a17-8270-35b0fe357b27') ;
	// Set one value in a cell
	ctx.excel.sheet.setCell(sc.localData.Startloop +2, 7, '成功');
	sc.endStep(); // Loops_to_the_start_bl
	return;
}});

// ----------------------------------------------------------------
//   Step: Loops_to_the_start_bl
// ----------------------------------------------------------------
GLOBAL.step({ Loops_to_the_start_bl: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('zfie0030A', 'f6fb26c7-d7e8-4637-963f-e82426d0f1ab') ;
	// Loops to the start block.
	if (sc.localData.Startloop != -1)
	{
		sc.localData.Startloop++ ;
		sc.endStep('NEXT_LOOP');
		return ;
	}
	sc.endStep(); // Display_msgbox_END
	return;
}});

// ----------------------------------------------------------------
//   Step: Display_msgbox_END
// ----------------------------------------------------------------
GLOBAL.step({ Display_msgbox_END: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '2d12ce21-533e-4557-87c1-dc6d5c8e685c') ;
	// Displays a message box. If the "Wait closing" option is selected, waits until the end user closes it.
	// Creates the popup according to selected template, sets title and message and displays it.
	var END = ctx.popup('END', e.popup.template.Ok);
	END.open({ title: '成功', message: '任务完成'});
	sc.endStep(); // Save_Excel_file
	return;
}});

// ----------------------------------------------------------------
//   Step: Save_Excel_file
// ----------------------------------------------------------------
GLOBAL.step({ Save_Excel_file: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '40c0931f-a7b3-4d4d-af26-9d0f8a786a2a') ;
	// Save Excel file.
	ctx.excel.file.save();
	sc.endStep(); // End_Excel
	return;
}});

// ----------------------------------------------------------------
//   Step: End_Excel
// ----------------------------------------------------------------
GLOBAL.step({ End_Excel: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '15df7511-4c52-4151-aec9-56d209c9458c') ;
	// End Excel.
	ctx.excel.end();
	sc.endStep(); // end Scenario
	return;
}});

// ----------------------------------------------------------------
//   Step: Delay_1000_ms
// ----------------------------------------------------------------
GLOBAL.step({ Delay_1000_ms: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', 'e8b0b525-0795-462d-89df-7a91cef1d58c') ;
	// Delays execution for some milliseconds.
	// This is the standard pause that should be used in normal situations. It simply pauses the execution of the script for the indicated period.
	// It allows user interaction with Desktop Agent and other programs during the pause.
	// This can be useful to wait for a process to complete, to avoid going too fast for the operating system, or to give the user time to react.
	ctx.wait(function(ev) {
		sc.endStep(); // pAR3_management_1
		return;
	}, 1000);
}});

// ----------------------------------------------------------------
//   Step: pAR3_management_1
// ----------------------------------------------------------------
GLOBAL.step({ pAR3_management_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', 'd64e63a8-6532-4bee-aaef-096f4aa5a89b') ;
	// Wait until the Page loads
	SAPLogon760.pAR3.wait(function(ev) {
		SAPLogon760.pAR3.btGuiButton.click();
		sc.endStep(); // Set_one_value_1
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: Set_one_value_1
// ----------------------------------------------------------------
GLOBAL.step({ Set_one_value_1: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('zfie0030A', '402af9d7-0c4b-4d5c-8ce1-61426d297ef9') ;
	// Set one value in a cell
	ctx.excel.sheet.setCell(sc.localData.Startloop +2, 7, '失败');
	sc.endStep(); // Loops_to_the_start_bl
	return;
}});

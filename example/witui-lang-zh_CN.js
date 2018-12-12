/*------------------------------------------------------------------------------
区域性资源定义：中文简体
--------------------------------------------------------------------------------*/
$.logIn = "登陆";
$.constants = {};

$.constants.male = "男";
$.constants.female = "女";
$.constants.yes = "是";
$.constants.no = "否";

$.constants.pleaseSelect = "请选择";

if ($.messager) {
    $.messager.defaults.info = '提示';
    $.messager.defaults.warn = '警告';
    $.messager.defaults.error = '错误';

    $.messager.defaults.confirm = '确认';
    $.messager.defaults.confirmActionPrompt = '您确认要{actionPrompt}吗？'; // 例如：你确认要退出系统吗？
    $.messager.defaults.confirmActionExecute = '您确认要执行{actionCaption}操作吗？'; // 例如：您确认要执行退出操作吗？ 

    $.messager.defaults.confirmActionExecute4DataGrid = '您确认要对选中的{objectName}执行{actionCaption}操作吗？'; // 例如：您确认要对选中的数据执行删除操作吗？ 

    $.messager.defaults.progressTitle = '提示';
    $.messager.defaults.progressText = '正在处理，请稍等…';

    $.messager.defaults.errorMessageConfirm = '当前存在多条错误消息，是否全部关闭？';

}

if ($.buttons) {
    $.buttons.add.text = '添加';
    $.buttons.edit.text = '修改';
    $.buttons.remove.text = '删除';
    $.buttons.save.text = '保存';
    $.buttons.cut.text = '剪切';
    $.buttons.ok.text = '确定';
    $.buttons.cancel.text = '取消';
    $.buttons.search.text = '查询';
    $.buttons.print.text = '打印';
    $.buttons.help.text = '帮助';
    $.buttons.undo.text = '撤销';
    $.buttons.redo.text = '重做';
    $.buttons.back.text = '后退';

    $.buttons.reset.text = '重设';
    $.buttons.refresh.text = '刷新';
    $.buttons.submit.text = '提交';
}

if($.validating){
    $.validating.messages = {
        required    : '【{title}】不能为空。',
        minLength   : '【{title}】的长度不能少于 {minLength} 个字符。',
        maxLength   : '【{title}】的长度不能超过 {maxLength} 个字符。',
        minValue    : '【{title}】的值不能小于 {minValue}。',
        maxValue    : '【{title}】的值不能大于 {maxValue}。',
        minSelect   : '至少要选择{minSelect}个【{title}】。',
        maxSelect   : '不能选择超过{maxSelect}个【{title}】。',

        failure     : '校验失败，一个或多个输入控件的值不合法，请检查后重试。'
    }
}

if ($.fn.popupSelector){
	$.fn.popupSelector.defaults.prompt = '请选择{title}';
	$.fn.popupSelector.defaults.dialogTitle = '选择{title}';
}

if ($.fn.employeeSelector) {
	$.fn.employeeSelector.defaults.title = '职员';
}
if ($.fn.accountSelector) {
	$.fn.accountSelector.defaults.title = '账号';
}
if ($.fn.departmentSelector) {
	$.fn.departmentSelector.defaults.title = '部门';
}
if ($.fn.jobTitleSelector) {
    $.fn.jobTitleSelector.defaults.title = '职务';
}
if ($.fn.resourceSelector) {
    $.fn.resourceSelector.defaults.title = '资源';
}
if ($.fn.menuSelector) {
    $.fn.menuSelector.defaults.title = '菜单';
}
if ($.fn.roleSelector) {
    $.fn.roleSelector.defaults.title = '角色';
}
if ($.fn.positionSelector) {
    $.fn.positionSelector.defaults.title = '职位';
}
if ($.fn.groupSelector) {
    $.fn.groupSelector.defaults.title = '群组';
}
if ($.fn.departmentTypeSelector) {
    $.fn.departmentTypeSelector.defaults.title = '部门类型';
}

if ($.fn.filebox) {
    $.fn.filebox.defaults.buttonText = '浏览';
    $.fn.filebox.defaults.fileTypeDesc = '所有文件';

    $.fn.filebox.defaults.errorMsgs = {
        addFileFailed: '添加文件失败',
        tooLarge: '文件 {name} 超出了允许上传的最大限制({sizeLimit}).',
        cannotBeEempty: '文件 {name} 是空文件.',
        fileTypeInvalid: '文件 {name} 不是允许上传的文件类型({fileTypeDesc}).',
        httpError: 'HTTP错误',
        IOError: '网络IO错误',
        securityError: '安全错误',
        cannotFoundUrl: '无效的Url',
        validationError: '验证失败',
        failed: '上传失败',
        exceedLimit: '超出上传限制',
        stopped: '停止'
    };
}

if ($.fn.filepanel) {
    $.fn.filepanel.defaults.buttonText = '添加附件';
    $.fn.filepanel.defaults.fileTypeDesc = '所有文件';

    $.fn.filepanel.defaults.errorMsgs = {
        addFileFailed: '添加文件失败',
        tooLarge: '文件 {name} 超出了允许上传的最大限制({sizeLimit})。',
        cannotBeEempty: '文件 {name} 是空文件。',
        fileTypeInvalid: '文件 {name} 不是允许上传的文件类型({fileTypeDesc})。',
        queueSizeExceeded: '超过了允许同时上传文件的最大数目({queueSize})。',
        httpError: 'HTTP错误',
        IOError: '网络IO错误',
        securityError: '安全错误',
        cannotFoundUrl: '无效的Url',
        validationError: '验证失败',
        failed: '上传失败',
        exceedLimit: '超出上传限制',
        stopped: '停止'
    };
}


/***************
**
** 流程设计器的语言文件（业务相关）
**
***************/

(function () {
    window.WITDESIGNER_CONFIG = {
        // 定义
        //modules: [],

        // 只读模式，默认是false
        readOnly: false,

        // 默认主题
        defaultTemplate: 'default',

        // 默认皮肤
        defaultTheme: 'default',

        // 最大可回退的次数，默认 20
        maxUndoCount: 20,

        // 语言，默认是 'zh-cn'
        lang: 'zh-cn',

        // 配置放大缩小的比例
        zoom: [30, 50, 80, 100, 120, 150, 200], //10, 20,

        // 图片尺寸限制
        maxImageWidth: 200,
        maxImageHeight: 200,

        // 修改后自动保存时间间隔（单位：秒）；设置为 false 不自动保存
        autoSaveDuration: 10,


        //combobox 中的选项设置
        optMethod: [{
            value: 'PUT',
            text: 'PUT'
        }, {
            value: 'GET',
            text: 'GET'
        }, {
            value: 'POST',
            text: 'POST'
        }, {
            value: 'DELETE',
            text: 'DELETE'
        }],
        returnType: [{
            value: 'string',
            text: 'string'
        }, {
            value: 'int',
            text: 'int'
        }, {
            value: 'boolean',
            text: 'boolean'
        }, {
            value: 'datetime',
            text: 'datetime'
        }, {
            value: 'xml',
            text: 'xml'
        }, {
            value: 'json',
            text: 'json'
        }],
        dataType: [{
            value: 'xsd:int',
            text: 'int'
        }, {
            value: 'xsd:string',
            text: 'string'
        }, {
            value: 'xsd:decimal',
            text: 'decimal'
        }, {
            value: 'xsd:boolean',
            text: 'bool'
        }, {
            value: 'xsd:datetime',
            text: 'datetime'
        }],
        formActions: [{
            value: 'approve',
            text: '同意'
        }, {
            value: 'reject',
            text: '拒绝'
        }, {
            value: 'assign',
            text: '指派'
        }, {
            value: 'countersign',
            text: '会签'
        }, {
            value: 'addsign',
            text: '加签(包含前加签，并加签，后加签)'
        }, {
            value: 'addsignbefore',
            text: '前加签'
        }, {
            value: 'addsignparallel',
            text: '并加签'
        }, {
            value: 'addsignafter',
            text: '后加签'
        }, {
            value: 'approve4addsign',
            text: '同意(加签)'
        }, {
            value: 'reject4addsign',
            text: '拒绝(加签)'
        }],
        addSignApproveTypes: [{
            value: '0',
            text: '全部加签人员审批完成后向下流转'
        }, {
            value: '1',
            text: '加签人员一人审批完成后即向下流转'
        }, {
            value: '2',
            text: '选中加签人员需按顺序审批'
        }],
        targetValues: [
          'addsign', 'addsignbefore', 'addsignparallel', 'addsignafter'
        ],
        //必选语言项
        requiredLangType: [{
            value: 'en',
            text: 'English'
        }, {
            value: 'zh-cn',
            text: '中文简体'
        }, {
            value: 'zh-tw',
            text: '中文繁體'
        }],
        //非必选的语言项
        langType: [{
            value: '',
            text: '请选择'
        }, {
            value: 'en',
            text: 'English'
        }, {
            value: 'zh-cn',
            text: '中文简体'
        }, {
            value: 'zh-tw',
            text: '中文繁體'
        }],
        // 表单中默认的action
        defaultActions: [{
            name: 'Reject',
            type: 'reject',
            displayName: '{"zh-cn": "拒绝", "en": "Reject", "zh-tw":"拒絕"}'
        }, {
            name: 'Approve',
            type: 'approve',
            displayName: '{"zh-cn": "同意", "en": "Approve", "zh-tw":"同意"}'
        }],
        dotline: [{
            value: 'One',
            text: 'One'
        }, {
            value: 'None',
            text: 'None'
        }, {
            value: 'Both',
            text: 'Both'
        }],
        textFormat: [{
            value: 'text/plain',
            text: 'text/plain'
        }],
        priorityType: [{
            value: '',
            text: '请选择'
        }, {
            value: 0,
            text: '最高'
        }, {
            value: 1,
            text: '高'
        }, {
            value: 2,
            text: '一般'
        }, {
            value: 3,
            text: '低'
        }, {
            value: 4,
            text: '最低'
        }],
        attachmentRightType: {
            count: 4,
            options: [{
                key: 0,
                text: '读取权限',
            }, {
                key: 1,
                text: '新增权限', //'编辑权限',
            }, {
                key: 3,
                text: '删除权限',
            }]
        },
        performerType: [{
            text: '所有用户同时处理',
            value: 'humanPerformer'
        }, {
            text: '所有用户共享任务',
            value: 'humanPotentialOwner'
        }],
        nodeEventOptions: [{
            "text": "激活",
            "value": "Activated"
        }, {
            "text": "同意",
            "value": "Approved"
        }, {
            "text": "拒绝",
            "value": "Rejected"
        }],
        processEventOptions: [{
            "text": "同意",
            "value": "Approved"
        }, {
            "text": "拒绝",
            "value": "Rejected"
        }, {
            "text": "终止",
            "value": "Terminated"
        }, {
            "text": "取消",
            "value": "Canceled"
        }, {
            "text": "挂起",
            "value": "Suspended"
        }, {
            "text": "恢复",
            "value": "Resumed"
        }],
        //formType:
        scriptFormatType: [{
            value: 'SQL',
            text: 'SQL'
        }, {
            value: 'CSharp',
            text: 'C#'
        }],
        notificationTemplate: [],

        templateVariable: [{
            text: '申请人姓名',
            value: 'sys_pi_applicant_employee_displayname',
            description: '申请人的显示名（多语言）。'
        }, {
            text: '申请人工号',
            value: 'sys_pi_applicant_employee_jobno',
            description: '申请人的工号。'
        }, {
            text: '申请人Email',
            value: 'sys_pi_applicant_employee_email',
            description: '申请人的Email。'
        }, {
            text: '申请人手机',
            value: 'sys_pi_applicant_employee_cellphone',
            description: '申请人的手机号码。'
        },

          {
              text: '任务名称',
              value: 'sys_task_name',
              description: '当前任务的名称。'
          }, {
              text: '任务主题',
              value: 'sys_task_subject',
              description: '当前任务的主题。'
          }, {
              text: '任务描述',
              value: 'sys_task_description',
              description: '当前任务的描述。'
          }, {
              text: '任务到达时间',
              value: 'sys_task_arrivetime',
              description: '当前任务的到达时间。'
          }, {
              text: '任务结束时间',
              value: 'sys_token_completetime',
              description: '当前任务的所属令牌的完成时间。'
          }, {
              text: '任务优先级',
              value: 'sys_task_priority_displayname',
              description: '当前任务的优先级显示文字（多语言）。'
          },

          {
              text: '申请人首要部门',
              value: 'sys_pi_applicant_department_name',
              description: '申请人的首要部门的部门名称。'
          },

          {
              text: '流程实例',
              value: 'sys_p_displayname',
              description: '流程实例的显示名称（多语言）。'
          }, {
              text: '流程审批结果',
              value: 'sys_pi_result_displayname',
              description: '流程实例的审批结果的文字显示（多语言）。'
          }
        ],

        recipients: [{
            value: '',
            text: '请选择'
        }, {
            text: '提交人',
            value: 'sys_pi_applicant_account_id'
        }, {
            text: '当前任务的全部处理人',
            value: 'sys_recipients'
        }, {
            text: '当前任务尚未完成的处理人',
            value: 'sys_recipients_todo'
        }, {
            text: '当前任务已经完成的处理人',
            value: 'sys_recipients_done'
        }, {
            text: '当前任务的全部参与用户',
            value: 'sys_participants'
        }, {
            text: '所有相关用户',
            value: 'sys_users'
        }]
    };
})();

/***************
**
** 流程设计器的语言文件（加载web文件）
**
***************/
$.title={};
if($.title){
    $.title.setHandler="设置处理人";
    $.title.conditionOfFlow='流程流转条件';
    $.title.bindingForm='绑定表单';
    $.title.bindingProcess='绑定流程';
    $.title.bindingFormRight='权限控制';
    $.title.selectFunction="选择函数";
    $.title.selectVariable="选择变量";
    $.title.selectApproval="选择处理人";
    $.title.array="数组";
    $.title.logic="逻辑";
    $.title.employee="职员";
    $.title.account="账号";
    $.title.manager="部门主管";
    $.title.department="部门";
    $.title.position="职位";
    $.title.jobTitle="职务";
    $.title.role="角色";
    $.title.group="群组";
    $.title.object="对象";
    $.title.customer='自定义变量';
    $.title.users='用户的相关变量';
    $.title.applicant='提交人的相关变量';
    $.title.department='提交人首要部门的相关变量';
    $.title.task='任务的相关变量';
    $.title.process='流程';
    $.title.activity='活动';
    $.title.include="包含";
    $.title.exclude="排除";
    $.title.selector="请选择";
};
$.variable={};
if($.variable){
    $.variable.customer='自定义变量';
    $.variable.users='用户的相关变量';
    $.variable.applicant='提交人的相关变量';
    $.variable.department='提交人首要部门的相关变量';
    $.variable.task='任务的相关变量';
    $.variable.process='流程';
    $.variable.activity='活动';
};


/***************
**
** 流程设计器的语言文件（设计器相关）
**
***************/
var langType = {
    ui: {
        command: {
            redo: '重做',
            undo: '撤销',
            //添加节点
            AppendRootNode: {
                processName: '流程名',
                startEvent: '开始节点',
                endEvent: '结束节点',

                //activity.task
                userTask: '用户任务',
                scriptTask: '脚本任务',
                loopTask: '循环任务',
                sendTask: '通知任务',
                calledElement: '子流程',
                callActivity: '子流程',
                restServiceTask: '其他服务',
                //gateway
                gateway: '网关',
                exclusiveGateway: '互斥网关',
                inclusiveGateway: '相容网关',
                //data
                dataInput: '数据输入',
                dataOutput: '数据输出',
                textAnnotation: '注释节点',


            },
            AppendChildNode: {
                timerEventDefinition: '定时器',
                compensateEventDefinition: '补偿节点',
            },
            dotline: '虚线',
            line: '实线',
            property: '属性',
            opertion: '操作',
            remove: '删除',
            align: '排列',
            alignx: '垂直对齐',
            aligny: '水平对齐'
        },
        menu: {
            mainmenutext: '流程设计器',
            history: '草稿记录',
            shortkey: '快捷键'
        },

        recent: {
            clearrecent: '清除全部草稿',
            draftCreateTime: '创建于{0}',
            draftUpdateTime: '最后更新于 ',
            loadDraft: '还原此草稿',

            noticeTitle: '草稿是什么？',
            noticeBody: '草稿是在自动保存或者 “Ctrl+s” 后产生的结果，并没有真正保存到流程包中。这样可以更好地保障用户的操作结果不丢失，同时在不需要的时候也可以方便的舍弃。'
        },
        shortkey: {
            keys: [
              { text: 'Ctrl + C', value: '复制' },
              { text: 'Ctrl + X', value: '剪切' },
              { text: 'Ctrl + V', value: '粘贴' },
              { text: 'Ctrl + Z', value: '撤销' },
              { text: 'Ctrl + Y', value: '重做' },
              { text: 'Ctrl + 鼠标左键', value: '多选' },
              { text: '鼠标右键 / Alt + 鼠标左键', value: '拖拽画布' },
              { text: 'Delete', value: '删除' },
              { text: '上 下 左 右', value: '切换选中节点' }
            ]
        },

        justnow: '刚刚',
        minutesago: '{0} 分钟前',
        hoursago: '{0} 小时前',
        yesterday: '昨天',
        daysago: '{0} 天前',
        longago: '很久之前',

        status: {
            ready: '准备就绪',
            autoSave: '所有更改已经自动保存在服务器',
            localStore: '网络断开，所有更改已经自动保存在本地。',
            autoSaveError: '服务器自动保存出错，更改已经自动保存在本地。',
            draftStatus: '当前内容来自草稿，点击这里丢弃草稿',
            draftHint: '点击后丢弃草稿，直接显示流程包中的内容。'
        },

        tabs: {
            node: '节点',
            appearence: '外观',
            view: '视图'
        },
        panels: {
            property: '属性'
        },
        hand: '允许拖拽',
        camera: '居中选中节点',
        'zoom-in': '放大', //（Ctrl+）
        'zoom-out': '缩小', //（Ctrl-）
        navigator: '导航',
        quickvisit: {
            save: '保存',
            deploy: '发布到当前版本',
            deployNewVersion: '发布到新版本'
        },
        note: '备注',
        removenote: '移除已有备注'
    },
    //propertygrid
    node: {
        property: {
            basic: '基本属性',
            element: '节点属性',
            graphic: '图形属性',
            dataInput: '数据输入',
            dataOutput: '数据输出',

            actions: '操作',
            form: '表单',
            conditions: '条件',
            extension: '拓展属性',
            presentation: '展现(定义主题、描述)(可选)'
        }
    },
    message: {
        missingNameMessage: '请输入{0}的名称',
        missingIdMessage: '请输入{0}的ID',
        ASCIIMessage: '请输入英文字母或数字，且不能以数字开头',
        actionCannotRemove: '请先删除此动作对应引脚的连线',
        pinsCannotChange: '请先删除该节点开始的线，再切换连线方式',
        inputs: '请输入',
        requiredMessage: '该项为必填项',
        handlerNumber: '请输入最少审批人数',
        legalValue: '请输入有效值',
    },
    //定义属性页
    tabs: {
        basic: '基本属性',
        policies: '策略',
        form: '表单',
        dataInputAssociations: '数据集',
        eventNotifications: '通知',
        notifications: '通知模板',
        notification: '通知模板'
    },
    label: {
        details: '查看详细',
        select: '选择',
        formChoice: '请选择表单',
        otherForm: '暂不支持自定义表单',
        addVariable: '请插入变量',
        day: '天',
        hour:'小时',
        minute:'分钟',
        second: '单位为秒',
        choose:'请选择',
    },
    property: {
        process: '流程',
        textAnnotation:'注释文本',
        //node
        userTask: '用户任务',
        scriptTask: '脚本任务',
        loopTask: '循环任务',
        endEvent: '结束节点',
        startEvent: '开始节点',
        terminateEndEvent: '终止结束节点',
        gateway: '网关',
        exclusiveGateway: '互斥网关',
        inclusiveGateway: '包含网关',

        //common
        name: '名称',
        isForCompensation:'补偿活动',
        terminateProcessWhenRejected: '拒绝后终止流程',
        humanPerformer: '处理人',
        formRight: '表单权限控制',
        "fieldRightSet": '表单权限控制',
        "fieldRight": '表单权限控制',
        potentialOwner: '处理人',
        callActivity: '子流程',
        restServiceTask: '其他服务',
        calledElement: '子流程',
        childProcess:'子流程名',
        calledBindingVersion: '使用版本',
        performerType: '处理策略',
        handleNumber: '需要审批人数',
        completionCondition: '终止条件',
        displayName: '显示名',
        extensionElements: '拓展属性',
        script: '脚本',
        cycleDuration: '循环间隔',
        isLoop: '循环',
        note: '备注',
        pins: '使用引脚',
        cancelActivity: '结束任务',
        loopTask: '循环任务',
        or: '或者',
        dataSet: '数据集',
        sourceRef: '源数据',
        targetRef: '目标数据',
        implementation: '启用目标',
        operationRef: '操作类型',
        returnType: '返回类型',
        timeout: '超时',
        serviceUsername: '用户名',
        password: '密码',

        //form
        form: '表单',
        path: '表单路径',
        attachmentRight: '附件权限',
        block: '区域块',
        formActionSet: '表单操作',
        formActionGroup: '表单操作组',

        formAction: '表单操作',
        type: '类型',
        addSignApproveType: '加签类型',

        //通知
        eventNotifications: '设置通知',
        eventNotification: '通知',
        event: '事件',
        priority: '优先级',
        notificationRef: '通知模板',
        notifications: '设置通知模板',
        notification: '通知模板',
        recipients: '接收人',
        ccs: '抄送',
        bccs: '密送',

        //presentation
        presentationElements: '展现',
        subject: '主题',
        lang: '语言',
        text: '内容',
        description: '描述',

        //io
        ioSpecification: '输入输出',
        inputSet: '输入集',
        optional: '必填',
        dataInput: '数据输入',
        outputSet: '输出集',
        dataOutput: '数据输出',
        itemSubjectRef: '数据类型',
        itemSubject: '数据类型',
        dataInputAssociation: '关联数据',
        dataInputAssociations: '数据集',

        //line
        sequenceFlow: '线',
        conditionExpression: '流转条件',

        //policy
        policies: '策略',
        bypass: '跳过当前节点',
        bypassWhenParticipantIsNull: '无对应处理人时跳过',
        bypassWhenParticipantIsStartUser: '处理人就是提交人时跳过',
        bypassWhenParticipantSameAsPreviousTask: '处理人与前一步骤处理人相同时跳过',
        bypassWhenParticipantProcessed: '处理人与前面任一步骤处理人相同时跳过',
        return: '动作',
        enableReturn: '允许退回到当前节点',
        executeReturn: '允许执行退回',
        executeSuspend: '允许执行挂起',
        executeTerminate: '允许执行终止',
        executeRestart: '允许执行重启',

        //eventDefinition
        timeDuration: '时间间隔',
        timeCycle: '循环周期',

        //multiInstanceLoopCharacteristics
        multiInstanceLoopCharacteristics: '循环任务',
        isSequential: '顺序执行',

        //error
        "ResourceRole": '处理人'
    }
};


/*****************************
**
**    表单语言文件（表单设计器）
**
****************************/

var  formDefaults= {
name: '表单设计器',
    sidebar: '浏览',
defaultName: '未命名',
};
var formLang = {
    menu: {
        "new": '新建',
        open: '打开',
        saveAs: '另存为',
        history: '历史版本',
        shortkey: '快捷键',
    },
    tabs: {
        'language': '多语言值',
        'environment': '系统值',
        'self': '自定义值',
        'empty': '清空',
    },

    button: {
        
        save: '保存',
        release: '发布到当前版本',
        releaseNew: '发布到新版本',
        preview: '预览',
        confirm: '确认',
        cancel: '取消',
        close: '关闭',
        signin: '登录',
        signup: '注册',
        logout: '退出',
        add: '添加',
        edit: '编辑',
        remove: '删除',
        compute: '计算',
        today: '今天',
        personCenter: '个人中心',
        markdown: '使用markdown编辑',
        expand: '展开',
        collapse: '收起',
        fullscreen: '全屏',
        help: '查看帮助',
        menu: '菜单',
        background: '设置为默认背景',
        moreFiles: '到个人中心中查看更多...',
        clearAllDrafts: '清除全部草稿',
        binding: '点击编辑绑定值',
        bindingLanguage: '设置多语言',
    },

    kit: {
        textElement: '文字',
        textbox: '文本框',
        radio: '单选按钮',
        checkbox: '单选框',
        combobox: '下拉框',
        datebox: '日期控件',
        dateRange: '日期范围控件',
        datagrid: '表格控件',
        popupSelector: '复杂选择',
        employeeSelector: '职员选择',
        accountSelector: '账号选择',
        departmentSelector: '部门选择',
        positionSelector: '职位选择',
        jobTitleSelector: '职务选择',
        roleSelector: '角色选择',
        groupSelector: '群组选择',
        delete: '删除',
    },

    state: {
        ready: '准备就绪',
        saved: '所有更改已经保存',
        saving: '正在保存...',
    },

    message: {
        successSave: '保存成功',
        successAutosave: '自动保存成功',
        successOperate: '操作成功',
        fullscreen: '按ESC退出全屏',
        loading: '加载中...',
        nothing: '这里什么也没有...',
        successCheck: '表名可用',
        failCheck: '表名已存在',
        falseVariable: '格式错误',
        checkResult: '测试结果',
        create: function create(time){
            return '创建于'+time;
        },

        update:function update(time){
            return '最后更新于'+ time;
        },
        historyHint: '点击还原为该历史记录',
    },

    placeholder: {
        default: '请输入...',
        select: '请选择...',
        datebox: '请选择日期...',
        employeeSelector: '请选择职员...',
        accountSelector: '请选择账号...',
        roleSelector: '请选择角色...',
        departmentSelector: '请选择部门...',
        positionSelector: '请选择职位...',
        jobTitleSelector: '请选择职务...',
        groupSelector: '请选择群组...',
        datagrid: '表格',
        option1: '选项1',
        option2: '选项2',
        textbox: '请输入',
        number: '数字',
        ascii: '数字和字母',
    },

    shortkey: {
        keys: [
          // {text: 'Ctrl + C', value: '复制'},
          // {text: 'Ctrl + X', value: '剪切'},
          // {text: 'Ctrl + V', value: '粘贴'},
          // {text: 'Ctrl + Z', value: '撤销'},
          // {text: 'Ctrl + Y', value: '重做'},
          { text: 'Ctrl + 鼠标左键', value: '多选' },
          // {text: '鼠标右键 / Alt + 鼠标左键', value: '拖拽画布'},
          { text: 'Delete', value: '删除' },
          // {text: '上 下 左 右', value: '切换选中节点'},
        ]
    },

    property: {
        // common
        title: '标题',
        datasource: '数据源',
        modeltablename: '表名',
        modeltype: '类型',
        theme: '主题',
        placeholder: '占位文字',
        label: '显示文字',
        vertical: '垂直布局',
        optionsVertical: '选项垂直布局',
        on: '选中值',
        off: '未选中值',
        basis: '宽度百分比',
        text: '文字',
        readOnly: '只读',
        options: '全部选项',
        option: '选项',
        style: '样式',
        script: '脚本地址',
        containerStyle: '容器样式',
        labelStyle: '显示文字样式',
        width: '宽度',
        height: '高度',
        require: '必填标志',
        cellpadding: '单元格内边距',
        cellspacing: '单元格外边距',
        textAlign: '对齐方式',
        langs: '多语言',

        //data
        dataOptions: '数据属性',
        isComputed: '是否为计算值',
        value: '值',
        name: '名称',
        displayName: '显示名',
        type: '类型',
        defaultValue: '默认值',
        length: '最大长度',
        defaultText: '默认显示文字',
        expression: '表达式',
        hidden: '隐藏',
        onChange: '绑定值改变事件',
        dataInputs: '数据输入',

        //textbox
        required: '必填项',
        requiredMessage: '必填提示文字',
        rule: '验证规则',
        invalidMessage: '无效提示文字',
        multiline: '多行文本框',
        editable: '可编辑',

        //Datebox
        dateFormat: '日期格式',
        todayButton: '是否显示今天按钮',
        showYearDropdown: '显示下拉年份选择框',
        startPlaceholder: '开始占位文字',
        endPlaceholder: '结束占位文字',
        startData: '开始值',
        endData: '结束值',

        //datagrid
        idField: 'id属性名',
        multiSelect: '多选',
        fit: '自适性',
        fitColumns: '列宽自适应',
        toolbar: '工具栏',
        inlineEdit: '行内编辑',
        rowNumber: '行号',
        rowNumberWidth: '行号宽度',
        pagination: '分页',
        pageSize: '每页显示的行数',
        paginationLabel: '分页显示文字',
        columns: '全部列',
        column: '列',
        field: '属性',

        //editor
        editor: '编辑器',
        textboxOptions: '编辑器属性',
        comboboxOptions: '编辑器属性',
        checkboxOptions: '编辑器属性',
        radioOptions: '编辑器属性',
        dateboxOptions: '编辑器属性',

        //tab
        basic: '基本属性',
        col: '列属性',
        data: '数据属性',
        block: '块属性',
        colSpan: '跨列数',
        rowSpan: '跨行数',
        language: '多语言',
    },

    columns: {
        name: '名称',
        lastUpdateTime: '上次更新时间',
        createTime: '创建时间',
    },

time: {       
        justnow: '刚刚',
        minutesago: function minutesago(m){
            return m+'分钟前';
        },
        hoursago:function hoursago(h){
            return h+'小时前';
        },
        yesterday: '昨天',
        daysago:function daysago(d){
            return d+'天前';
        },
        longago: '很久之前',
    },

    configText: {
        select: '请选择',
        string: '字符串',
        bool: '布尔值',
        number: '数字',
        datetime: '日期',
        center: '居中',
        alignLeft: '左对齐',
        alignRight: '右对齐',
        'zh-CN': '中文简体',
        en: '英文',
        'zh-TW': '中文繁体',
        level1: '一级标题',
        level2: '二级标题',
        level3: '三级标题',
        plainText: '普通文本',
        'default': '默认',
        'simple': '简约',
        'employee.id': '提交人id',
        'employee.name': '提交人姓名',
        'employee.jobNo': '提交人工号',
        'orgInfo.id': '提交人首要部门id',
        'orgInfo.name': '提交人首要部门名称',
        'orgInfo.namePath': '提交人首要部门层级名称',
        'account.id': '提交人账号id',
        'account.loginId': '提交人账号登录名',
        'acount.domainAccount': '提交人账号域账户',
        'processInstance.pIId': '流程id',
        'processInstance.name': '流程名称',
        'processInstance.state': '当前流程状态',
        'workItem.id': '当前任务id',
        'workItem.name': '当前任务名称',
        'workItem.state': '当前任务状态',
        'binding': '绑定值',
        'detection': '检测'
    }
}

import router from './router'
import store from '@/vuex/index'
import Home from '@/views/home/home'
import AgentList from '@/views/agent_mgmt/agent_list'
import AgentMonitor from '@/views/agent_mgmt/agent_monitor'
import CalendarMgmt from '@/views/job_flow_mgmt/calendar_mgmt'
import JobFlowList from '@/views/job_flow_mgmt/job_flow_list'
import NewJobFlow from '@/views/job_flow_mgmt/new_job_flow'
import VariableMgmt from '@/views/job_flow_mgmt/variable_mgmt'
import JobList from '@/views/job_mgmt/job_list'
import NewJob from '@/views/job_mgmt/new_job'
import ScanFile from '@/views/job_mgmt/scan_file'
import SingleJob from '@/views/job_mgmt/single_job'
import JobViewHistory from '@/views/job_monitor/history/job_view_history'
import JobFlowViewHistory from '@/views/job_monitor/history/job_flow_view_history'
import MultipleJob from '@/views/job_mgmt/multiple_job'
import JobHistory from '@/views/job_monitor/history/job_history'
import JobMonitor from '@/views/job_monitor/monitor/job_monitor'
import SysSetup from '@/views/system/sys_setup'
import UserAndPermissions from '@/views/system/user_and_permissions'
import AlarmList from '@/views/alarm_center/alarm_list'
import JobView from '@/views/job_monitor/monitor/job_view'
import JobFlowView from '@/views/job_monitor/monitor/job_flow_view'
import ViewDetail from '@/views/job_monitor/monitor/view_detail'
import SingleJobFlow from '@/views/job_flow_mgmt/single_job_flow'
import MultipleJobFlow from '@/views/job_flow_mgmt/multiple_job_flow'
import ImportFile from '@/views/job_flow_mgmt/import_file'
import JobDetail from '@/views/job_monitor/monitor/job_detail'
import Log from '@/views/system/log'
import LogMange from '@/views/system/log_mange'
import Report from '@/views/report/report'
import SystemClassManage from '@/views/system/system_class_manage'
import JobFlowDetail from '@/views/job_monitor/history/job_flow_detail'
import JobViewDetail from '@/views/job_monitor/history/job_view_detail'
import variableChange from '@/views/job_flow_mgmt/variable_change'
import AddCalendarMgmt from '@/views/job_flow_mgmt/add_calendar_mgmt'
import LargeScreen from '@/views/job_monitor_large_screen/large_screen'
import TaskList from '@/views/task_mgmt/task_list'
import TaskCreate from '@/views/task_mgmt/task_create'

// const _import = require('./router/_import_' + process.env.NODE_ENV) // ?????????????????????

let getRouter // ?????????????????????????????????
// let getMenuList // ?????????????????????????????????
let getButton // ???????????????????????????????????????
saveObjArr('router', '')

router.beforeEach((to, from, next) => {
    // console.log(getRouter)
    if (!getRouter) { // ?????????????????????????????????????????????
        if (!getObjArr('router')) {
            getRouter = [
                {
                    'path': '/',
                    'name': 'home',
                    'component': 'Home',
                    'meta': {
                        'title': '??????'
                    }
                },
                {
                    'path': '/log',
                    'name': 'Log',
                    'component': 'Log',
                    'meta': {
                        'title': '????????????'
                    }
                },
                {
                    'path': '/addcalendarmgmt',
                    'name': 'AddCalendarMgmt',
                    'component': 'AddCalendarMgmt',
                    'meta': {
                        'title': '????????????',
                        'back': 'true',
                        'fatherName': 'CalendarMgmt'
                    }
                },
                {
                    'path': '/variablechange',
                    'name': 'variableChange',
                    'component': 'variableChange',
                    'meta': {
                        'title': '?????????',
                        'back': 'true',
                        'fatherName': 'VariableMgmt'
                    }
                },
                {
                    'path': '/singlejob',
                    'name': 'SingleJob',
                    'component': 'SingleJob',
                    'meta': {
                        'title': '????????????',
                        'back': 'true',
                        'fatherName': 'NewJob'
                    }
                },
                {
                    'path': '/singleJobdetail',
                    'name': 'singleJobDetail',
                    'component': 'SingleJob',
                    'meta': {
                        'title': '???????????? > ???????????? > ????????????'
                    }
                },
                {
                    'path': '/viewdetail',
                    'name': 'ViewDetail',
                    'component': 'ViewDetail',
                    'meta': {
                        'title': '?????????????????????',
                        'back': 'true',
                        'fatherName': 'JobMonitor'
                    }
                },
                {
                    'path': '/jobflowdetail',
                    'name': 'JobFlowDetail',
                    'component': 'JobFlowDetail',
                    'meta': {
                        'title': '???????????????????????????',
                        'back': 'true',
                        'fatherName': 'JobHistory'
                    }
                },
                {
                    'path': '/jobviewdetail',
                    'name': 'JobViewDetail',
                    'component': 'JobViewDetail',
                    'meta': {
                        'title': '????????????????????????',
                        'back': 'true',
                        'fatherName': 'JobHistory'
                    }
                },
                {
                    'path': '/multiplejob',
                    'name': 'MultipleJob',
                    'component': 'MultipleJob',
                    'meta': {
                        'title': '??????????????????',
                        'back': 'true',
                        'fatherName': 'NewJob'
                    }
                },
                {
                    'path': '/scanfile',
                    'name': 'ScanFile',
                    'component': 'ScanFile',
                    'meta': {
                        'title': '????????????',
                        'back': 'true',
                        'fatherName': 'NewJob'
                    }
                },
                {
                    'path': '/home',
                    'name': 'home',
                    'component': 'Home',
                    'meta': {
                        'title': '??????'
                    }
                },
                {
                    'path': '/agentlist',
                    'name': 'AgentList',
                    'component': 'AgentList',
                    'meta': {
                        'title': 'Agent??????'
                    }
                },
                {
                    'path': '/agentmonitor',
                    'name': 'AgentMonitor',
                    'component': 'AgentMonitor',
                    'meta': {
                        'title': 'Agent??????'
                    }
                },
                {
                    'path': '/calendarmgmt',
                    'name': 'CalendarMgmt',
                    'component': 'CalendarMgmt',
                    'meta': {
                        'title': '????????????'
                    }
                },
                {
                    'path': '/jobflowlist',
                    'name': 'JobFlowList',
                    'component': 'JobFlowList',
                    'meta': {
                        'title': '???????????????'
                    }
                },
                {
                    'path': '/newjobflow',
                    'name': 'NewJobFlow',
                    'component': 'NewJobFlow',
                    'meta': {
                        'title': '???????????????'
                    }
                },
                {
                    'path': '/singlejobflow',
                    'name': 'SingleJobFlow',
                    'component': 'SingleJobFlow',
                    'meta': {
                        'title': '???????????????',
                        'back': 'true',
                        'fatherName': 'NewJobFlow'
                    }
                },
                {
                    'path': '/multiplejobflow',
                    'name': 'MultipleJobFlow',
                    'component': 'MultipleJobFlow',
                    'meta': {
                        'title': '????????????',
                        'back': 'true',
                        'fatherName': 'NewJobFlow'
                    }
                },
                {
                    'path': '/importfile',
                    'name': 'importFile',
                    'component': 'ImportFile',
                    'meta': {
                        'title': '????????????',
                        'back': 'true',
                        'fatherName': 'NewJobFlow'
                    }
                },
                {
                    'path': '/variablemgmt',
                    'name': 'VariableMgmt',
                    'component': 'VariableMgmt',
                    'meta': {
                        'title': '????????????'
                    }
                },
                {
                    'path': '/joblist',
                    'name': 'JobList',
                    'component': 'JobList',
                    'meta': {
                        'title': '????????????'
                    }
                },
                {
                    'path': '/newjob',
                    'name': 'NewJob',
                    'component': 'NewJob',
                    'meta': {
                        'title': '????????????'
                    }
                },
                {
                    'path': '/jobhistory',
                    'name': 'JobHistory',
                    'component': 'JobHistory',
                    'meta': {
                        'title': '????????????'
                    },
                    'children': [
                        {
                            'path': '/jobflowviewhistory',
                            'name': 'JobFlowViewHistory',
                            'component': 'JobFlowViewHistory',
                            'meta': {
                                'title': '????????????',
                                'fatherName': 'JobHistory'
                            }
                        },
                        {
                            'path': '/jobviewhistory',
                            'name': 'JobViewHistory',
                            'component': 'JobViewHistory',
                            'meta': {
                                'title': '????????????',
                                'fatherName': 'JobHistory'
                            }
                        }
                    ]
                },
                {
                    'path': '/report',
                    'name': 'Report',
                    'component': 'Report',
                    'meta': {
                        'title': '????????????'
                    }
                },
                {
                    'path': '/largescreen',
                    'name': 'LargeScreen',
                    'component': 'LargeScreen',
                    'meta': {
                        'title': '??????????????????'
                    }
                },
                {
                    'path': '/jobmonitor',
                    'name': 'JobMonitor',
                    'component': 'JobMonitor',
                    'meta': {
                        'title': '????????????'
                    },
                    'children': [
                        {
                            'path': '/jobview',
                            'name': 'JobView',
                            'component': 'JobView',
                            'meta': {
                                'title': '????????????',
                                'fatherName': 'JobMonitor'
                            }
                        },
                        {
                            'path': '/jobflowview',
                            'name': 'JobFlowView',
                            'component': 'JobFlowView',
                            'meta': {
                                'title': '????????????',
                                'fatherName': 'JobMonitor'
                            }
                        }
                    ]
                },
                {
                    'path': '/jobdetail',
                    'name': 'jobDetail',
                    'component': 'JobDetail',
                    'meta': {
                        'title': '??????????????????',
                        'back': 'true',
                        'fatherName': 'JobMonitor'
                    }
                },
                {
                    'path': '/syssetup',
                    'name': 'SysSetup',
                    'component': 'SysSetup',
                    'meta': {
                        'title': '????????????'
                    }
                },
                {
                    'path': '/userandpermissions',
                    'name': 'UserAndPermissions',
                    'component': 'UserAndPermissions',
                    'meta': {
                        'title': '???????????????'
                    }
                },
                {
                    'path': '/systemclassmanage',
                    'name': 'SystemClassManage',
                    'component': 'SystemClassManage',
                    'meta': {
                        'title': '??????????????????'
                    }
                },
                {
                    'path': '/logmange',
                    'name': 'LogMange',
                    'component': 'LogMange',
                    'meta': {
                        'title': '????????????'
                    }
                },
                {
                    'path': '/alarmlist',
                    'name': 'AlarmList',
                    'component': 'AlarmList',
                    'meta': {
                        'title': '????????????'
                    }
                },
                {
                    'path': '/taskList',
                    'name': 'TaskList',
                    'component': 'TaskList',
                    'meta': {
                        'title': '????????????'
                    }
                },
                {
                    'path': '/taskCreate',
                    'name': 'taskCreate',
                    'component': 'TaskCreate',
                    'meta': {
                        'title': '????????????',
                        'fatherName': 'TaskList',
                        'back': 'true'
                    }
                }
            ]
            getButton = [
                {
                    'url': '/agentlist',
                    'auth': {
                        'search': true,
                        'create': true,
                        'modify': true,
                        'del': true
                    }
                },
                {
                    'url': '/agentmonitor',
                    'auth': {
                        'search': true
                    }
                },
                {
                    'url': '/newjob',
                    'auth': {
                        'create': true
                    }
                },
                {
                    'url': '/joblist',
                    'auth': {
                        'search': true,
                        'operate': true,
                        'modify': true,
                        'del': true
                    }
                },
                {
                    'url': '/newjobflow',
                    'auth': {
                        'create': true
                    }
                },
                {
                    'url': '/jobflowlist',
                    'auth': {
                        'search': true,
                        'operate': true,
                        'modify': true,
                        'del': true
                    }
                },
                {
                    'url': '/calendarmgmt',
                    'auth': {
                        'search': true,
                        'create': true,
                        'modify': true,
                        'del': true
                    }
                },
                {
                    'url': '/variablemgmt',
                    'auth': {
                        'search': true,
                        'create': true,
                        'modify': true,
                        'del': true
                    }
                },
                {
                    'url': '/jobflowview',
                    'auth': {
                        'search': true,
                        'operate': true
                    }
                },
                {
                    'url': '/jobflowviewhistory',
                    'auth': {
                        'search': true
                    }
                },
                {
                    'url': '/jobview',
                    'auth': {
                        'search': true,
                        'operate': true
                    }
                },
                {
                    'url': '/jobviewhistory',
                    'auth': {
                        'search': true
                    }
                },
                {
                    'url': '/alarmlist',
                    'auth': {
                        'search': true
                    }
                },
                {
                    'url': '/syssetup',
                    'auth': {
                        'operate': true,
                        'modify': true
                    }
                },
                {
                    'url': '/userandpermissions',
                    'auth': {
                        'search': true,
                        'create': true
                    }
                },
                {
                    'url': '/systemclassmanage',
                    'auth': {
                        'search': true,
                        'create': true,
                        'modify': true,
                        'del': true
                    }
                },
                {
                    'url': '/log',
                    'auth': {
                        'search': true
                    }
                },
                {
                    'url': '/viewdetail',
                    'auth': {
                        'search': true,
                        'operate': true
                    }
                },
                {
                    'url': '/taskList',
                    'auth': {
                        'search': true,
                        'operate': true
                    }
                },
                {
                    'url': '/taskCreate',
                    'auth': {
                        'search': true,
                        'operate': true
                    }
                }
            ]
            saveObjArr('router', getRouter) // ???????????????localStorage
            routerGo(to, next) // ????????????????????????
        } else { // ???localStorage???????????????
            getRouter = getObjArr('router') // ????????????
            routerGo(to, next)
        }
    } else {
        next()
    }
})

function routerGo(to, next) {
    getRouter = filterAsyncRouter(getRouter) // ????????????
    router.addRoutes(getRouter) // ??????????????????
    store.state.antRouter = getRouter // ????????????????????????????????????
    // store.state.displayMenu = getMenuList //?????????????????????????????????????????????????????????????????????
    // store.state.displayButton = getButton // ??????????????????????????????????????????????????????????????????????????????
    store.commit('changeBtnPermission', getButton)
    next({
        ...to,
        replace: true
    })
}

function saveObjArr(name, data) { // localStorage ???????????????????????????
    localStorage.setItem(name, JSON.stringify(data))
}

function getObjArr(name) { // localStorage ???????????????????????????
    return JSON.parse(window.localStorage.getItem(name))
}

const ROUTER_MAP = {
    'Home': Home,
    'AgentList': AgentList,
    'AgentMonitor': AgentMonitor,
    'CalendarMgmt': CalendarMgmt,
    'JobFlowList': JobFlowList,
    'NewJobFlow': NewJobFlow,
    'VariableMgmt': VariableMgmt,
    'JobList': JobList,
    'NewJob': NewJob,
    'AddCalendarMgmt': AddCalendarMgmt,
    'variableChange': variableChange,
    'ScanFile': ScanFile,
    'SingleJob': SingleJob,
    'SingleJobDetail': SingleJob,
    'JobViewHistory': JobViewHistory,
    'JobFlowViewHistory': JobFlowViewHistory,
    'MultipleJob': MultipleJob,
    'JobHistory': JobHistory,
    'JobMonitor': JobMonitor,
    'SysSetup': SysSetup,
    'UserAndPermissions': UserAndPermissions,
    'AlarmList': AlarmList,
    'JobView': JobView,
    'JobFlowView': JobFlowView,
    'ViewDetail': ViewDetail,
    'SingleJobFlow': SingleJobFlow,
    'MultipleJobFlow': MultipleJobFlow,
    'ImportFile': ImportFile,
    'JobDetail': JobDetail,
    'Log': Log,
    'LogMange': LogMange,
    'Report': Report,
    'SystemClassManage': SystemClassManage,
    'JobFlowDetail': JobFlowDetail,
    'JobViewDetail': JobViewDetail,
    'LargeScreen': LargeScreen,
    'TaskList': TaskList,
    'TaskCreate': TaskCreate
}

function filterAsyncRouter(asyncRouterMap) { // ????????????????????????????????????????????????????????????
    const accessedRouters = asyncRouterMap.filter(route => {
        if (route.component) {
            route.component = ROUTER_MAP[route.component]
            // if (route.component === 'Layout') { //Layout??????????????????
            //     route.component = Layout
            // } else {
            //     route.component = _import(route.component)
            // }
        }
        if (route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children)
        }
        return true
    })
    return accessedRouters
}

// ?????????????????????????????????
export function hasPermission(permission) {
    const myBtns = store.state.permission.btnPermission
    for (let i = 0; i < myBtns.length; i++) {
        if (myBtns[i].url === permission) {
            return myBtns[i].auth
        }
    }
}

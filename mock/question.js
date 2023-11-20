const Mock = require('mockjs')
const getQuestionList = require('./data/getQuestionList')

const Random = Mock.Random

module.exports = [
    {
        url: '/api/question/:id',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                    title: Random.ctitle(),
                    // 组件列表
                    componentList: [
                        {
                            fe_id: Random.id(),
                            type: 'questionTitle', // 组件类型不能重复，前后端统一
                            title: '标题',
                            props: {
                                text: '工资收入调查', 
                                level: 1,
                                isCenter: false,
                            }
                        },
                        {
                            fe_id: Random.id(),
                            type: 'questionInput', // 组件类型不能重复，前后端统一
                            title: '输入框',
                            props: {
                                title: '你的姓名',
                                placeholder: '请输入姓名...'
                            }
                        },
                        {
                            fe_id: Random.id(),
                            type: 'questionInput', // 组件类型不能重复，前后端统一
                            title: '输入框',
                            props: {
                                title: '你的职业',
                                placeholder: '请输入职业...'
                            }
                        },
                    ]
                }
                
                // errno: 1002,
                // msg: '错误测试'
            }
        }
    },

    {
        url: '/api/question',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                }
            }
        }
    },
    {
        url: '/api/question',
        method: 'get',
        response(ctx) {
            const { url = '', query ={} } = ctx;
            const isDeleted = url.indexOf('isDeleted=true') > -1;
            const isStar = url.indexOf('isStar=true') > -1;
            const pageSize = parseInt(query.pageSize) || 10;
            return {
                errno: 0,
                data: {
                    list: getQuestionList({ isDeleted, isStar, len: pageSize }),
                    total: 100,
                }
            }
        }
    },
    {
        url: '/api/question/:id',
        method: 'patch',
        response(ctx) {
            return {
                errno: 0,
            }
        }
    },
    {
        url: '/api/question/duplicate/:id',
        method: 'post',
        response(ctx) {
            return {
                errno: 0,
                data: {
                    id: Random.id()
                }
            }
        }
    },
    {
        url: '/api/question',
        method: 'delete',
        response(ctx) {
            return {
                errno: 0,
            }
        }
    }

]
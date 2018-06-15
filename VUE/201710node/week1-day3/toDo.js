/**
 *
 1、将数据循环到桌面上
 2、敲回车时添加新数据(需要加入isSelected属性)
 3、删除功能
 4、计算一下当前没有被选中的个数

 */

const vm = new Vue({
    el:'#app',
    data:{
        todos:[
            {
                isSelected:false,
                title:'睡觉'
            },
            {
                isSelected:false,
                title:'吃饭'
            }
        ],
        newTitle:'',
        cur:''
    },
    methods:{
        add(){
            this.todos.push({
                isSelected:false,
                title:this.newTitle
            });
            this.newTitle = ''
        },
        remove(todo){  //拿到当前点击的这一条todo与数组中的每一条比对，
            this.todos = this.todos.filter(item => item!==todo);
        },
        remember(todo){  //双击变成输入框， todo是当前双击的这一条
            this.cur = todo;
        },
        cancel(){
            this.cur = ''
        }
    },
    computed:{
        count(){
            return this.todos.filter(item => !item.isSelected).length;
        }
    }
});


//监控数据变化，并存到本地

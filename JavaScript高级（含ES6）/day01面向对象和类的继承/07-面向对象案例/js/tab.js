var that;
class Tab {
    constructor(id) {
        //获取元素
        that = this;
        this.main = document.querySelector(id);
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.add = this.main.querySelector('.tabadd');
        // li的父元素
        this.ul = this.main.querySelector('.fisrstnav ul:first-child');
        this.init();
    }
    init() {
            this.add.onclick = this.addTab;
            // init初始化操作让相关的元素绑定事件
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].onclick = this.toggleTab;

            }

        }
        // 1.切换功能
    toggleTab() {
        // console.log(this.index);
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    clearClass() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = '';
                this.sections[i].className = '';
            }
        }
        // 2.添加功能
    addTab() {
            //    (1)创建Li元素和section元素
            var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
            // (2)把这两个元素追加到对应的父元素里面
            that.ul.insertAdjacentHTML('beforeend', li);
        }
        // 3.删除功能
    removeTab() {

        }
        // 4.修改功能
    editTab() {

    }
}
new Tab('#tab');
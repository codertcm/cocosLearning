// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        // 触摸事件
        let self = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function(event){
            console.debug("触摸:" + event.getLocation());
            // self.node.emit("myevent");

            // 冒泡传递
            // self.node.dispatchEvent(new cc.Event.EventCustom("myevent", true));

            

        });

        // 监听自定义事件
        this.node.on("myevent", function(event){
            console.debug("自定义事件");
        });
    }

    // update (dt) {}
}

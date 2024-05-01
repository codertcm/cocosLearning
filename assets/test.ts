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
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function(event){
            console.debug("鼠标按下了:" + event.getLocation());
            if(event.getButton() == cc.Event.EventMouse.BUTTON_LEFT){
                console.debug("左键");
            } else if(event.getButton() == cc.Event.EventMouse.BUTTON_RIGHT){
                console.debug("右键");
            }
        });

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function(event){
            console.debug(event.keyCode);
            if(event.keyCode == cc.macro.KEY.w){
                console.debug("w");
            } else if (event.keyCode == cc.macro.KEY.q){
                console.debug("q");
            }
        });
    }

    // update (dt) {}

    protected onDestroy(): void {
        this.node.off(cc.Node.EventType.MOUSE_DOWN);
    }
}

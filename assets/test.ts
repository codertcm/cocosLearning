// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Test extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // 初始化调用
    onLoad () {}

    protected onEnable(): void {
        
    }

    
    // 初始化调用
    start () {

    }

    update (dt) {}

    protected lateUpdate(dt: number): void {
        
    }

    protected onDisable(): void {
        
    }

    protected onDestroy(): void {
        
    }
}

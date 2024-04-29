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
    onLoad () {
        console.debug("onLoad");
    }

    // 启用时调用
    protected onEnable(): void {
        console.debug("onEnable");
    }

    
    // 初始化调用
    start () {
        console.debug("start");
    }

    // 每帧调用， dt：调用间隔时间
    update (dt) {}

    protected lateUpdate(dt: number): void {
        
    }

    // 禁用时调用
    protected onDisable(): void {
        console.debug("onDisable");
    }

    // 销毁时调用
    protected onDestroy(): void {
        console.debug("onDestroy");
    }
}

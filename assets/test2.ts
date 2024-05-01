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
        // 碰撞检测
        cc.director.getCollisionManager().enabled = true;

    }

    // 产生碰撞
    onCollisionEnter(other){
        console.debug("碰撞发生" + other.tag);

    }

    onCollisionStay(other){
        console.debug("碰撞持续");
    }

    onCollisionExit(other){
        console.debug("碰撞结束");
    }

    // update (dt) {}
}

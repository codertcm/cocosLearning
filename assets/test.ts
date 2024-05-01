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
        // 加载第二个场景

        // cc.director.loadScene("4", function(){
        //     // 当前已经加载到新的场景了


        // });

        // 预加载
        // cc.director.preloadScene("4", function(){
        //     // 这个场景加载到内存了，还没有用
        //     cc.director.loadScene("4");
        // });

        
        // cc.game.addPersistRootNode(this.node);
        // cc.game.removePersistRootNode(this.node);


    }

    // update (dt) {}
}

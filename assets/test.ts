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
        // http://www.base.com/1.png
        let self = this;
        // cc.loader.loadRes("test/1/fragment_6", cc.SpriteFrame, function(err, sp){
        //     //...(1) 图片加载完成后执行
        //     self.getComponent(cc.Sprite).spriteFrame = sp;

        // });

        // 图集加载
        cc.loader.loadRes("test/1", cc.SpriteAtlas, function(err, altas: cc.SpriteAtlas){
            self.getComponent(cc.Sprite).spriteFrame = altas.getSpriteFrame("fragment_6");
        });

        //...(2)

        // (1)(2)谁先执行不确定
    }

    // update (dt) {}
}

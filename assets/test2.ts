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
        // 获得子节点
        // this.node.children[0];
        // this.node.getChildByName("abc");
        // cc.find("Canvas/Main Camera");

        // 获得父节点
        // this.node.getParent();
        // this.node.setParent();

        // 移除所有子节点
        // this.node.removeAllChildren();

        // 移除某个子节点
        // this.node.removeChild(ddd);
        
        // 从父节点中移除掉
        // this.node.removeFromParent();

        // 访问位置
        // this.node.x
        // this.node.y
        // this.node.setPosition(3,4);
        // this.node.setPosition(cc.v2(3,4));

        // 旋转
        // this.node.rotation

        // 缩放
        // this.node.scale

        // 锚点
        // this.node.anchorX

        // 颜色
        // this.node.color = cc.Color.RED;

        // 节点开关
        // this.node.active = false;

        // 组件开关
        this.enabled = false;

        // 获取组件 获取失败为null
        // let sprite = this.getComponent(cc.Sprite);

        // 获取多个组件
        // let sprite = this.getComponents(cc.Sprite);


        this.getComponentInChildren(cc.Sprite);

    }

    update (dt) {
        
    }
}

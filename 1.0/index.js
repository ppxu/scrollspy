/**
 * @fileoverview 
 * @author 自寒<zihan.yx@taobao.com>
 * @module scrollspy
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class Scrollspy
     * @constructor
     * @extends Base
     */
    function Scrollspy(comConfig) {
        var self = this;
        //调用父类构造函数
        Scrollspy.superclass.constructor.call(self, comConfig);
    }
    S.extend(Scrollspy, Base, /** @lends Scrollspy.prototype*/{

    }, {ATTRS : /** @lends Scrollspy*/{

    }});
    return Scrollspy;
}, {requires:['node', 'base']});




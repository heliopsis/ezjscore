/*
YUI 3.7.1 (build 5627)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("editor-lists",function(e,t){var n=function(){n.superclass.constructor.apply(this,arguments)},r="li",i="ol",s="ul",o="host";e.extend(n,e.Base,{_onNodeChange:function(t){var u=this.get(o).getInstance(),a,f,l,c,h,p,d=!1,v,m=!1;t.changedType==="tab"&&(t.changedNode.test(r+", "+r+" *")&&(t.changedEvent.halt(),t.preventDefault(),f=t.changedNode,h=t.changedEvent.shiftKey,p=f.ancestor(i+","+s),v=s,p.get("tagName").toLowerCase()===i&&(v=i),f.test(r)||(f=f.ancestor(r)),h?f.ancestor(r)&&(f.ancestor(r).insert(f,"after"),d=!0,m=!0):f.previous(r)&&(c=u.Node.create("<"+v+"></"+v+">"),f.previous(r).append(c),c.append(f),d=!0)),d&&(f.test(r)||(f=f.ancestor(r)),f.all(n.REMOVE).remove(),e.UA.ie&&(f=f.append(n.NON).one(n.NON_SEL)),(new u.EditorSelection).selectNode(f,!0,m)))},initializer:function(){this.get(o).on("nodeChange",e.bind(this._onNodeChange,this))}},{NON:'<span class="yui-non">&nbsp;</span>',NON_SEL:"span.yui-non",REMOVE:"br",NAME:"editorLists",NS:"lists",ATTRS:{host:{value:!1}}}),e.namespace("Plugin"),e.Plugin.EditorLists=n},"3.7.1",{requires:["editor-base"]});

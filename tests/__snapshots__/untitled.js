function anonymous(context, extra) {
 var h = this.utils.h;
          let c1 = [], p1 = {key:1};
          var vn1 = h('div', p1, c1);
          if (context['state'].display) {
              //WIDGET
              let _2_index = c1.length;
              c1.push(null);
              let def3;
              let w4 = 4 in context.__owl__.cmap ? context.__owl__.children[context.__owl__.cmap[4]] : false;
              let props4 = {};
              if (w4 && w4.__owl__.renderPromise && !w4.__owl__.vnode && props4 !== w4.__owl__.renderProps) {
                  w4.destroy();
                  w4 = false
              }
              if (!w4) {
                  let W4 = context.widgets['Child'];
                  if (!W4) {throw new Error(`Cannot find the definition of widget "Child"`)}
                  w4 = new W4(owner, props4);
                  context.__owl__.cmap[4] = w4.__owl__.id;
                  def3 = w4._prepare();
                  def3 = def3.then(vnode=>{let pvnode=h(vnode.sel, {key: 4, hook: {insert: (vn) => {let nvn=w4._mount(vnode, pvnode.elm);pvnode.elm=nvn.elm;this.utils.transitionInsert(vn.elm, 'chimay');},remove: () => {},destroy: (vn) => {let finalize = () => {
                w4.destroy();
              };
              this.utils.transitionRemove(vn.elm, 'chimay', finalize);}}});c1[_2_index]=pvnode;w4.__owl__.pvnode = pvnode;});
              } else {
                  def3 = w4._updateProps(props4, extra.forceUpdate, extra.patchQueue);
                  def3 = def3.then(()=>{if (w4.__owl__.isDestroyed) {return};let pvnode=w4.__owl__.pvnode;c1[_2_index]=pvnode;});
              }
              extra.promises.push(def3);
          }

}